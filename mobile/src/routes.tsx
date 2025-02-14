import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectmapPosition from './pages/CreateOrphanage/SelectmapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'} }}>
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />
                <Screen
                    name="OrphanageDetails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header : () => <Header showCancel={false} title="Orfanato"/>
                    }}
                />

                <Screen
                    name="SelectmapPosition"
                    component={SelectmapPosition}
                    options={{
                        headerShown: true,
                        header : () => <Header title="Selecione a localicação"/>
                    }}
                />

                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header : () => <Header title="Dados da instituição"/>
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
}
