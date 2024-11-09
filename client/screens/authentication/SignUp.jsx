import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/login.png")}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.headingText}>
            Create an account so you can explore all the existing jobs
          </Text>

          <View style={[styles.inputContainer, isEmail && styles.activeColor]}>
            <Entypo name="mail" size={24} color="#9194A0" style={styles.icon} />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9194A0"
              style={styles.inputText}
              cursorColor="#9194A0"
              onFocus={() => setIsEmail(true)}
              onBlur={() => setIsEmail(false)}
            />
          </View>

          <View
            style={[styles.passwordContainer, isPassword && styles.activeColor]}
          >
            <MaterialIcons
              name="password"
              size={24}
              color="#9194A0"
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#9194A0"
              style={styles.inputText}
              cursorColor="#9194A0"
              onFocus={() => setIsPassword(true)}
              onBlur={() => setIsPassword(false)}
            />
          </View>

          <View
            style={[styles.passwordContainer, isPassword && styles.activeColor]}
          >
            <MaterialIcons
              name="password"
              size={24}
              color="#9194A0"
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter Confirm Password"
              placeholderTextColor="#9194A0"
              style={styles.inputText}
              cursorColor="#9194A0"
              onFocus={() => setIsPassword(true)}
              onBlur={() => setIsPassword(false)}
            />
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.newAccountContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.newAccountText}>Already have an account</Text>
          </TouchableOpacity>

          <Text style={styles.continueText}>Or continue with</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "55%",
            }}
          >
            <TouchableOpacity style={styles.googleContainer}>
              <AntDesign name="google" size={24} color="#D17842" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleContainer}>
              <Entypo name="facebook-with-circle" size={24} color="#D17842" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleContainer}>
              <AntDesign name="apple1" size={24} color="#D17842" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  backgroundImage: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    width: "90%",
    alignSelf: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.secondaryOrange,
    marginTop: 30,
    textAlign: "center",
  },
  headingText: {
    fontSize: 20,
    color: "#9194A0",
    textAlign: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 30,
    backgroundColor: "#141921",
    paddingHorizontal: 10,
  },
  activeColor: {
    borderColor: Colors.secondaryOrange,
    borderWidth: 1,
  },
  inputText: {
    color: "#9194A0",
    paddingLeft: 10,
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 15,
    backgroundColor: "#141921",
    paddingHorizontal: 10,
  },
  btnContainer: {
    height: 50,
    width: "100%",
    backgroundColor: Colors.secondaryOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "20%",
  },
  btnText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  forgotText: {
    color: Colors.secondaryOrange,
    marginTop: 15,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  newAccountContainer: {
    width: "100%",
    height: 41,
    backgroundColor: "#141921",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  newAccountText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 14,
  },
  continueText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.secondaryOrange,
    marginTop: "20%",
    textAlign: "center",
    marginBottom: "5%",
  },
  googleContainer: {
    height: 60,
    width: 60,
    backgroundColor: "#141921",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
