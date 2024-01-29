import { Component, Input } from '@angular/core'
import {
  AuthenticationService,
  LocalStorageService,
  ProfileMenu,
  SidebarService,
} from '@vietlist/shared'
import { EditProfileComponent } from './components'
import { ProfileService } from './service/profile.service'

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [EditProfileComponent],
  templateUrl: './manage-profile.html',
  styleUrl: './manage-profile.scss',
})
export class ManageProfileComponent {
  public sidebarMenu: ProfileMenu[] = []
  public userEmail:any;
  constructor(
    private sidebarService: SidebarService,
    private sessionservice: AuthenticationService,
  ) {
    this.getSidebarLinks()
    const data = this.sessionservice.getUserdata()
    this.userEmail = data?.user_email;
  }

  public getSidebarLinks() {
    this.sidebarService.getSidebarLinks().subscribe((res) => {
      this.sidebarMenu = res
    })
  }
}
