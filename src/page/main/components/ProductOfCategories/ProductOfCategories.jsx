import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Entypo";
import data from "../../../../api/data";
const { height } = Dimensions.get("screen");
import type_categories from "../../../../api/type_categories";

export default function ProductOfCategories({ navigation, route }) {
  const {categories} = route.params;
  console.log("Categories:");
  console.log(categories);
  const list = data.filter((item) => item.categories === categories.toLowerCase());
  const heightItem = (height * 0.8) / 4;
  const changeFavoritesItem = (item) => {
    console.log(item);
    item.favorites = !item.favorites;
  };

  const ListRender = list.map((item) => (
    <View
      key={item.id}
      style={{ marginVertical: 20, flexDirection: "row", height: heightItem }}
    >
      <TouchableOpacity
        style={{ width: "40%", position: "relative" }}
        onPress={() => navigation.navigate("Product_Detail", { item, list })}
      >
        {item.discount ? (
          <View
            style={{
              backgroundColor: "#FB662E",
              paddingHorizontal: 15,
              paddingVertical: 5,
              position: "absolute",
              bottom: -10,
              left: "25%",
              zIndex: 1,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10 }}>
              {item.discount * 100}% OFF
            </Text>
          </View>
        ) : (
          ""
        )}

        <Ionicons
          name="heart"
          style={{
            fontSize: 18,
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: 1,
          }}
          color={item.favorites ? "red" : "#999"}
          onPress={() => changeFavoritesItem(item)}
        />
        <Image
          style={{
            height: null,
            width: null,
            flex: 1,
            resizeMode: "contain",
          }}
          source={item.img}
        ></Image>
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderWidth: 1,
              borderColor: "#f1f1f1",
              borderRadius: 10,
            }}
          >
            <Ionicons name="star" color="#FCE700" style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
              {item.rate}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "normal",
              color: "#FB662E",
              marginLeft: 10,
            }}
          >
            {item.countRate} Ratings
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          {item.discount ? (
            <>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                ${item.price * item.discount}
              </Text>
              <Text
                style={{
                  fontWeight: "normal",
                  fontSize: 13,
                  color: "#c3c3c3",
                  marginLeft: 10,
                  textDecorationLine: "line-through",
                }}
              >
                ${item.price}
              </Text>
            </>
          ) : (
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              ${item.price}
            </Text>
          )}
        </View>
        {item.discount ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              borderTopColor: "#f9f9f9",
              borderTopWidth: 2,
            }}
          >
            <View style={{ height: 20, width: 20, marginRight: 10 }}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "contain",
                }}
                source={require("../../../../../assets/discount.png")}
              />
            </View>

            <Text
              style={{ color: "#c3c3c3", fontWeight: "normal", fontSize: 10 }}
            >
              {item.discount * 100}% of upto $100
            </Text>
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  ));
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingVertical: 20 }}>
      {/* Header */}
      <View style={{ height: "10%", width: "100%" }}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="arrow-back"
              color="#333"
              style={{ fontSize: 18 }}
              onPress={() => navigation.navigate("Product_Categories",{type_categories})}
            ></Ionicons>
            <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 18 }}>
              {categories}
            </Text>
          </View>
          <Icon
            name="dots-three-vertical"
            style={{ textAlign: "center", fontSize: 14 }}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#f1f1f1",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginRight: 20,
            }}
          >
            <Ionicons
              style={{ width: 20 }}
              name="ios-search"
              size={20}
              color="#c3c3c3"
            />
            <TextInput
              style={{ flex: 1, marginLeft: 10 }}
              placeholder="Search..."
              onChangeText={(searchString) => {
                this.setState({ searchString });
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#f1f1f1",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <Ionicons
              name="filter-outline"
              color="#c3c3c3"
              style={{ fontSize: 18 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20 }}>
          {/* Item */}
          {ListRender}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
