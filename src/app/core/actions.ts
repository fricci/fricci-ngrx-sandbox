import { createAction, props } from '@ngrx/store';
import { DatastoreEntity } from './store';

export const getFromIndex = createAction('[Json Store] Get from index');
export const storeEntity = createAction(
  '[Json Store] Store entity',
  props<DatastoreEntity>()
);
