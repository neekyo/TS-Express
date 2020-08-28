import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

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

	@post('/login')
	@bodyValidator('email', 'password')
	postLogin(req: Request, res: Response) {
		const { email, password } = req.body;

		if (email && password && email === 'hi@hi.com' && password === 'password') {
			req.session = { loggedIn: true };
			res.redirect('/');
		} else {
			res.send('Invalid email or password');
		}
	}
}
