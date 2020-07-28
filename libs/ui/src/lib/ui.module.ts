import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTestComponent } from './components/ui-test/ui-test.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: 'ui'
  }],
  declarations: [UiTestComponent],
  exports: [UiTestComponent]
})
export class UiModule {}
