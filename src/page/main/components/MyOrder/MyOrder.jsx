import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import colors from '../../../../colors/colors'
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function MyOrder() {
  // Redux
  const listOrder = useSelector(state => state.order.orders)
  console.log(listOrder);
  // 
  const [idActive,setIdActive] = useState();
   const translatemAnim = useRef(new Animated.Value(0)).current;
   const translatemDownAnim = useRef(new Animated.Value(-100)).current;
  const GoUp = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translatemAnim, {
      useNativeDriver: true,
      toValue: -150,
      duration: 500,
    }).start();
  };

  const GoDown = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translatemDownAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 500,
    }).start();
  };

  // event active
  const activeHandle = (id)=>{
    if(id === idActive) {
      GoUp()
      setIdActive('') 
      return}
      
      setIdActive(id)
      GoDown();
  }

  // Render List
  const List = listOrder.map((item)=>{
    const active = idActive === item.name
    return(
          <View style ={{marginBottom: 30}}>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
            onPress={()=>activeHandle(item.name)}>
              <View style={{padding: 15,backgroundColor: 'rgba(	251,	102,	46,0.3)', borderRadius: 10}}>
                <Icon name="inbox" color={colors.orange} style={{fontSize: 15}}/>
              </View>
              <View style={{flex: 1, marginLeft: 30}}>
                  <Text style={{fontWeight: "bold", fontSize: 15, color: "#333"}}>Order ID {item.name}</Text>
                  <Text style= {{color: "#999", fontWeight: "bold", fontSize:13}}>{item.date}</Text>
              </View>
              <View style={{alignItems: "center"}}>
                {!active?
                <Icon name="angle-up" style={{fontSize: 22}}/>
                :
                <Icon name="angle-down" style={{fontSize: 22}}/>
                }
              </View>
            </TouchableOpacity>
            {active ? 
            <View style={{marginTop: 30, overflow: "hidden"}}>
              <Animated.View  style= { !active ? [
                {
                  transform: [{ translateY: translatemAnim }],
                },
              ] : [
                {
                  transform: [{ translateY: translatemDownAnim }],
                },
              ]}
            >
                {/* Total Number */}
                <View style={{flexDirection: "row", marginBottom: 20}}>
                  <View style={{alignItems: "center",justifyContent: "center"}}><IconMaterial name = "confirmation-number" color = "rgba(	251,	102,	46,0.6)" style={{fontSize:20}}/></View>
                  <View style={{marginLeft: 20}}>
                    <Text style={{color: '#333', fontWeight: 'bold', fontSize: 14 }}>Order Number</Text>
                    <Text style={{marginTop: 5, fontSize: 12, color: '#999'}}>{item.totalQuantity} items</Text>
                  </View>
                </View>
                {/* total price */}
                <View style={{flexDirection: "row", marginBottom: 20}}>
                  <View style={{alignItems: "center",justifyContent: "center"}}><Icon name = "money" color = "rgba(	251,	102,	46,0.6)" style={{fontSize:20}}/></View>
                  <View style={{marginLeft: 20}}>
                    <Text style={{color: '#333', fontWeight: 'bold', fontSize: 14 }}>Order Total</Text>
                    <Text style={{marginTop: 5, fontSize: 12, color: '#999'}}>${item.totalPrice}</Text>
                  </View>
                </View>
              </Animated.View>
      
            </View>
            
            :""}
          </View>
    )
  })
  return (
    <View style={{flex:1, paddingHorizontal: 20, paddingVertical:40}} >
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
           <Text style= {{color: '#333', fontWeight: 'bold', fontSize: 18}}>My Orders</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="search"
              style={{ textAlign: "center", fontSize: 18 }}
            />
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={{marginTop: 20}}>
          {/* List */}
          {List}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})