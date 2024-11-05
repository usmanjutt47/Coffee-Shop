import { StyleSheet } from "react-native";
import React from "react";
import {
  NavigationContainer,
  useNavigation,
  useNavigationState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import DetailScreen from "./screens/DetailScreen";
import BeanCoffeeDetail from "./screens/BeanCoffeeDetail";
import Login from "./screens/authentication/Login";
import SignUp from "./screens/authentication/SignUp";
import OnBoarding from "./screens/authentication/OnBoarding";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const navigation = useNavigation();
  const activeScreen = useNavigationState(
    (state) => state.routes[state.index].name
  );

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0C0F14",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#D17842",
        tabBarInactiveTintColor: "#52555A",
        tabBarIconStyle: {
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={24}
              color={activeScreen === "HomeScreen" ? "#D17842" : color}
            />
          ),
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: () => handleNavigation("HomeScreen"),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="bag-shopping"
              size={24}
              color={activeScreen === "CartScreen" ? "#D17842" : color}
            />
          ),
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: () => handleNavigation("CartScreen"),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="heart"
              size={24}
              color={activeScreen === "FavoriteScreen" ? "#D17842" : color}
            />
          ),
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: () => handleNavigation("FavoriteScreen"),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="notifications"
              size={24}
              color={activeScreen === "NotificationScreen" ? "#D17842" : color}
            />
          ),
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: () => handleNavigation("NotificationScreen"),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnBoarding"
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Heart" component={FavoriteScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="BeanCoffeeDetail" component={BeanCoffeeDetail} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
