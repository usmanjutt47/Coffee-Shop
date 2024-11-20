import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      setModalVisible(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.100.175:5000/api/users/login",
        {
          email,
          password
        }
      );
      if (response.status === 200) {
        await AsyncStorage.setItem("userId", response.data.userId.toString());
        setSuccessModalVisible(true);
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      setModalVisible(true);
    }
  };

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
          <Text style={styles.heading}>Login here</Text>
          <Text style={styles.headingText}>
            Welcome back you’ve been missed!
          </Text>

          <View style={[styles.inputContainer, email && styles.activeColor]}>
            <Entypo name="mail" size={24} color="#9194A0" style={styles.icon} />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9194A0"
              style={styles.inputText}
              cursorColor="#9194A0"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View
            style={[styles.passwordContainer, password && styles.activeColor]}
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
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.newAccountContainer}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.newAccountText}>Create new account</Text>
          </TouchableOpacity>

          <Text style={styles.continueText}>Or continue with</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "55%"
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{error}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Login successful!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14"
  },
  backgroundImage: {
    flex: 1
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    width: "90%",
    alignSelf: "center"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.secondaryOrange,
    marginTop: 30,
    textAlign: "center"
  },
  headingText: {
    fontSize: 20,
    color: "#9194A0",
    width: "60%",
    textAlign: "center",
    marginTop: 10,
    alignSelf: "center"
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 30,
    backgroundColor: "#141921",
    paddingHorizontal: 10
  },
  activeColor: {
    borderColor: Colors.secondaryOrange,
    borderWidth: 1
  },
  inputText: {
    color: "#9194A0",
    paddingLeft: 10,
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 15,
    backgroundColor: "#141921",
    paddingHorizontal: 10
  },
  btnContainer: {
    height: 50,
    width: "100%",
    backgroundColor: Colors.secondaryOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20
  },
  btnText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold"
  },
  forgotText: {
    color: Colors.secondaryOrange,
    marginTop: 15,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  newAccountContainer: {
    width: "100%",
    height: 41,
    backgroundColor: "#141921",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  newAccountText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 14
  },
  continueText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.secondaryOrange,
    marginTop: "45%",
    textAlign: "center",
    marginBottom: "5%"
  },
  googleContainer: {
    height: 60,
    width: 60,
    backgroundColor: "#141921",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#2C2F38",
    borderRadius: 10,
    alignItems: "center"
  },
  modalText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.secondaryOrange,
    borderRadius: 5
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16
  }
});
