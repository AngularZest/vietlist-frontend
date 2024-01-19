import { NavItem } from '../../core/interfaces'
import { Component, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { NgClass, NgFor } from '@angular/common'
import { MatMenuModule } from '@angular/material/menu'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgClass, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  isSearchInputVisible: boolean = false

  constructor(private router: Router) { }

  public navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/',
      active: true,
    },
    {
      label: 'Categories',
      href: '/categories',
    },
    {
      label: 'Add a Business',
      href: '/add-a-business',
    },
    {
      label: 'Blog/News',
      href: '/blog-news',
    },
    {
      label: 'Events',
      href: '/events',
    },
    {
      label: 'Contact Us',
      href: '/contact-us',
    },
  ]

  public navigateToOtherComponent(link: string) {
    this.router.navigate([link])
  }

  public toggleDropdown(event: Event) {
    event.preventDefault()
  }

  public handleSearchFiled() {
    if (this.isSearchInputVisible) {
      this.isSearchInputVisible = false
    } else {
      this.isSearchInputVisible = true
    }
  }
}
