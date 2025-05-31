import { NavigationContainerRef } from "@react-navigation/native";

let navigator: any

export const setNavigator = (nav: NavigationContainerRef<ReactNavigation.RootParamList> | null) => {
    navigator = nav;
}

export const navigate = (routeName: string, params?: any) => {
    if (navigator) {
        navigator.navigate(routeName, params);
    }
}

export const goBack = () => {
    if (navigator) {
        navigator.goBack();
    }
}

export const resetNavigation = () => {
    if(navigator){
        navigator.resetRoot({
            index: 0,
            routes: [{ name: 'Home' }]
        })
    }
}