import { EditProfileComponent } from '../components';
import { Component } from '@angular/core';
import { ProfileMenu, SidebarService } from '@vietlist/shared';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EditProfileComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class MainComponent {
public sidebarMenu : ProfileMenu[] = []
userEmail:any
constructor(private sidebarService:SidebarService, private profileDetail : ProfileService ){
  this.getSidebarLinks()
  this.userEmail = JSON.parse(localStorage.getItem('vietlist::userdata') as string)

}



getSidebarLinks(){
  this.sidebarService.getSidebarLinks().subscribe((res)=>{
    this.sidebarMenu = res
    console.log(res)
  })
}



}
