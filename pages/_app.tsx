import './index.css'
import { Provider } from 'react-redux';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";

function App({ Component, pageProps } : any) {
  return (
    <Provider store={store}>
        <Component {...pageProps}/>
    </Provider>
);
}

const makeStore = () => store;


export default withRedux(makeStore)(App);