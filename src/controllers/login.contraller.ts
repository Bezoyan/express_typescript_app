import { Request, Response, NextFunction } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller('/auth')
class LoginContraller {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(
        `<form method="POST">
          <div>
            <label>Email</label>
            <input name="email"/>
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password"/>
          </div>
            <button>Submit</button>
        </form>`
    );
  };
  
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
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
  };

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  };
}