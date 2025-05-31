import React from 'react';
import { Button, FlatList, Image, Text, View } from 'react-native';
import api from '../API';
import { resetNavigation } from '../helpers/navigator';
import { reset } from '../store/Slices/CounterSlice';
import { useAppDispatch } from '../store/storeHooks';
import { useTheme } from '../components/Theme';

const initialState = { count: 0 }

const reducer = (state: { count: number; }, action: any) =>  {
    switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        default: return state;
    }
}


const ListScreen = () => {

    const [data, setData] = React.useState([]);
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const dispatchFn = useAppDispatch();

    const {theme, toggleTheme} = useTheme();

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        console.log('List Screen Mounted', currentDate, typeof currentDate);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await api.get('https://fake-json-api.mock.beeceptor.com/companies');
            setData(result.data);
            setCurrentDate(new Date());
            console.log('came here', result);
        } catch (error) {
            console.log(error);
        }
    }

    const renderListItem = ({ item }: any) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', margin: 5 }}>
                <Text>Name: {item.name} - {state.count}</Text>
                <Text>Industry: {item.industry}</Text>
                <Text>Address: {item.address}</Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: item.logo,
                    }}
                />
            </View>
        )
    }

    const seperatorComponent = () => {
        return (
            <View style={{ height: 1.5, backgroundColor: 'black', paddingHorizontal: 2 }}></View>
        )
    }

    console.log('state here', state)
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <FlatList
                data={data}
                renderItem={renderListItem}
                keyExtractor={(item: any) => item.zip}
                ItemSeparatorComponent={seperatorComponent}
                extraData={state.count}
            />
            <Text>{state.count}</Text>
            <Button title='Count Increment' onPress={() => dispatch({ type: 'increment' })}></Button>
            <Button title='Count Decrement' onPress={() => dispatch({ type: 'decrement' })}></Button>
            <Button title='Logout' onPress={() => { dispatchFn(reset()); resetNavigation(); }}></Button>
        </View>
    )
}

export default ListScreen;  // Export the component