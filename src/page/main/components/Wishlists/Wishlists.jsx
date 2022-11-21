import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import data from '../../../../api/data';
import { useSelector } from 'react-redux';
const Item = (props) => {
  const { name,img ,rate,countRate,price} = props.item
  const {navigation,list, item} = props;
  return(
  <TouchableOpacity onPress={()=>navigation.navigate("Product_Detail",{item,list})}>
    <View style={{flexDirection:'row',marginVertical:25}}>
      <View style={{marginRight:21}}>
        <Image style={{width:112,height:138}} source={img}/>
        <Image style={{position:'absolute',top:0,right:0,margin:11}} source={require("../../../../../assets/Heart.png")}/>
      </View>
      <View style={{}}>
      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:15}}>{name}</Text>
      <View style={{flexDirection:'row',alignItems:"center"}}>
        <Image source={require("../../../../../assets/Vector.png")} style={{marginRight:4}} />
        <Text style={{color:"#FA662E",fontSize:14,marginRight:22}}>{rate}</Text>
        <Text style={{color:"#FA662E",fontSize:16}}>{countRate} Ratings</Text>
        
      </View>
      <Text style={{fontSize:18,fontWeight:"bold",marginVertical:19}}>${price.toFixed(2)}</Text>
      </View>
    </View>
  </TouchableOpacity>
);}
export default function Wishlists({navigation}) {
  const data = useSelector(state => state.product.items)
  const newdata = data.filter(d => d.favorites == true);
  const renderItem = ({ item }) => (
    <Item item = {item} navigation = {navigation} list = {newdata}/>
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
