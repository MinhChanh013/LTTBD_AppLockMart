import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../../../colors/colors";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("screen");

export default function Product_Detail({ navigation, route }) {
  const { item, list } = route.params;
  // state
  const [number, setNumber] = useState(1);
  console.log(list);

  // Handle Event
  // Increment
  const incrementNumberHandle = () => {
    setNumber(number + 1);
  };
  // Decrement
  const decrementNumberHandle = () => {
    if (number <= 1) {
      return;
    }
    setNumber(number - 1);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      {/* Header */}
      <View style={{ height: "10%", width: "100%" }}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",

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
              onPress={() => navigation.navigate("Product_Categories")}
            ></Ionicons>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart" style={{ fontSize: 18, marginRight: 25 }} />
            <Icon
              name="dots-three-vertical"
              style={{ textAlign: "center", fontSize: 16 }}
            />
          </View>
        </View>
      </View>
      {/* Body */}
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            height: height / 4,
            width: "100%",
          }}
        >
          <Image
            style={{
              width: null,
              height: null,
              flex: 1,
              resizeMode: "contain",
            }}
            source={item.img}
          />
        </View>

        <Text
          style={{ color: colors.orange, fontWeight: "bold", marginTop: 40 }}
        >
          {item.categories.toUpperCase()}
        </Text>
        <Text
          style={{
            color: colors.orange,
            fontWeight: "normal",
            marginTop: 5,
            fontSize: 18,
            color: "#000",
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: colors.orange,
                fontWeight: "normal",
                fontSize: 16,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              $
              {item.discount
                ? (item.price * item.discount).toFixed(2)
                : item.price.toFixed(2)}
            </Text>
            {item.discount ? (
              <Text
                style={{
                  color: colors.orange,
                  fontWeight: "normal",
                  marginLeft: 10,
                  fontSize: 16,
                  color: "#c3c3c3",
                  fontWeight: "normal",
                  textDecorationLine: "line-through",
                }}
              >
                ${item.price.toFixed(2)}
              </Text>
            ) : (
              ""
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  padding: 8,
                  borderWidth: 2,
                  borderColor: pressed ? "#fff" : "#c1c1c1",
                  borderRadius: 10,
                  backgroundColor: pressed ? "#FB662E" : "#fff",
                  opacity: pressed ? 0.4 : 1,
                },
              ]}
              onPress={decrementNumberHandle}
            >
              {({ pressed }) => (
                <Ionicons
                  name={"remove"}
                  style={[{ color: pressed ? "#FB662E" : "black" }]}
                ></Ionicons>
              )}
            </Pressable>
            <Text style={{ marginHorizontal: 15, fontSize: 16 }}>{number}</Text>
            <Pressable
              style={({ pressed }) => [
                {
                  padding: 8,
                  borderWidth: 2,
                  borderColor: pressed ? "#fff" : "#c1c1c1",
                  borderRadius: 10,
                  backgroundColor: pressed ? "#FB662E" : "#fff",
                  opacity: pressed ? 0.4 : 1,
                },
              ]}
              onPress={incrementNumberHandle}
            >
              {({ pressed }) => (
                <Ionicons
                  name={"add"}
                  style={[{ color: pressed ? "#FB662E" : "black" }]}
                ></Ionicons>
              )}
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconAnt
              name="star"
              color={"#FEA707"}
              style={{ fontSize: 20, marginRight: 8 }}
            />
            <Text
              style={{
                fontSize: 12,
                paddingRight: 20,
                borderRightColor: colors.border,
                borderRightWidth: 1,
              }}
            >
              {item.rate} {`(${item.countRate} reviews)`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 35,
            }}
          >
            <IconM
              name="truck-cargo-container"
              color="#077238"
              style={{ fontSize: 20 }}
            />
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#077238" }}
            >
              FREE DELIVERY
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 25 }}>
          <Text style={{ fontSize: 13, color: "#666" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime
            similique excepturi officiis sint doloribus amet, enim
          </Text>
        </View>
        {/* Related */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
              Related product
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.orange, marginRight: 5 }}>
                Show all
              </Text>
              <IconAnt
                name="caretright"
                style={{ color: colors.orange, fontSize: 9, marginRight: 2 }}
              />
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <FlatList
              horizontal={true}
              data={list}
              keyExtractor={(list) => list.id}
              contentContainerStyle={{ marginRight: 20 }}
              renderItem={(item) => {
                const product = item.item;
                return (
                  <View style={{ flex: 1 }}>
                    <View style={{ height: 150, width: 150 }}>
                      <Image
                        source={product.img}
                        style={{
                          flex: 1,
                          height: null,
                          width: null,
                          resizeMode: "contain",
                        }}
                      ></Image>
                    </View>
                    <View style={{ marginLeft: 12, marginTop: 10 }}>
                      <Text style={{ color: "#666", fontWeight: "bold" }}>
                        {product.name}
                      </Text>
                      {product.discount ? (
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                          <Text
                            style={{
                              color: "#666",
                              fontWeight: "bold",
                              fontSize: 10,
                            }}
                          >
                            ${(product.price * product.discount).toFixed(2)}
                          </Text>
                          <Text
                            style={{
                              marginLeft: 10,
                              color: colors.border,
                              fontWeight: "normal",
                              fontSize: 10,
                              textDecorationLine: "line-through",
                            }}
                          >
                            ${product.price.toFixed(2)}
                          </Text>
                        </View>
                      ) : (
                        <Text
                          style={{
                            color: "#666",
                            fontWeight: "bold",
                            fontSize: 10,
                            marginTop: 5,
                          }}
                        >
                          ${product.price.toFixed(2)}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={{ height: "10%", width: "100%" }}>
        <TouchableOpacity 
        style={{flex: 1,}}
        onPress={() => navigation.navigate('Shopping_Cart')}
        >
        <LinearGradient
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#ffae7e", "#ff9e62", "#f55a21"]}
          style={{
            borderRadius: 15,
            flex: 1,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconFontAwesome
            name="opencart"
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 15,
              marginRight: 10,
            }}
          />
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            ADD TO CART
          </Text>
        </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
