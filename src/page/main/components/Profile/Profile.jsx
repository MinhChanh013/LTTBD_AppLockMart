import { Image, StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react';
import { firebase } from '../../../../../config';

export default function Profile() {
  return (
    <View style={{flex:1}} >
      <View style={{backgroundColor:"#fc823d",height:303,justifyContent:"center",alignItems:"center"}}>
        <Image source={require("../../../../../assets/image_1.png")}  style={{borderRadius:50,marginVertical:10,borderColor:"white",borderWidth:1}} />
        <Text style={{fontSize:22,fontWeight:'bold',color:"white"}}>Brayden Anderson </Text>
        <Text style={{fontSize:14,color:"white"}}>braydenander@gmail.com</Text>
      </View>
      <View style={{backgroundColor:"white",height:"100%",alignItems:"center"}}>
          <ScrollView style={{borderRadius:14,width:311,height:450,position:"absolute",top:-50,backgroundColor:"white",borderWidth:0.2}}>
              <View style={{flexDirection:'row',marginVertical:24,marginHorizontal:23,width:"100%",alignItems:"center"}}>
                <View style={{width:41,height:44,backgroundColor:"#fc823d",borderRadius:7,justifyContent:'center',alignItems:"center",marginRight:21}}>
                  <Image source={require("../../../../../assets/person.png")}/>
                </View>
                <View style={{width:150,height:25}}>
                <Text style={{fontSize:16}}>Account Info</Text>
                </View>
                <TouchableOpacity style={{width:50,height:20,justifyContent:"center"}}>
                  <Image source={require("../../../../../assets/Arrow.png")} style={{flex:1,alignSelf:"flex-end"}} />
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row',marginVertical:24,marginHorizontal:23,width:"100%",alignItems:"center"}}>
                <View style={{width:41,height:44,backgroundColor:"#fc823d",borderRadius:7,justifyContent:'center',alignItems:"center",marginRight:21}}>
                  <Image source={require("../../../../../assets/box.png")}/>
                </View>
                <View style={{width:150,height:25}}>
                <Text style={{fontSize:16}}>My Order</Text>
                </View>
                <TouchableOpacity style={{width:50,height:20,justifyContent:"center"}}>
                  <Image source={require("../../../../../assets/Arrow.png")} style={{flex:1,alignSelf:"flex-end"}} />
                </TouchableOpacity>
              </View>
              
              <View style={{flexDirection:'row',marginVertical:24,marginHorizontal:23,width:"100%",alignItems:"center"}}>
                <View style={{width:41,height:44,backgroundColor:"#fc823d",borderRadius:7,justifyContent:'center',alignItems:"center",marginRight:21}}>
                  <Image source={require("../../../../../assets/payment.png")}/>
                </View>
                <View style={{width:150,height:25}}>
                <Text style={{fontSize:16}}>Payment Method</Text>
                </View>
                <TouchableOpacity style={{width:50,height:20,justifyContent:"center"}}>
                  <Image source={require("../../../../../assets/Arrow.png")} style={{flex:1,alignSelf:"flex-end"}} />
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row',marginVertical:24,marginHorizontal:23,width:"100%",alignItems:"center"}}>
                <View style={{width:41,height:44,backgroundColor:"#fc823d",borderRadius:7,justifyContent:'center',alignItems:"center",marginRight:21}}>
                  <Image source={require("../../../../../assets/map.png")}/>
                </View>
                <View style={{width:150,height:25}}>
                <Text style={{fontSize:16}}>Delivery Address</Text>
                </View>
                <TouchableOpacity style={{width:50,height:20,justifyContent:"center"}}>
                  <Image source={require("../../../../../assets/Arrow.png")} style={{flex:1,alignSelf:"flex-end"}} />
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row',marginVertical:24,marginHorizontal:23,width:"100%",alignItems:"center"}}>
                <View style={{width:41,height:44,backgroundColor:"#fc823d",borderRadius:7,justifyContent:'center',alignItems:"center",marginRight:21}}>
                  <Image source={require("../../../../../assets/setting.png")}/>
                </View>
                <View style={{width:150,height:25}}>
                <Text style={{fontSize:16}}>Settings</Text>
                </View>
                <TouchableOpacity style={{width:50,height:20,justifyContent:"center"}}>
                  <Image source={require("../../../../../assets/Arrow.png")} style={{flex:1,alignSelf:"flex-end"}} />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity onPress={() => firebase.auth().signOut()} style={{flexDirection:'row',marginVertical:24,marginHorizontal:23,width:"100%",alignItems:"center"}}>
                <View style={{width:41,height:44,backgroundColor:"#fc823d",borderRadius:7,justifyContent:'center',alignItems:"center",marginRight:21}}>
                  <Image source={require("../../../../../assets/logout.png")}/>
                </View>
                <View style={{width:150,height:25}}>
                <Text style={{fontSize:16}}>Logout</Text>
                </View>
                <TouchableOpacity style={{width:50,height:20,justifyContent:"center"}}>
                  <Image source={require("../../../../../assets/Arrow.png")} style={{flex:1,alignSelf:"flex-end"}} />
                </TouchableOpacity>
              </TouchableOpacity>
          </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})