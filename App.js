import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

// Package
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// Screens
import MainScreen from './screens/MainScreen'
import DetailScreen from './screens/DetailScreen'

const Stack = createSharedElementStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="List" 
       screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={navigation => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          sharedElementsConfig={(route) => {
            const { data } = route.params;
            return [
              {
                id: `item.${data.id}.photo`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top'
              },
              {
                id: `item.${data.id}.text`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },

              {
                id: `item.${data.id}.profilePic`,
                animation: 'move',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.username`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.readtime`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
      
          ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App