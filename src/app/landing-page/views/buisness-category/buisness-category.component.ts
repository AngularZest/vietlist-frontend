import { NgIf } from '@angular/common'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { BusinessService } from 'src/app/manage-business/service/business.service'
import { register } from 'swiper/element/bundle'

register()

@Component({
  selector: 'app-buisness-category',
  standalone: true,
  imports: [NgIf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './buisness-category.component.html',
  styleUrl: './buisness-category.component.scss',
})
export class BuisnessCategoryComponent {
  @ViewChild('busniessCategoriesSwiper') swiper!: ElementRef
  @Input() homePageData?: any

  public businessCat: any[] = []
  public businessCategoryContent?: any
  swiperParams = {
    slidesPerView: 1,
    // pagination: {
    //   clickable: true,
    // },
    spaceBetween: 30,
    disableOnInteraction: false,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: true,
      },
      1388: {
        slidesPerView: 6,
        autoPlay: false,
      },
    },
    on: {
      init() {},
    },
  }
  constructor(
    private businessService: BusinessService,
    private sanitizer: DomSanitizer,
  ) {
    setTimeout(() => {
      const swiperEl = this.swiper.nativeElement
      Object.assign(swiperEl, this.swiperParams)
      swiperEl.initialize()
    })
  }

  ngOnInit() {
    this.getCategroies()
    this.businessCategoryContent = this.homePageData
  }
  getCategroies() {
    this.businessService.getBusinessCat().subscribe({
      next: (res: any) => {
        this.businessCat = res.data
        console.log('chekc', res)
      },
    })
  }

  public getTrustedHTML(htmlString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlString)
  }
}
