import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetaConfig, MetaUIRulesModule } from '@ngx-metaui/rules';
import * as userRules from './rules/user-rules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialRulesModule } from '@ngx-metaui/material-rules';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetaUIRulesModule.forRoot({}),
    MaterialRulesModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private config: MetaConfig) {
    // mandatory - you need to register app defined rules and types

    config.registerRules(userRules);

  }
}
