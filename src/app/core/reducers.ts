import { Action, createReducer, on, State } from '@ngrx/store';
import { storeEntity } from './actions';
import { DatastoreEntity, initialState, JsonParamStore } from './store';
import { produce } from 'immer';

const jsonStoreReducer = createReducer(
  initialState,
  on(storeEntity, (state, entity: DatastoreEntity) =>
    produce(state, draftState => {
      draftState[entity._id] = entity;
    })
  )
);

export function reducer(
  state: State<JsonParamStore> | undefined,
  action: Action
) {
  return jsonStoreReducer(state, action);
}
