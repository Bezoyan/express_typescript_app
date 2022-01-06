import { Router, Request, Response , NextFunction } from "express";

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn){
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}

const router = Router();



router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password } = req.body;
  
  if(email && password && email === "hello@gmail.com" && password === '123456') {
    // marked logedin
    req.session = { loggedIn: true };
    // redirect to the root dir
    res.redirect('/');
  }
  else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are loggedIn</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You are noot loggedIn</div>
      <a href="/login">LogIn</a>
    </div>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };