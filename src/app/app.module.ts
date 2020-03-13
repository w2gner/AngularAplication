import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page.component';
import { TableSelectionExample } from './table-selection-example';
import { MenuOverviewExample } from './menu-overview-example';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TableSelectionExample,
    MenuOverviewExample

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginPageComponent },
      { path: 'home', component: TableSelectionExample },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
