import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { EuiIconModule } from '@eui/components/atoms/eui-icon';
import { EuiButtonModule } from '@eui/components/eui-button';
import { EuiCardModule } from '@eui/components/eui-card';
import { EuiLabelModule } from '@eui/components/atoms/eui-label';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { EuiAppModule, EuiNotificationsModule } from '@eui/components/layout';




@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    EuiButtonModule,
    EuiIconModule,
    EuiCardModule,
    EuiLabelModule,
    EuiAppModule,
    EuiNotificationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
