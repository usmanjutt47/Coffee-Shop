import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function OnBoarding() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/images/welcomeImage.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <Animated.View
          style={styles.welcomeContainer}
          entering={FadeInDown.duration(600)}
        >
          <Text style={styles.heading}>Discover Your Dream Job here</Text>
          <Text style={styles.text}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.RegisterBtn}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  welcomeContainer: {
    height: "100%",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  heading: {
    color: "#9194A0",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
    marginTop: "40%",
    marginBottom: "10%",
  },
  text: {
    color: "#52555A",
    width: "90%",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    marginBottom: "7%",
    justifyContent: "space-between",
    width: "100%",
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 160,
    backgroundColor: "#D17842",
    borderRadius: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "semibold",
  },
  registerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "semibold",
  },
  RegisterBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 160,
    backgroundColor: "#141921",
    borderRadius: 10,
  },
});
