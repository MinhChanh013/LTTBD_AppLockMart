import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

// icon
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Product_Categories({ navigation, route }) {
  const [value, setValue] = React.useState([])

  React.useEffect(() => {
    if (route.params) {
      const value = route.params.type_categories;
      setValue(value);
    }
  }, [route.params]);

  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 30, backgroundColor: "#fff" }}>
      <View style={{ width: "100%", paddingTop: 45 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Home")
            }}><Ionicons name="arrow-back" size={27} color="black" /></TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 10 }}>Categories</Text>
          </View>
          <TouchableOpacity><Feather name="more-vertical" size={27} color="black" /></TouchableOpacity>
        </View>
        <View style={{ width: "100%" }}>
          <FlatList
            style={{ marginTop: 30 }}
            data={value}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => {navigation.navigate("ProductOfCategories",{categories: item.name})}}
              >
                <View style={{ width: "100%", padding: 20, borderRadius: 10, overflow: "hidden", borderWidth: 1, borderColor: "#E8ECF2", marginBottom: 20, flexDirection: "row", alignItems: "center" }}>
                  <Image style={{ width: 60, height: 70 }} resizeMode="contain" source={item.image} />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: "#798BA6", marginTop: 3 }}>{item.items} Items</Text></View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
