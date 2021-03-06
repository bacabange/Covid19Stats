import React, { useContext }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';
import HeaderStyle from '../components/Navigation/HeaderStyle';
import TabBar from '../components/Navigation/TabBar';

import Icon from 'react-native-vector-icons/Feather';

// Screens
import Splash from '../screens/Splash/Splash';
import Home from '../screens/Home/Home';
import Settings from '../screens/Settings/Settings';
import News from '../screens/News/News';
import SelectCountry from '../screens/SelectCountry/SelectCountry';
import About from '../screens/About/About';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <HomeStack.Navigator
      screenOptions={HeaderStyle(theme)}>
        <HomeStack.Screen name="Home" component={Home} options={{
          title: 'Covid-19',
        }} />
    </HomeStack.Navigator>
  )
};

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <SettingsStack.Navigator
      screenOptions={HeaderStyle(theme)}>
        <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  )
};

const NewsStack = createStackNavigator();
const NewsStackScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <NewsStack.Navigator
      screenOptions={HeaderStyle(theme)}>
        <NewsStack.Screen name="News" component={News} />
    </NewsStack.Navigator>
  )
};

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <AppTabs.Navigator
      tabBar={props => <TabBar {...props} />}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.primary,
        inactiveTintColor: theme.tintInactiveTabBar,
        style: {
          backgroundColor: theme.backgroundTabBar,
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: 60,
          elevation: 0,
        },
      }}>
      <AppTabs.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarIcon: props => (
            <Icon name="grid" size={20} color={props.color} />
          ),
        }} />
      <AppTabs.Screen name="News" component={NewsStackScreen}
        options={{
          tabBarIcon: props => (
            <Icon name="globe" size={20} color={props.color} />
          ),
        }}/>
      <AppTabs.Screen name="Settings" component={SettingsStackScreen}
        options={{
          tabBarIcon: props => (
            <Icon name="settings" size={20} color={props.color} />
          ),
        }}/>
    </AppTabs.Navigator>
  )
};

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
        tabBarVisible: false,
      }}/>
  </AppStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >

      {/* <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} /> */}
      {isLoading ? (
        <RootStack.Screen name="AppStackScreen" component={AppStackScreen} />
      ) :
        <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} />
      }

      <RootStack.Screen
        name="SelectCountry"
        component={SelectCountry}
        options={{ animationEnabled: true }}
      />

      <RootStack.Screen
        name="About"
        headerMode="none"
        component={About}
        options={{ animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
        {/* <AppStackScreen /> */}
      <RootStackScreen />
    </NavigationContainer>
  );
};
