import {  RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GlimpseComponent } from './glimpse.component';

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'glimpse', component: GlimpseComponent},
    {path: '**', component: NotFoundComponent}
]);