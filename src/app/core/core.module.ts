import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { jsonParamStoreFeatureKey } from './store';
import { reducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(jsonParamStoreFeatureKey, reducer)
  ],
  declarations: []
})
export class CoreModule {}
