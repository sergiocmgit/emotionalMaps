import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	loginForm: FormGroup = new FormGroup({
		username: new FormControl(),
		password: new FormControl()
	});

	constructor(private userService: UserService,
		private router: Router) { }

	login(): void {
		this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
			.subscribe(
				res => {
					if (res['statusCode'] == 200) {
						console.log("INICIO DE SESION BIEN");
						console.log(res['data']);
						localStorage.setItem('token', res['data']);
						this.router.navigate(['home']);
					}
					else {
						console.log("INICIO DE SESION MAL");
					}
				},
				err => {
					console.log(err);
					console.log("Error al iniciar sesion");
				});
	}

}
