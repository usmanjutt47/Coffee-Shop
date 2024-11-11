import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "100%",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <View style={{ width: "100%", alignSelf: "center", marginTop: "10%" }}>
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
        </View>
        <ScrollView
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, marginTop: "5%" }}>
            <ImageBackground
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.favImage}
            >
              <View style={styles.overlay}>
                <View style={styles.overlayContent}>
                  <View>
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.description}>With Steamed Milk</Text>
                    <View style={styles.ratingContainer}>
                      <AntDesign
                        name="star"
                        size={20}
                        color={Colors.secondaryOrange}
                      />
                      <Text style={styles.price}>4.5</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.iconRow}>
                      <Pressable style={styles.iconContainer}>
                        <Image
                          source={require("../assets/images/bean.png")}
                          style={styles.iconImage}
                        />
                        <Text style={styles.iconText}>Bean</Text>
                      </Pressable>
                      <Pressable style={styles.iconContainer}>
                        <FontAwesome6
                          name="location-dot"
                          size={24}
                          color={Colors.secondaryOrange}
                        />
                        <Text style={styles.iconText}>Africa</Text>
                      </Pressable>
                    </View>
                    <Pressable style={styles.mediumRoastButton}>
                      <Text style={styles.mediumRoastText}>Medium Roasted</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: "#273238",
                width: "100%",
                height: 105,
                borderBottomLeftRadius: 23,
                borderBottomRightRadius: 23,
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{ fontSize: 15, color: "#AEAEAE", fontWeight: "bold" }}
                >
                  Description
                </Text>
                <Text style={{ color: "#FFFFFF", marginTop: "1%" }}>
                  Cappuccino is a latte made with more foam than steamed milk,
                  often with a sprinkle of cocoa powder or cinnamon on top.
                </Text>
              </View>
            </View>

            <ImageBackground
              source={{ uri: "https://via.placeholder.com/50" }}
              style={[styles.favImage, { marginTop: "5%" }]}
            >
              <View style={styles.overlay}>
                <View style={styles.overlayContent}>
                  <View>
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.description}>With Steamed Milk</Text>
                    <View style={styles.ratingContainer}>
                      <AntDesign
                        name="star"
                        size={20}
                        color={Colors.secondaryOrange}
                      />
                      <Text style={styles.price}>4.5</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.iconRow}>
                      <Pressable style={styles.iconContainer}>
                        <Image
                          source={require("../assets/images/bean.png")}
                          style={styles.iconImage}
                        />
                        <Text style={styles.iconText}>Bean</Text>
                      </Pressable>
                      <Pressable style={styles.iconContainer}>
                        <FontAwesome6
                          name="location-dot"
                          size={24}
                          color={Colors.secondaryOrange}
                        />
                        <Text style={styles.iconText}>Africa</Text>
                      </Pressable>
                    </View>
                    <Pressable style={styles.mediumRoastButton}>
                      <Text style={styles.mediumRoastText}>Medium Roasted</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: "#273238",
                width: "100%",
                height: 105,
                borderBottomLeftRadius: 23,
                borderBottomRightRadius: 23,
                marginBottom: "15%",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{ fontSize: 15, color: "#AEAEAE", fontWeight: "bold" }}
                >
                  Description
                </Text>
                <Text style={{ color: "#FFFFFF", marginTop: "1%" }}>
                  Cappuccino is a latte made with more foam than steamed milk,
                  often with a sprinkle of cocoa powder or cinnamon on top.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
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
  favImage: {
    width: "100%",
    height: 450,
    borderTopRightRadius: 23,
    borderTopLeftRadius: 23,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    padding: 10,
    width: "100%",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  overlayContent: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  description: {
    color: "#AEAEAE",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "5%",
  },
  price: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 5,
  },
  iconRow: {
    flexDirection: "row",
    gap: 20,
  },
  iconContainer: {
    height: 55,
    width: 55,
    backgroundColor: "#141921",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
  },
  iconImage: {
    height: 33,
    width: 33,
  },
  iconText: {
    fontSize: 12,
    color: "#AEAEAE",
  },
  mediumRoastButton: {
    backgroundColor: "#141921",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    width: 131,
  },
  mediumRoastText: {
    fontSize: 10,
    color: "#AEAEAE",
  },
});
