import { CardSwiperComponent } from './../common-ui/swipers/components/card-swiper'
import { Component } from '@angular/core'
import {
  BuisnessCategoryComponent,
  SubscriptionPlansComponent,
  ClaimYourBuisnessComponent,
  BlogNewsComponent,
  ExplainingPlatformComponent,
  TestimonialsComponent,
  EventsComponent,
} from './views'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    BuisnessCategoryComponent,
    SubscriptionPlansComponent,
    ClaimYourBuisnessComponent,
    BlogNewsComponent,
    TestimonialsComponent,
    ExplainingPlatformComponent,
    CardSwiperComponent,
    EventsComponent,
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class HomepageComponent {
  logos: string[] = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    // Add more logo URLs as needed
  ]
  currentLogoIndex = 0

  constructor() {
    console.log('Init component homepge')
  }

  nextLogo() {
    this.currentLogoIndex = (this.currentLogoIndex + 1) % this.logos.length
    console.log(this.currentLogoIndex)
  }

  prevLogo() {
    this.currentLogoIndex =
      (this.currentLogoIndex - 1 + this.logos.length) % this.logos.length
  }
}
