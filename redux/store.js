import {createStore} from 'redux';
import salesApp from './reducers';

const store = createStore(salesApp);

export default store;