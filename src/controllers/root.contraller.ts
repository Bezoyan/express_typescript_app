import { Request, Response, NextFunction } from 'express'
import { get, controller, use } from './decorators';

// auth middware
function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn){
      next();
      return;
    }
    res.status(403);
    res.send('Not permitted');
}

@controller('')
class RootContraller {
  @get('/')  
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
            <div>You are loggedIn</div>
            <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
        <div>You are noot loggedIn</div>
        <a href="/auth/login">LogIn</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }
}