import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";



const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage
}

const persistStoreData = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistStoreData,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER]
        }
    })
});


const persistor = persistStore(store);

export { store, persistor };  // export store and persistor for use in app.js

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // export type for use in other files