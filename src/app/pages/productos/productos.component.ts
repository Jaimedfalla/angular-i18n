import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
  imports: [RouterLink, LanguageSelectorComponent, TranslatePipe],
  templateUrl: './productos.component.html',
})
export default class ProductosComponent {}
