import { createStore, Store } from 'redux';

import allReducers from './reducers';
import IReduxStore from './redux-store-interface';

export default class StoreProvider {
    public store: Store<IReduxStore>;
    private static _instance: StoreProvider;
    
    // constructor() {
    //     this.store = createStore(
    //         allReducers
    //     );
    // }

    public static getInstance(): StoreProvider {
        return StoreProvider._instance || (StoreProvider._instance = new StoreProvider());
    }
}