import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreTestComponent } from './components/core-test/core-test.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: 'core'
  }],
  declarations: [CoreTestComponent],
  exports: [CoreTestComponent]
})
export class CoreModule {
}
