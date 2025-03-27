import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [LanguageSelectorComponent, RouterLink],
  templateUrl: './basic-plan.component.html',
  styles: ``,
})
export default class BasicPlanComponent {}
