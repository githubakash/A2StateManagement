import {Routes} from '@angular/router';
import {UserlistComponent} from './ByService/userlist/userlist.component';
import {UserCountComponent} from './ByService/user-count/user-count.component';
export const AppRoutes:Routes  = [
 {path:'userlist', component:UserlistComponent},
 {path:'usercount',component:UserCountComponent},
 {path:'', component:UserlistComponent},
{path:'*', component:UserlistComponent}
];

