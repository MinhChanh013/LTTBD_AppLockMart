import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View ,FlatList } from 'react-native'
import React, { useState } from 'react'
import data from '../../../../api/data'
const Item = ({ name ,rate,countRate,price,categories,countOder,data}) => (
 
  <View >
    <View style={{flexDirection:'row',marginVertical:25,flex:1}}>
      <View style={{marginRight:21}}>
        <Image style={{width:57,height:57,borderRadius:14}} source={require("../../../../../assets/placeholder.png")}/>
      </View>
      <View style={{}}>
      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:15}}>{name}</Text>
      <View style={{flexDirection:'row',alignItems:"center"}}>
       <Text style={{color:"gray"}}>{categories}</Text>  
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:200}}>
      <Text style={{fontSize:18,fontWeight:"bold",marginVertical:19}}>${price}</Text>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{width:29,height:29,borderRadius:8,borderWidth:1,justifyContent:"center",alignItems:"center"}} onPress={(countOder) =>{
            
        }}>
        <Image source={require("../../../../../assets/minus.png")}/> 
        </TouchableOpacity>
        <Text style={{marginHorizontal:10}}>{countOder}</Text>
        <TouchableOpacity style={{width:29,height:29,borderRadius:8,borderWidth:1,justifyContent:"center",alignItems:"center"}} onPress={(countOder) =>{
           
        }}>
        <Image source={require("../../../../../assets/Union.png")}/> 
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  </View>
);
export default function Shopping_Cart() {
  const [count,setcount] = useState(1);
  const newdata = data.filter(d => d.favorites == true);
  const renderItem = ({ item }) => (
    <Item name={item.name} rate={item.rate} countRate={item.countRate} price={item.price} categories={item.categories} countOder={item.countOder} data={newdata}/>
  );
  return (
    <View style={{paddingHorizontal:32,marginTop:44,flex:1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontWeight:'bold',fontSize:22}}>Shopping Cart</Text>
        <Image source={require("../../../../../assets/option.png")}/>          
        </View>
        <FlatList
        data={newdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{height:500}}
        />
        <Text style={{fontSize:18,fontWeight:"bold",marginVertical:25}}>Bill Details</Text>
        <ScrollView style={{}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
          <View
          style={{width:194,height:24}}
          >
          <Text style={{fontSize:18,color:"#7D8FAB"}}>Item Total</Text>
          </View>
          <View>
            <Text style={{fontSize:18,fontWeight:"bold"}} >$14.00</Text>
          </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
          <View
          style={{width:194,height:24}}
          >
          <Text style={{fontSize:18,color:"#7D8FAB"}}>Delivery Fee for 9.71 kms</Text>
          </View>
          <View>
            <Text style={{fontSize:18,fontWeight:"bold"}} >+  $10.08</Text>
          </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
          <View
          style={{width:194,height:24}}
          >
          <Text style={{fontSize:18,color:"#7D8FAB"}}>Texes and Charge</Text>
          </View>
          <View>
            <Text style={{fontSize:18,fontWeight:"bold"}} >+  $15.02</Text>
          </View>
        </View>
        
        <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",marginVertical:21}}>
          <View>
            <Text style={{fontSize:18,fontWeight:"bold"}}>Order Total</Text>
          </View>
          <View>
            <Text style={{fontSize:18,fontWeight:"bold"}} >$39.01</Text>
          </View>
        </View>
        <View style={{width:311,height:74,borderWidth:0.1,borderRadius:14,flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:17}}>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Image source={require("../../../../../assets/voucher.png")}/>  
          
            <Text style={{marginLeft:17,fontSize:18}}>Promo Code</Text>
          </View>
          <TouchableOpacity
          style={{width:75,height:37,borderRadius:19,backgroundColor:"#FF8B38",justifyContent:"center",alignItems:"center"}}
          ><Text
          style={{fontSize:16,color:"white",fontWeight:"bold"}}
          >Apply</Text></TouchableOpacity>
        </View>
        <TouchableOpacity
        style={{width:311,height:60,borderRadius:12,backgroundColor:"#FF8B38",justifyContent:"center",alignItems:"center"}}
        ><Text
        style={{fontSize:18,color:"white",fontWeight:"bold"}}
        >CHECKOUT</Text></TouchableOpacity>    
    
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})