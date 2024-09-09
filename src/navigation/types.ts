import { ROUTES } from './routes.ts';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';


export type RootStackParamList = {
    [ROUTES.MAIN]:undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

