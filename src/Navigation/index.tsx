import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CounterPage from '../Pages/Counter';
import HomeScreen from '../Pages/Home';
import { setNavigator } from '../helpers/navigator';
import ListScreen from '../Pages/List';



const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer ref={(navigationRef) => setNavigator(navigationRef)}>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='CounterScreen' component={CounterPage}></Stack.Screen>
                <Stack.Screen name='ListScreen' component={ListScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;  //export the router component