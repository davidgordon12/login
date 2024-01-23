import { Component } from '@angular/core';
import { User } from '../../models/userModel';
import { authenticate } from '../../services/demo-authenticator';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
    username?: string;
    password?: string;

    validate(): boolean {
        if(this.username == "" || this.username == undefined) return false;
        if(this.password == "" || this.password == undefined) return false;

        return true;
    }

    async login() {
        if(!this.validate()) {
            alert("Invalid username or password")
            return
        }

        let user: User = {
            username: this.username!,
            password: this.password!,
        }
        
        alert(await authenticate(user) ? "Success" : "Failed")
    }
}
