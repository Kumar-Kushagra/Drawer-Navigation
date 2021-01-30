import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomSidebarMenu';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 30,
            height: 30,
            marginLeft: 10
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page',
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: "crimson",
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () =>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page',

        }} />
    </Stack.Navigator>
  );
}
function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ThirdPage">
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page',
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'midnightblue',
          itemStyle: { marginVertical: 5},
        }}
        drawerStyle = {{
          height:600,
          width:300
        }}
        drawerContent={(props) => <CustomSidebarMenu {... props}
        />}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option'}}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option'}}
          component={secondScreenStack} />
        <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Third page Option'}}
          component={thirdScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;