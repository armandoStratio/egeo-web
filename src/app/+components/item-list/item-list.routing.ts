import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StItemListDocComponent } from './item-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: StItemListDocComponent }
]);
