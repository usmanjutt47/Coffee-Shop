import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BeanCoffeeDetail = ({ route }) => {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState("250gm");
  const { coffee } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: coffee.image }} style={styles.image} />
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <View>
              <Text style={styles.title}>{coffee.title}</Text>
              <Text style={styles.description}>{coffee.description}</Text>
              <View style={styles.ratingContainer}>
                <AntDesign
                  name="star"
                  size={20}
                  color={Colors.secondaryOrange}
                />
                <Text style={styles.price}>{coffee.rating}</Text>
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
        <View
          style={{
            position: "absolute",
            top: 10,
            width: "90%",
            alignSelf: "center",
            marginTop: "8%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={styles.backContainer}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={24} color="#828590" />
          </Pressable>
          <Pressable style={styles.backContainer}>
            <AntDesign name="heart" size={24} color="#828590" />
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#121520" }}>
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Arabica beans are by far the most popular type of coffee beans,
            making up about 60% of the world’s coffee. These tasty beans
            originated many centuries ago in the highlands of Ethiopia, and may
            even be the first coffee beans ever consumed!
          </Text>
          <Text style={styles.sectionSubtitle}>Size</Text>
          <View style={styles.sizeOptions}>
            {["250gm", "500gm", "1000gm"].map((size) => (
              <Pressable
                key={size}
                onPress={() => setSelectedSize(size)}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.sizeButtonSelected,
                ]}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.sizeTextSelected,
                  ]}
                >
                  {size}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.priceText}>Price</Text>
            <Pressable
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#D17842" }}
              >
                ${" "}
              </Text>
              <Text style={styles.priceText2}>{coffee.price}</Text>
            </Pressable>
          </View>
          <Pressable style={styles.btnContainer}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
  },
  image: {
    height: "100%",
    width: "100%",
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
    color: Colors.white,
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
    color: Colors.white,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#121520",
    width: "90%",
    alignSelf: "center",
  },
  sectionTitle: {
    marginTop: "5%",
    color: "#AEAEAE",
    fontSize: 17,
    fontWeight: "bold",
  },
  descriptionText: {
    width: "100%",
    color: Colors.white,
    marginVertical: "5%",
  },
  sectionSubtitle: {
    color: "#AEAEAE",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeButton: {
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202533",
  },
  sizeButtonSelected: {
    borderWidth: 1,
    borderColor: Colors.secondaryOrange,
    backgroundColor: Colors.primaryDark,
  },
  sizeText: {
    color: "#AEAEAE",
  },
  sizeTextSelected: {
    color: Colors.secondaryOrange,
  },
  innerContainer: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: "7%",
  },
  priceText: {
    color: "#AEAEAE",
    fontWeight: "bold",
  },
  priceText2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnContainer: {
    height: 60,
    width: 240,
    backgroundColor: "#D17842",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  backContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21262E",
    borderRadius: 10,
  },
});

export default BeanCoffeeDetail;
