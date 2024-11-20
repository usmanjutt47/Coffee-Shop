import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

const renderCartItem = ({ item }) => (
  <View style={{ marginTop: "10%" }}>
    <View style={styles.innerContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.btnContainer}>
          <Image
            source={require("../assets/images/drawer.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: item.image }} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      <View>
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        />
        <LinearGradient colors={["#262B33", "#373B42"]} style={styles.button}>
          <View style={styles.cartContainer}>
            <View style={styles.cartInnerContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: item.image }} style={styles.cartImage} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.heading}>{item.name}</Text>
                  <Text style={styles.textHeading}>{item.description}</Text>
                  <Pressable style={styles.roastedContainer}>
                    <Text style={styles.roastedText}>Medium Roasted</Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", marginTop: "3%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%"
                    }}
                  >
                    <Pressable style={styles.sizeButtonContainer}>
                      <Text style={styles.sizeButtonText}>S</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: "row", marginLeft: 1 }}>
                      <Text style={styles.dollarText}>$ </Text>
                      <Text style={styles.priceText}>4.20</Text>
                    </Pressable>
                    <TouchableOpacity style={styles.minsContainer}>
                      <AntDesign name="minus" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.quantityContainer}>
                      <Text style={styles.quantityText}>1</Text>
                    </View>
                    <TouchableOpacity style={styles.plusContainer}>
                      <AntDesign name="plus" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.sizeContainer}>
                  <Pressable style={styles.sizeButtonContainer}>
                    <Text style={styles.sizeButtonText}>M</Text>
                  </Pressable>
                  <Pressable style={{ flexDirection: "row", marginLeft: 1 }}>
                    <Text style={styles.dollarText}>$ </Text>
                    <Text style={styles.priceText}>4.20</Text>
                  </Pressable>
                  <TouchableOpacity style={styles.minsContainer}>
                    <AntDesign name="minus" size={24} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantityText}>1</Text>
                  </View>
                  <TouchableOpacity style={styles.plusContainer}>
                    <AntDesign name="plus" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.sizeContainer}>
                  <Pressable style={styles.sizeButtonContainer}>
                    <Text style={styles.sizeButtonText}>M</Text>
                  </Pressable>
                  <Pressable style={{ flexDirection: "row", marginLeft: 1 }}>
                    <Text style={styles.dollarText}>$ </Text>
                    <Text style={styles.priceText}>4.20</Text>
                  </Pressable>
                  <TouchableOpacity style={styles.minsContainer}>
                    <AntDesign name="minus" size={24} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantityText}>1</Text>
                  </View>
                  <TouchableOpacity style={styles.plusContainer}>
                    <AntDesign name="plus" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  </View>
);

export default function CartScreen() {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartData = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem("userId");

      if (!userId) {
        Alert.alert("Error", "User ID not found in storage.");
        console.log("Error: User ID missing");
        setLoading(false);
        return;
      }

      console.log("User ID fetched:", userId);

      const response = await fetch(
        `http://192.168.100.175:5000/api/users/products/${userId}`
      );
      const data = await response.json();

      if (response.ok) {
        setCartProducts(data.products || []);
        console.log("Cart data retrieved successfully:", data.products);
      } else {
        console.log("Error fetching cart data:", data.message);
        Alert.alert("Error", data.message || "Unable to fetch cart data.");
      }
    } catch (error) {
      console.log("Error:", error.message);
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : cartProducts.length > 0 ? (
        <FlatList
          data={cartProducts}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderCartItem}
        />
      ) : (
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 20 }}>
          No products in the cart.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  btnContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Colors.mediumBackground,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  innerContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center"
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300
  },
  button: {
    borderRadius: 23,
    marginTop: "5%"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff"
  },
  cartImage: {
    height: 100,
    width: 100,
    borderRadius: 20
  },
  cartContainer: {
    height: 255,
    width: "100%"
  },
  cartInnerContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  textHeading: {
    color: "#AEAEAE",
    fontSize: 13
  },
  roastedContainer: {
    height: 40,
    width: 120,
    backgroundColor: "#141921",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "15%"
  },
  roastedText: {
    color: "#AEAEAE",
    fontSize: 12
  },
  sizeButtonContainer: {
    height: 35,
    width: 72,
    backgroundColor: "#0C0F14",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  sizeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "2%"
  },
  dollarText: {
    fontSize: 16,
    color: "#D17842",
    fontWeight: "bold"
  },
  priceText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  minsContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#D17842",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  quantityContainer: {
    height: 30,
    width: 50,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#D17842",
    justifyContent: "center",
    alignItems: "center"
  },
  quantityText: { fontSize: 20, color: "#fff" },
  plusContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#D17842",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  }
});
