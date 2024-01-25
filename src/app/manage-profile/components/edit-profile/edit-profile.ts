import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/shared/utils/services/user-session.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss'
})
export class EditProfileComponent {

  showUserProfile!: any
  email: string = ''
  userName: string = ''
  public userDetails: any
  isLoginSucess?: any
  constructor(private profileDetail: ProfileService, private router: Router, private userSessionService: UserSessionService) {
    this.userSessionService.isSuccessLogin.subscribe(val => {
      this.isLoginSucess = val
    })
  }
  ngOnInit() {
    console.log("check log is sucess", this.isLoginSucess)
    if(this.isLoginSucess){
    this.fetchProfileDetail()
    }

  }

  fetchProfileDetail() {

    this.profileDetail.profileData().subscribe({
      next: (res) => {
        if (res && res.data && res.data.user) {
          this.showUserProfile = res
          this.userDetails = res.data.user
          this.email = res.data.user.user_email
          this.userName = res.data.user.user_nicename
          console.log("check the email,username", this.userName, this.email)
        }

      },
      error: (err) => {
        this.router.navigateByUrl('/login')
        console.log("showUserProfile-error", err)
      }
    })
  }
}
