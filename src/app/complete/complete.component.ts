import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacionService } from '../services/autorizacion.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  user: any = [];
  directive: any = [];

  userId: any = null;
  userMail: any = null;

  showInputs: boolean = false;

  constructor(private autorizacionService: AutorizacionService,
              private mainService: MainService,
              private router: Router) {

    this.autorizacionService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.userId = this.autorizacionService.getUser().currentUser.uid;
          this.userMail = this.autorizacionService.getUser().currentUser.email;
          this.user.name = this.autorizacionService.getUser().currentUser.displayName;

          this.mainService.getUser(this.userId).valueChanges().subscribe((user) => {
            if (user) {
              console.log('ya existe');
              this.router.navigate(['/home']);
            }
          });

        } else {
          console.log('no hay usuario');
        }
      }, (error) => {
        console.log(error);
      });
  }

  onChange(deviceValue) {
    if (deviceValue == 4) {
      this.showInputs = true;
      this.user.directive = this.directive;
    } else {
      this.showInputs = false;
    }
  }

  createProfile() {
    console.log(this.user);
    this.user.uId = this.userId;
    this.user.email = this.userMail;
    this.mainService.saveUser(this.user);
    console.log(this.user);
  }

  ngOnInit() {
  }

}
