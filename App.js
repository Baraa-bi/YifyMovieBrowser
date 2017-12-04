import React, { Component } from 'react';
import { AsyncStorage, Text,View} from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
import { addNavigationHelpers } from 'react-navigation';
const store = createStoreWithMiddleware(reducers);
import Router from './src/Router';


class App extends Component {


  

  render() {

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }

}

export default App;
