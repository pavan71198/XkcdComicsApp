import React from 'react';
import XkcdListPage from './src/pages/XkcdListPage';
import XkcdComicPage from './src/pages/XkcdComicPage';
import {createStackNavigator} from '@react-navigation/stack';
import * as native from '@react-navigation/native';

type StackParamList = {
  Home: any;
  Comic: {comicNum: number};
};

const Stack = createStackNavigator<StackParamList>();

const App = (): JSX.Element => {
  return (
    <native.NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={XkcdListPage} />
        <Stack.Screen name="Comic" component={XkcdComicPage} />
      </Stack.Navigator>
    </native.NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//
//});

export default App;
