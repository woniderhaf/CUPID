import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes.ts';
import * as SCREENS from '../screens';
import { RootStackParamList } from './types';


const RootStack = createNativeStackNavigator<RootStackParamList>();


const Navigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name={ROUTES.MAIN} component={SCREENS.MainScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
