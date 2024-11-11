import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
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
                <Image
                  source={{ uri: "https://via.placeholder.com/50" }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>
            <View>
              <LinearGradient
                colors={["rgba(0,0,0,0.8)", "transparent"]}
                style={styles.background}
              />
              <View>
                <LinearGradient
                  colors={["#262B33", "#373B42"]}
                  style={styles.button}
                >
                  <View style={styles.cartContainer}>
                    <View style={styles.cartInnerContainer}>
                      <View>
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={styles.cartImage}
                          />
                          <View style={{ marginLeft: 10 }}>
                            <Text style={styles.heading}>Cappuccino</Text>
                            <Text style={styles.textHeading}>
                              With Steamed Milk
                            </Text>
                            <Pressable style={styles.roastedContainer}>
                              <Text style={styles.roastedText}>
                                Medium Roasted
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={{ flexDirection: "row", marginTop: "3%" }}>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Pressable style={styles.sizeButtonContainer}>
                              <Text style={styles.sizeButtonText}>S</Text>
                            </Pressable>
                            <Pressable
                              style={{ flexDirection: "row", marginLeft: 1 }}
                            >
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
                          <Pressable
                            style={{ flexDirection: "row", marginLeft: 1 }}
                          >
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
                          <Pressable
                            style={{ flexDirection: "row", marginLeft: 1 }}
                          >
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  btnContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Colors.mediumBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  innerContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    borderRadius: 23,
    marginTop: "5%",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  cartImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  cartContainer: {
    height: 255,
    width: "100%",
  },
  cartInnerContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  textHeading: {
    color: "#AEAEAE",
    fontSize: 13,
  },
  roastedContainer: {
    height: 40,
    width: 120,
    backgroundColor: "#141921",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "15%",
  },
  roastedText: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  sizeButtonContainer: {
    height: 35,
    width: 72,
    backgroundColor: "#0C0F14",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sizeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "2%",
  },
  dollarText: {
    fontSize: 16,
    color: "#D17842",
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  minsContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#D17842",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityContainer: {
    height: 30,
    width: 50,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#D17842",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: { fontSize: 20, color: "#fff" },
  plusContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#D17842",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
