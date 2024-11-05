import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
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
            <Entypo name="home" size={24} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="bag-shopping" size={24} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
          tabBarLabel: () => null,
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
      >
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
