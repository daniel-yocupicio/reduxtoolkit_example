/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import TaskScreen from './src/screen/TaskScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TaskScreen />
    </Provider>
  );
};

export default App;
