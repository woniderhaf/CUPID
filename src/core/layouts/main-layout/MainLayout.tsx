import React, { useEffect, useMemo } from 'react';
import { Keyboard, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainLayoutProps } from '../../types';
import Header from '../header';
import { RootStackScreenProps } from '../../../navigation/types';
import styles from './styles';


const MainLayout = (props: MainLayoutProps) => {
    const {children,header, color = 'purple'} = props
    const navigation = useNavigation<RootStackScreenProps<any>['navigation']>();
    const route = useRoute<RootStackScreenProps<any>['route']>();

    useEffect(() => {
        Keyboard.dismiss();
    }, []);

    const containerStyles = useMemo(() => {
        return [styles.safeArea, {backgroundColor:color}]
    },[color])

    return (
        <SafeAreaView  style={containerStyles}>
            {header && <Header {...header}  />}
            {children}
        </SafeAreaView>
    );
};

export default MainLayout;
