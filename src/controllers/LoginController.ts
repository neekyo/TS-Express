import { Request, Response, NextFunction } from 'express';
import { get, controller } from './decorators';

@controller('/auth')
class LoginController {
	@get('/login')
	getLogin(req: Request, res: Response): void {
		res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" autocomplete="none" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" autocomplete="none" />
      </div>
      <button>Submit</button>
    </form>
    `);
	}
}
