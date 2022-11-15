import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../../../../api/data';
const Item = ({ name ,rate,countRate,price}) => (
  <View >
    <View style={{flexDirection:'row',marginVertical:25}}>
      <View style={{marginRight:21}}>
        <Image style={{width:112,height:138}} source={require("../../../../../assets/placeholder.png")}/>
        <Image style={{position:'absolute',top:0,right:0,margin:11}} source={require("../../../../../assets/Heart.png")}/>
      </View>
      <View style={{}}>
      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:15}}>{name}</Text>
      <View style={{flexDirection:'row',alignItems:"center"}}>
        <Image source={require("../../../../../assets/Vector.png")} style={{marginRight:4}} />
        <Text style={{color:"#FA662E",fontSize:14,marginRight:22}}>{rate}</Text>
        <Text style={{color:"#FA662E",fontSize:16}}>{countRate} Ratings</Text>
        
      </View>
      <Text style={{fontSize:18,fontWeight:"bold",marginVertical:19}}>${price}</Text>
      </View>
    </View>
  </View>
);
export default function Wishlists() {
  const newdata = data.filter(d => d.favorites == true);
  const renderItem = ({ item }) => (
    <Item name={item.name} rate={item.rate} countRate={item.countRate} price={item.price} />
  );
  return (
    
    <View style={{paddingHorizontal:32,marginTop:44}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontWeight:'bold',fontSize:22}}>Wishlists</Text>
        <Image source={require("../../../../../assets/circle2017.png")}/>          
        </View>
        <FlatList
        data={newdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </View>
  )
}
