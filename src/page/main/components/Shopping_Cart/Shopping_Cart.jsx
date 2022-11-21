import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../../../colors/colors";
const { height } = Dimensions.get("screen");
import coupon from "../../../../../assets/voucher.png";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../store/cartSlice";
import { orderActions } from "../../../../../store/orderSlice";
const Shopping_Cart = ({ navigation }) => {
  // Redux
  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch()
  
  const decrementNumberHandle = (id)=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  const incrementNumberHandle = (item)=>{
    dispatch(cartActions.addItemToCart(item))
  }

  // Event
  const checkOutHandle = ()=>{
    if(totalQuantity === 0 ){
      return
    }

    // totalQuantity
    // Date
    // Name

    // Date
    const time = new Date()
    const date = `${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()}`
   
    function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4());
    }
    // Name
    const name = guidGenerator();
      dispatch(orderActions.addOrder({name,totalPrice,totalQuantity,date}))
      dispatch(cartActions.emtyCart())
     navigation.navigate("MyOrder")
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20,
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
              onPress={() => navigation.navigate("Home")}
            ></Ionicons>
            <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 18 }}>
              Shopping Cart
            </Text>
          </View>
          <Icon
            name="dots-three-vertical"
            style={{ textAlign: "center", fontSize: 14 }}
          />
        </View>
      </View>
      {/* Body */}
      <ScrollView style={{ flex: 1, marginVertical: 20 }}>
        {/* List Item */}
        {items.length === 0 ? 
        <View style={{justifyContent: "center",alignItems: "center", height: 100, borderWidth: 2,backgroundColor: 'rgba(	251,	102,	46,0.3)', borderRadius: 15, borderColor: colors.orange}}><Text style={{color: '#333', fontWeight: "bold", fontSize: 18 }}>Cart is empty</Text></View>
        
        : items.map((item)=>(
        <View
          key={item.id}
          style={{
            marginBottom: 20,
            flexDirection: "row",
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderWidth: 2,
            borderColor: colors.border,
            borderRadius: 15,
          }}
        >
          <View style={{ height: 80, width: 80, marginRight: 10 }}>
            <Image
              source={item.img}
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "contain",
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#333" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 11, color: "#999", marginVertical: 5 }}>
              {item.categories}
            </Text>
            {item.discount ? (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                  ${(item.price * item.discount).toFixed(2)}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "normal",
                    color: "#999",
                    textDecorationLine: "line-through",
                    marginLeft: 5,
                  }}
                >
                  ${item.price.toFixed(2)}
                </Text>
              </View>
            ) : (
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                ${item.price.toFixed(2)}
              </Text>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  padding: 4,
                  borderWidth: 2,
                  borderColor: pressed ? "#fff" : "#c1c1c1",
                  borderRadius: 8,
                  backgroundColor: pressed ? "#FB662E" : "#fff",
                  opacity: pressed ? 0.4 : 1,
                },
              ]}
              onPress={()=>decrementNumberHandle(item.id)}
            >
              {({ pressed }) => (
                <Ionicons
                  name={"remove"}
                  style={[{ color: pressed ? "#FB662E" : "black" }]}
                ></Ionicons>
              )}
            </Pressable>
            <Text style={{ marginHorizontal: 10, fontSize: 14 }}>{item.quantity}</Text>
            <Pressable
              style={({ pressed }) => [
                {
                  padding: 4,
                  borderWidth: 2,
                  borderColor: pressed ? "#fff" : "#c1c1c1",
                  borderRadius: 8,
                  backgroundColor: pressed ? "#FB662E" : "#fff",
                  opacity: pressed ? 0.4 : 1,
                },
              ]}
              onPress={()=>incrementNumberHandle(item)}
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
        ))}
        {/* End List item */}

        {/* Bill Detail */}
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderColor: colors.border,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#333",
              marginVertical: 20,
            }}
          >
            Bill Details
          </Text>
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#666" }}>Item Total</Text>
            <Text style={{ fontWeight: "bold" }}>${totalPrice.toFixed(2)}</Text>
          </View>
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#666" }}>Delivery Fee for 9.71 kms</Text>
            <Text style={{ fontWeight: "bold" }}>$0.00</Text>
          </View>
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#666" }}>Taxes and Charge</Text>
            <Text style={{ fontWeight: "bold" }}>$100</Text>
          </View>
        </View>
        {/* Order Total  */}
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#333", fontWeight: "bold", fontSize: 14 }}>
            Order Total
          </Text>
          <Text style={{ color: "#333", fontWeight: "bold", fontSize: 14 }}>
            ${(totalPrice/1 + 100).toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 10,
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20
          }}
        >
          <Image source={coupon} />

          <Text style={{ color: "#666", fontSize: 14, marginRight: 50}}>Promo Code</Text>
          <TouchableOpacity style={{}}>
            <LinearGradient
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#ffae7e", "#ff9e62", "#f55a21"]}
              style={{
                borderRadius: 20,
                flex: 1,
                marginVertical: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 10,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                Apply
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={{ height: "10%", width: "100%" }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={checkOutHandle}
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
            
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
              CHECKOUT
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shopping_Cart;
