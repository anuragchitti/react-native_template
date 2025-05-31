import React from 'react';
import { View, Text, Button } from 'react-native';
import { decrement, increment } from '../store/Slices/CounterSlice';
import { useAppDispatch, useAppSelector } from '../store/storeHooks';
import { navigate } from '../helpers/navigator';


function CounterPage() {

    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (count === 3) {
            navigate('ListScreen');
        }
    }, [count])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Redux Example</Text>
            <Text>Count: {count ? count : 0}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    )
}

export default CounterPage;