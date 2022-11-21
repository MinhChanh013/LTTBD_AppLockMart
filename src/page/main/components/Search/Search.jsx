import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image, Keyboard } from 'react-native'
import React from 'react'
import data from '../../../../api/data';

import discount from "../../../../../assets/chanh_discount.jpg"

// icon
import { FontAwesome5, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Search({ navigation }) {
  const [dataSearch, setDataSeach] = React.useState([data[2], data[3], data[4]])
  const [historySearch, setHistorySearch] = React.useState(["Potato", "Local Fresh Frensh Fry", "Fresh Fish"])
  const [valueInput, setValueInput] = React.useState("")

  return (
    <View style={{ flex: 1, width: "100%", paddingHorizontal: 30, alignItems: "center", backgroundColor: "#fff" }}>
      <View style={{ paddingTop: 40 }}>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
            <FontAwesome5 name="times" size={30} color="black" />
          </TouchableOpacity>
          <Text style={{ marginTop: 20, fontSize: 22, fontWeight: "700" }}>Search</Text>
          <View style={{ marginTop: 10, flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ width: "80%", padding: 15, paddingLeft: 45, borderWidth: 1, borderColor: "#dee2e8", borderRadius: 10 }}>
              <TextInput
                value={valueInput}
                autoFocus={true}
                onChangeText={(value) => {
                  setValueInput(value)
                }} style={{ fontSize: 17 }} placeholderTextColor="#7D8FAB" placeholder='Search ...' />
              <AntDesign name="search1" size={25} color="#7D8FAB" style={{ position: "absolute", top: 12, left: 10 }} />
            </View>
            <TouchableOpacity
              onPress={() => {
                if (valueInput !== "") {
                  Keyboard.dismiss()
                  let newDataSearch = data.filter((course) => {
                    return course.name.includes(valueInput)
                  })
                  setDataSeach(newDataSearch)
                  if (!(historySearch && historySearch.some((course) => { return course === valueInput }))) {
                    const newHistorySeach = historySearch.slice(0, 2)
                    setHistorySearch([valueInput, ...newHistorySeach])
                  }
                  setValueInput("")
                }
              }}
              style={{ padding: 14, borderWidth: 1, borderColor: "#dee2e8", borderRadius: 10, }}>
              <MaterialIcons name="filter-list" size={24} color="#7D8FAB" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
            <Text style={{ fontSize: 17, fontWeight: "700" }}>Recent Search</Text>
            <TouchableOpacity onPress={() => {
              setHistorySearch([])
            }}>
              <Text style={{ fontSize: 16, color: "#FA662E", fontWeight: "500" }}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {historySearch.map((course, index) => (
            <TouchableOpacity
              onPress={() => {
                let newDataSearch = data.filter((item) => {
                  return item.name.includes(course)
                })
                setDataSeach(newDataSearch)
              }}
              key={index} style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>{course}</Text>
              <Feather name="arrow-up-right" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 0.7, paddingTop: 25, borderTopColor: "#E8ECF2", borderTopWidth: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Seacrh result</Text>
          {dataSearch.length === 0 ? <View style={{ justifyContent: "center", alignItems: "center", height: "70%" }}><Text style={{ fontStyle: "italic", color: "#7D8FAB", fontSize: 16, fontWeight: "600" }}>No result Found</Text></View> : <FlatList
            style={{ marginTop: 20, height: "100%", overflow: "hidden", paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            data={dataSearch}
            renderItem={({ item }) => (
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
                  <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "700", width: "100%" }}>${item.price.toFixed(2)}</Text>
                  {item.discount !== 0 && <View style={{ paddingTop: 15, marginTop: 20, borderTopColor: "#E8ECF2", borderTopWidth: 1, flexDirection: "row", alignItems: "center" }}>
                    <Image source={discount} />
                    <Text style={{ fontSize: 12, marginLeft: 3, color: "#7D8FAB" }}>{item.discount * 100}% off upto ${(item.price * (1 - item.discount)).toFixed(2)} </Text>
                  </View>}
                </View>
              </View>
            )}
          />}

        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({})