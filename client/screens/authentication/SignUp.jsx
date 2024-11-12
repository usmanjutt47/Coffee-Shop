import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function SignUp() {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      setModalVisible(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.10.6:5000/api/users/register",
        {
          email,
          password,
          confirmPassword,
        }
      );

      setSuccessMessage(response.data.message);
      setModalVisible(true);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => navigation.navigate("Login"));
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
              value={email}
              onChangeText={setEmail}
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
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsPassword(true)}
              onBlur={() => setIsPassword(false)}
            />
          </View>

          <View
            style={[
              styles.passwordContainer,
              isConfirmPassword && styles.activeColor,
            ]}
          >
            <MaterialIcons
              name="password"
              size={24}
              color="#9194A0"
              style={styles.icon}
            />
            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor="#9194A0"
              style={styles.inputText}
              cursorColor="#9194A0"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => setIsConfirmPassword(true)}
              onBlur={() => setIsConfirmPassword(false)}
            />
          </View>

          <TouchableOpacity style={styles.btnContainer} onPress={handleSignUp}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.newAccountContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.newAccountText}>Already have an account</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{successMessage || error}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: Colors.secondaryOrange,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: Colors.white,
    textAlign: "center",
  },
});
