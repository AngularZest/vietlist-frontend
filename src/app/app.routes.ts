import { ManageProfileComponent } from './manage-profile/manage-profile'
import { HomepageComponent } from './landing-page/homepage'
import { Routes } from '@angular/router'
import { LoginComponent, RegisterComponent } from './auth'
import { ConfirmPaymentComponent, PlanComponent } from './susbscription-plans'
import { AuthGuard } from './shared/utils/guard/auth.guard'
import { PageNotFoundComponent } from './common-ui'

export default [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'register',
    loadComponent: () => RegisterComponent
  },
  {
    path: 'login',
    loadComponent: () => LoginComponent
  },
  {
    path: 'manage-profile',
    loadComponent: () => ManageProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'confirm-payment/:id',
    loadComponent: () => ConfirmPaymentComponent
  },
  {
    path: 'subscription-plans',
    loadComponent: () => PlanComponent
  },
  {
    path: 'not-found',
    loadComponent: () => PageNotFoundComponent
  },
] as Routes
