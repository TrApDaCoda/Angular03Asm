import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemographicComponent } from './demographic/demographic.component';
import { RemoveSubmitButtonDirective } from './directives/remove-submit-button.directive';
import { UnlessDirective } from './directives/app-unless.directive';
import { StringToBinaryPipe } from './pipes/string-to-binary.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RemoveSubmitButtonDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginComponent,
    DemographicComponent,
    StringToBinaryPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
