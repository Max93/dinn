import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider, connect } from 'react-redux';

import App from './App';
import AppStore from './Stores/AppStore';
import StoreCache from './Utils/StoreCache';

StoreCache.restore()
    .then(() => {
        StoreCache.listen();
    });

const app = () => <Provider store={AppStore}><App /></Provider>;

AppRegistry.registerComponent('dinn', () => app);
