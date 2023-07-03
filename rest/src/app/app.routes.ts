import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailComponent } from './components/user/user-detail.component';
import { ReqresService } from './services/reqres.service';
import { User } from './user';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    user: User = {
        id: 0,
        first_name: '',
        last_name: '',
        avatar: ''
    };
    constructor(
        private activatedRoute: ActivatedRoute,
        private reqresService: ReqresService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            // reqresService.getUser(params ['id']).subscribe((res: User) => this.user = res);
        });
    }
}
