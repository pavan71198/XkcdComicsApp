import React from 'react';
import XkcdListPage from './src/pages/XkcdListPage';
import {StackParamList} from './src/pages/XkcdListPage';
import XkcdComicPage from './src/pages/XkcdComicPage';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import * as native from '@react-navigation/native';
import {Colors, IconButton} from 'react-native-paper';
import XkcdHistoryPage from './src/pages/XkcdHistoryPage';
import {store} from './src/redux/store';

const Stack = createStackNavigator<StackParamList>();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <native.NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            component={XkcdListPage}
            options={({navigation}) => ({
              headerRight: () => {
                return (
                  <IconButton
                    onPress={() => navigation.navigate('History')}
                    icon="history"
                    color={Colors.black}
                  />
                );
              },
            })}
          />
          <Stack.Screen name="Comic" component={XkcdComicPage} />
          <Stack.Screen name="History" component={XkcdHistoryPage} />
        </Stack.Navigator>
      </native.NavigationContainer>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//
//});

export default App;
