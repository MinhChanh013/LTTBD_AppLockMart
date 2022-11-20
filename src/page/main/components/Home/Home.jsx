import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// library
import Swiper from 'react-native-swiper'
// icon
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
// image
import avatar from "../../../../../assets/image_1.png"
import vegetable from "../../../../../assets/vegetable.png"
import fruits_1 from "../../../../../assets/fruits_1.png"
import fruits from "../../../../../assets/fruits.png"
import lemon from "../../../../../assets/lemon.png"
import fish from "../../../../../assets/fish.png"
import chicken from "../../../../../assets/ga.png"
import dairy from "../../../../../assets/Dairy.png"
import vegetableCategories from "../../../../../assets/vegetable_catagory.png"
import discount from "../../../../../assets/discount.png"
// data
import data from '../../../../api/data';
const type_categories = [
  {
    name: "Fruits",
    items: 1126,
    image: lemon
  },
  {
    name: "Chicken",
    items: 142,
    image: chicken
  },
  {
    name: "Fish",
    items: 50,
    image: fish
  },
  {
    name: "Dairy",
    items: 98,
    image: dairy
  },
  {
    name: "Vegetables",
    items: 210,
    image: vegetableCategories
  },
]
const all_grocery = [
  data[6], data[7], data[8]
]

export default function Home({ navigation }) {
  const [arrHeart, setArrHeart] = React.useState([])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff" }} >
      <View style={{ flex: 1, width: "100%", paddingHorizontal: 30, paddingTop: 40 }}>
        <View style={{ paddingTop: 40, paddingBottom: 15, width: "100%", marginLeft: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: 'absolute', top: 0, left: 0, zIndex: 999, backgroundColor: "#fff" }}>
          <View>
            <Text style={{ fontSize: 23, fontWeight: "700" }}>Hello, Brayden</Text>
            <Text style={{ color: "#7D8FAB" }}>Good morning.</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View>
              <FontAwesome name="bell-o" size={24} color="black" style={{ marginRight: 20 }} />
              <View style={{ paddingHorizontal: 5, paddingVertical: 1, borderRadius: 1000, backgroundColor: "#FA662E", position: "absolute", top: -5, right: 12, }}>
                <Text style={{ color: "#fff" }}>
                  5
                </Text>
              </View>
            </View>
            <Image style={{ borderRadius: 1000, width: 40, height: 40 }} source={avatar} />
          </View>
        </View>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search")
              }}>
              <View style={{ paddingTop: 55, marginTop: 15, flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ width: "80%", padding: 15, paddingLeft: 45, borderWidth: 1, borderColor: "#dee2e8", borderRadius: 10 }}>
                  <TextInput onPressIn={() => {
                    navigation.navigate("Search")
                  }} style={{ fontSize: 17 }} placeholderTextColor="#7D8FAB" placeholder='Search ...' />
                  <AntDesign name="search1" size={25} color="#7D8FAB" style={{ position: "absolute", top: 12, left: 10 }} />
                </View>
                <TouchableOpacity onPress={() => {
                  navigation.navigate("Search")
                }} style={{ padding: 14, borderWidth: 1, borderColor: "#dee2e8", borderRadius: 10, }}>
                  <MaterialIcons name="filter-list" size={24} color="#7D8FAB" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
              <Swiper
                showsPagination={false}
                showsButtons={false}
                autoplay={true}
                style={{ height: 155 }} >
                <View style={{ backgroundColor: "#e06959", borderRadius: 12, overflow: 'hidden', height: "100%", padding: 15 }}>
                  <Image style={{ position: "absolute", right: -15, bottom: -10, width: 160, height: 180 }} resizeMode="contain" source={fruits_1} />
                  <Text style={{ textTransform: "uppercase", fontSize: 20, fontWeight: "700" }}>Fresh Fruits</Text>
                  <Text style={{ marginTop: 15, fontSize: 22, fontWeight: "700", color: "#fff" }}>25% OFF</Text>
                  <Text style={{ marginTop: 5, fontSize: 14, fontWeight: "700" }}>Get 25% off on all fruits*</Text>
                  <TouchableOpacity style={{ marginTop: 10, padding: 7, backgroundColor: "#FE8938", width: 95, borderRadius: 10, overflow: 'hidden' }}>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}>ORDER NOW</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "#38CA9E", borderRadius: 12, overflow: 'hidden', height: "100%", padding: 15 }}>
                  <Image style={{ position: "absolute", right: -15, bottom: -40, width: 160, height: 180 }} resizeMode="contain" source={vegetable} />
                  <Text style={{ textTransform: "uppercase", fontSize: 20, fontWeight: "700" }}>Fresh Fruits</Text>
                  <Text style={{ marginTop: 15, fontSize: 22, fontWeight: "700", color: "#fff" }}>25% OFF</Text>
                  <Text style={{ marginTop: 5, fontSize: 14, fontWeight: "700" }}>Get 25% off on all fruits*</Text>
                  <TouchableOpacity style={{ marginTop: 10, padding: 7, backgroundColor: "#FE8938", width: 95, borderRadius: 10, overflow: 'hidden' }}>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}>ORDER NOW</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "#FCA817", borderRadius: 12, overflow: 'hidden', height: "100%", padding: 15 }}>
                  <Image style={{ position: "absolute", right: -22, bottom: -10, width: 160, height: 180 }} resizeMode="contain" source={fruits} />
                  <Text style={{ textTransform: "uppercase", fontSize: 20, fontWeight: "700" }}>Fresh Fruits</Text>
                  <Text style={{ marginTop: 15, fontSize: 22, fontWeight: "700", color: "#fff" }}>25% OFF</Text>
                  <Text style={{ marginTop: 5, fontSize: 14, fontWeight: "700" }}>Get 25% off on all fruits*</Text>
                  <TouchableOpacity style={{ marginTop: 10, padding: 7, backgroundColor: "#FE8938", width: 95, borderRadius: 10, overflow: 'hidden' }}>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}>ORDER NOW</Text>
                  </TouchableOpacity>
                </View>
              </Swiper>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>Categories</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Product_Categories", { type_categories: type_categories })
                  }}
                  style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 17, color: "#FA662E", fontWeight: "700", marginRight: 5 }}>Show all</Text>
                  <AntDesign name="caretright" size={15} color="#FA662E" />
                </TouchableOpacity>
              </View>
              <ScrollView nestedScrollEnabled={true}>
                <FlatList
                  style={{ marginTop: 15, width: "100%" }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={type_categories}
                  renderItem={({ item }) => (
                    <View style={{ width: 83, marginRight: 15 }}>
                      <TouchableOpacity style={{ padding: 15, paddingHorizontal: 4, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10, borderColor: "#E8ECF2" }}>
                        <Image style={{ width: 45, height: 50 }} resizeMode="contain" source={item.image} />
                      </TouchableOpacity>
                      <Text style={{ fontWeight: "700", fontSize: 15, marginTop: 10 }}>{item.name}</Text>
                      <Text style={{ fontSize: 14, marginTop: 2, color: "#7D8FAB" }}>{item.items} Items</Text>
                    </View>
                  )}
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 25 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>Popular Deals</Text>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 17, color: "#FA662E", fontWeight: "700", marginRight: 5 }}>Show all</Text>
                  <AntDesign name="caretright" size={15} color="#FA662E" />
                </TouchableOpacity>
              </View>
              <ScrollView nestedScrollEnabled={true}>
                <FlatList
                  style={{ marginTop: 15, width: "100%" }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={data.filter((course) => {
                    return course.discount > 0
                  })}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity>
                      <View>
                        <View>
                          <Image style={{ height: 180, width: 240, marginRight: 20, borderRadius: 10, overflow: "hidden" }} resizeMode="cover" source={item.img} />
                          <Text style={{ padding: 5, position: "absolute", top: 10, left: 10, backgroundColor: "#FA662E", color: "#fff", borderRadius: 7, overflow: "hidden" }}>{item.discount * 100}% OFF</Text>
                          <TouchableOpacity
                            onPress={() => {
                              if (arrHeart.length > 0 && arrHeart.some((course) => { return course === index })) {
                                let newArrHeart = arrHeart.filter((course) => {
                                  return course !== index
                                })
                                setArrHeart(newArrHeart)
                              }
                              else {
                                setArrHeart([...arrHeart, index])
                              }
                            }}
                            style={{ position: "absolute", right: 30, top: 10 }}>
                            <AntDesign name="heart" size={24} style={arrHeart.some((course) => { return course === index }) ? styles.active_Heart : styles.default_Heart} />
                          </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 10 }}>{item.name}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 3, paddingHorizontal: 10, borderWidth: 1, borderColor: "#F1F1F4", borderRadius: 12 }}>
                              <AntDesign name="star" size={20} color="#FFC107" />
                              <Text style={{ marginLeft: 5, fontWeight: "600", fontSize: 12 }}>{(item.rate).toFixed(1)}</Text>
                            </View>
                            <Text style={{ marginLeft: 5, color: "#FA662E", fontWeight: "600", fontSize: 12 }}>{item.countRate} Ratings</Text>
                          </View>
                          <Text style={{ marginRight: 20, fontWeight: "700", fontSize: 17, marginTop: 8 }} >${(item.price * item.discount).toFixed(2)}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 25 }}>
              <Text style={{ fontSize: 22, fontWeight: "700" }}>All Grocery</Text>
              <ScrollView nestedScrollEnabled={true}>
                <FlatList
                  style={{ marginTop: 20 }}
                  data={all_grocery}
                  renderItem={({ item }) => (
                    <TouchableOpacity>
                      <View style={{ flexDirection: "row", alignItems: "flex-start", height: 190, marginBottom: 30 }}>
                        <View>
                          <Image style={{ width: 150, height: "100%", borderRadius: 15, overflow: "hidden" }} resizeMode="cover" source={item.img} />
                          {item.discount !== 0 && <Text style={{ padding: 10, backgroundColor: "#FA662E", color: "#fff", fontWeight: "700", borderRadius: 8, position: "absolute", bottom: -15, left: 33 }}>{item.discount}% OFF</Text>}
                        </View>
                        <View style={{ marginLeft: 20 }}>
                          <Text style={{ fontSize: 18, fontWeight: "700" }}>{item.name}</Text>
                          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <View style={{ padding: 4, paddingHorizontal: 7, borderRadius: 15, borderWidth: 1, borderColor: "#F1F1F4", flexDirection: "row", alignItems: "center" }}>
                              <AntDesign style={{ marginRight: 3 }} name="star" size={20} color="#FFC107" />
                              <Text style={{ fontWeight: "500" }}>{item.rate.toFixed(1)}</Text>
                            </View>
                            <Text style={{ marginLeft: 20, color: "#FA662E", fontWeight: "500" }}>{item.countRate} Ratings</Text>
                          </View>
                          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "700" }}>${item.price.toFixed(2)}</Text>
                          {item.discount !== 0 && <View style={{ paddingTop: 15, marginTop: 20, borderTopColor: "#E8ECF2", borderTopWidth: 1, flexDirection: "row", alignItems: "center" }}>
                            <Image source={discount} />
                            <Text style={{ fontSize: 13, marginLeft: 10, color: "#7D8FAB" }}>{item.discount * 100}% off upto ${item.price * (1 - item.discount)} </Text>
                          </View>}
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  active_Heart: {
    color: "red"
  },
  default_Heart: {
    color: "#a8a8a8"
  },
})