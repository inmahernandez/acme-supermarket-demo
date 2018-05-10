import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { UserComponent} from './user/user.component';
import { UserResolver} from './user/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'items',     component: ShoppingCartComponent },
 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}