export const jsonParamStoreFeatureKey = 'jsonParamStore';

export interface DatastoreEntity {
  _id: string;
}

export interface JsonParamStore {
  [id: string]: DatastoreEntity;
}

export const initialState = {};
