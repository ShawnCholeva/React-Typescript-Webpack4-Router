import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import StoreProvider from './shared/redux/store-provider';

const bootstrapperElement: HTMLElement = document.getElementById('root') as HTMLElement;

const store = StoreProvider.getInstance().store;

ReactDOM.render(
    <App />,
    bootstrapperElement);