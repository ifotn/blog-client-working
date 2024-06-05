import { Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {path: 'blog', title: 'Blog', component: BlogComponent},
    {path: 'register', title: 'Register', component: RegisterComponent},
    {path: 'login', title: 'Login', component: LoginComponent},
    {path: '', title: 'Home', component: HomeComponent},
    {path: '**', title: 'Not Found', component: NotFoundComponent}
];
