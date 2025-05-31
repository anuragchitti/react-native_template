import {createSlice} from '@reduxjs/toolkit';

interface ICounterState {
    count: number
}

const initialState:ICounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counterState',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        reset(state) {
            state.count = 0
        }
    }
});

export const {increment, decrement, reset} = counterSlice.actions;  // export actions

// export const selectCount = (state: any) => {console.log(state); return state.counterState.count};  // export selector

export default counterSlice.reducer;  // export reducer