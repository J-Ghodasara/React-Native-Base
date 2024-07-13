/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {HandleProgressBar} from './app/components/ProgressBar';
import AppContainer from './app/navigation/Navigation';
import NetworkAlert from './app/helper/NetworkAlert';
import NavigationService from './app/navigation/NavigationService';
import {createStore} from 'redux';
import Reducers from './app/redux/reducers/Reducers';

export const store = createStore(Reducers);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <HandleProgressBar />
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <NetworkAlert />
    </Provider>
  );
}

export default App;
