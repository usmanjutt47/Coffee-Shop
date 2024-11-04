import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  { id: "1", title: "All" },
  { id: "2", title: "Cappuccino" },
  { id: "3", title: "Espresso" },
  { id: "4", title: "Americano" },
  { id: "5", title: "Latte" },
  { id: "6", title: "Mocha" },
];

const categoryImg = [
  {
    id: "1",
    title: "Cappuccino",
    image: "https://via.placeholder.com/136",
    rating: "4.5",
    description: "A classic Italian coffee.",
    price: "3.50",
  },
  {
    id: "2",
    title: "Espresso",
    image: "https://via.placeholder.com/136",
    rating: "4.8",
    description: "Strong and bold flavor.",
    price: "2.75",
  },
  {
    id: "3",
    title: " Latte",
    image: "https://via.placeholder.com/136",
    rating: "4.3",
    description: "Smooth and creamy.",
    price: "4.00",
  },
];

const CoffeeCard = ({ coffee }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Detail", { coffee });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: coffee.image }} style={styles.coffeeImage} />
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} color={Colors.secondaryOrange} />
          <Text style={styles.ratingText}>{coffee.rating}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {coffee.title}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {coffee.description}
        </Text>
        <View style={styles.footerRow}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.price, { color: Colors.secondaryOrange }]}>
              ${" "}
            </Text>
            <Text style={styles.price}>{coffee.price}</Text>
          </View>
          <TouchableOpacity style={styles.plusButton}>
            <AntDesign name="plus" size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const categoryBeans = [
  {
    id: "1",
    title: "Robusta Beans",
    image1: "https://via.placeholder.com/136",
    description: "Medium Roasted",
    price: "3.50",
  },
  {
    id: "2",
    title: "Cappuccino",
    image1: "https://via.placeholder.com/136",
    description: "With Steamed Milk",
    price: "2.75",
  },
  {
    id: "3",
    title: " Arabica",
    image1: "https://via.placeholder.com/136",
    description: "The most common coffee bean,",
    price: "4.00",
  },
];

const BeanCoffeeCard = ({ beanCoffee }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("BeanCoffeeDetail", {
      image: beanCoffee.image1,
      title: beanCoffee.title,
      description: beanCoffee.description,
      price: beanCoffee.price,
    });
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: beanCoffee.image1 }} style={styles.coffeeImage} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {beanCoffee.title}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {beanCoffee.description}
        </Text>
        <View style={styles.footerRow}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.price, { color: Colors.secondaryOrange }]}>
              ${" "}
            </Text>
            <Text style={styles.price}>{beanCoffee.price}</Text>
          </View>
          <TouchableOpacity style={styles.plusButton}>
            <AntDesign name="plus" size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState("1");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: "5%" }}
      >
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
          <Text style={styles.heading}>Find the best coffee for you</Text>
          <View style={styles.inputContainer}>
            <AntDesign
              name="search1"
              size={24}
              color={Colors.gray}
              style={styles.icon}
            />
            <TextInput
              placeholder="Find Your Coffee..."
              placeholderTextColor={Colors.gray}
              cursorColor={Colors.gray}
              style={styles.placeHolder}
              multiline
            />
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => setSelectedId(item.id)}
                >
                  <Text
                    style={[
                      styles.itemText,
                      selectedId === item.id && styles.selectedItemText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  {selectedId === item.id && (
                    <View style={styles.selectedDot} />
                  )}
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.containerStyle}
            />
          </View>
          <View>
            <FlatList
              data={categoryImg}
              renderItem={({ item }) => <CoffeeCard coffee={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={styles.coffeeHeading}>Coffee beans</Text>
          <View>
            <FlatList
              data={categoryBeans}
              renderItem={({ item }) => <BeanCoffeeCard beanCoffee={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  innerContainer: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
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
  heading: {
    fontWeight: "bold",
    color: Colors.white,
    fontSize: 28,
    width: "60%",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 15,
    height: 45,
    backgroundColor: Colors.mediumBackground,
    alignItems: "center",
    marginTop: 20,
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  placeHolder: {
    color: Colors.gray,
    flex: 1,
    height: "100%",
  },
  itemContainer: {
    alignItems: "center",
  },
  itemText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedItemText: {
    color: Colors.secondaryOrange,
  },
  selectedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondaryOrange,
    marginTop: 4,
  },
  cardContainer: {
    backgroundColor: Colors.mediumBackground,
    borderRadius: 23,
    width: 150,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  coffeeImage: {
    width: 135,
    height: 135,
    borderRadius: 16,
  },
  ratingContainer: {
    position: "absolute",
    top: 0,
    right: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 4,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  ratingText: {
    fontSize: 14,
    color: Colors.white,
    marginLeft: 5,
  },
  contentContainer: {
    paddingVertical: 10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  description: {
    fontSize: 12,
    color: Colors.lightGray,
    marginTop: 5,
    fontWeight: "regular",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  plusButton: {
    backgroundColor: Colors.secondaryOrange,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  containerStyle: {
    marginTop: "7%",
    gap: 10,
    marginBottom: "6%",
  },
  coffeeHeading: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: "5%",
    marginBottom: "5%",
    color: Colors.white,
  },
});
