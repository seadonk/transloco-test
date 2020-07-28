import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { UiModule } from '@transloco-test/ui';
import { CoreModule } from '@transloco-test/core';

@NgModule({
  declarations: [AppComponent, LanguageSwitcherComponent],
  imports: [BrowserModule,
    UiModule,
    CoreModule,
    HttpClientModule,
    TranslocoRootModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
