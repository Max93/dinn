import {AsyncStorage} from 'react-native';
import {INIT_ACTION} from '../Stores/actions';
import AppStore from '../Stores/AppStore';

const STORAGE_KEY = 'store-data';

async function getCachedData() {
    let rawData = await AsyncStorage.getItem(STORAGE_KEY);
    return JSON.parse(rawData);
}

async function setCachedData(state) {
    return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export default {
    listen: () =>
        AppStore.subscribe(() => setCachedData(AppStore.getState())),
    restore: () =>
        getCachedData()
            .then(data => AppStore.dispatch({type: INIT_ACTION, ...data}))
};
