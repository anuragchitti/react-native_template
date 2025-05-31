import React from 'react';
import { Button, Text, View } from 'react-native';
import { navigate } from '../helpers/navigator';
import { useAppSelector } from '../store/storeHooks';


const HomeScreen = () => {

    const count = useAppSelector(state => state.counter.count);

    console.log(count, 'in Home Screen')

    return (
        <View>
            <Text>Welcome to Home screen</Text>
            <Button title="Navigate to Counter" onPress={() => navigate('CounterScreen')}></Button>
        </View>
    );
}

export default HomeScreen;