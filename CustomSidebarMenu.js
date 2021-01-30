import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { DrawerItemList} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                //source={{ uri: BASE_PATH + proileImage }}
                source={require('./source/assets/google.png')}
                style={styles.sideMenuProfileIcon}
            />
            <DrawerItemList {...props} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 120,
        height: 120,
        borderRadius: 50,
        marginTop:50,
        marginBottom:30,
        alignSelf: 'center'
    },
});
export default CustomSidebarMenu;