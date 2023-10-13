import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

const Dashboard = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", backgroundColor: "#FF69B4", height: 100, justifyContent: 'space-between' }}>

        <View>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXyoZXpAWph9Vnu9_ZpWgNmn20W4hlBOn-5dLmFQuww8zSfnhRRNQW7B0RRuApO_PFwg&usqp=CAU" }}
            style={{ height: 120, width: 120, borderRadius: 16, marginTop: 30, marginLeft: 15, marginRight: 10, marginBottom: 10 }} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Icon name="person-circle-outline" size={28} color="white" style={{ marginHorizontal: 20, marginVertical: 10 }} />
          <Icon name="book-outline" size={25} color="white" style={{ marginHorizontal: 20, marginVertical: 10 }} />
          <Icon name="qr-code-outline" size={25} color="white" style={{ marginHorizontal: 20, marginVertical: 10 }} />
          <Icon name="settings-outline" size={25} color="white" style={{ marginHorizontal: 20, marginVertical: 10 }} />
        </View>

      </View>

      <View style={{ marginLeft: 150 }}>
        <Text style={{ fontSize: 19, fontWeight: "bold", color: "black" }}>Jon</Text>
        <Text style={{ color: "black" }}>MGID:23M002</Text>
      </View>

      <View style={{ margin: 20, borderWidth: 1, padding: 10, borderRadius: 13, }}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10 }}>Profile Status</Text>
        <Text style={{ color: "black", fontSize: 15 }}>Complete your profile to start onboarding Merchants</Text>

        <View style={{ marginTop: 15, marginBottom: 5 }}>
          <Progress.Bar borderColor="transparent" color='#FF69B4' unfilledColor='lightgrey' progress={0.2} width={340} />
        </View>


        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{ color: "black", fontSize: 13 }}>20%</Text>
          <Text style={{ color: "black", fontSize: 13 }}>1/5 completed</Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity>
            <Text style={styles.btn}>Complete my Profile</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{ marginVertical: 10, marginHorizontal: 20, borderWidth: 1, paddingTop: 10, paddingLeft: 10, borderRadius: 13, }}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10 }}>Bulletin Board</Text>
        <Text style={{ color: "black", fontSize: 15 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum</Text>

        <View style={{ alignItems: "flex-end", marginTop: 10 }}>
          <TouchableOpacity>
            <Text style={styles.btn1}>Read more</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{ margin: 20, borderWidth: 1, padding: 10, borderRadius: 13, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", }}>Merchant Accounts</Text>

        <View style={{ flexDirection: "row",alignItems:"center" }}>

          <Image source={{ uri: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-11/03/full/1446566799-3134.jpg" }}
            style={{ height: 26, width: 26, borderRadius: 16, }} />
          <Image source={{ uri: "https://content.jdmagicbox.com/comp/pondicherry/z5/0413px413.x413.210928132424.b5z5/catalogue/-b1uykamuoe.jpg?clr=" }}
            style={{ height: 26, width: 26, borderRadius: 16 }} />
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTxEPNK4WLfbZ5QeacpqWlc652pnxqkx-eA&usqp=CAU" }}
            style={{ height: 26, width: 26, borderRadius: 16 }} />
            <Text style={{fontSize:20,marginHorizontal:7}}>0</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" style={{ }} />

        </View>

      </View>

<View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <View style={{ marginLeft: 20, marginTop:10,marginBottom:20,borderWidth: 1, padding: 10, borderRadius: 13,width:180}}>
      <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", }}>Support</Text>
      <Text style={{marginTop:20,marginBottom:10,color:"black"}}>24/7 Access Call</Text>
      </View>

      <View style={{  marginRight: 20, marginTop:10,marginBottom:20, borderWidth: 1, padding: 10, borderRadius: 13,width:180}}>
      <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", }}>Today - 7 June</Text>
      <Text style={{marginTop:10,marginBottom:7,color:"black"}}>Appointments - 0</Text>
      <Text style={{marginBottom:5,color:"black"}}>Upcoming - 0</Text>

      </View>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  btn: {
    color: "white",
    backgroundColor: "#FF69B4",
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontWeight: "500",
    fontSize: 16,
    borderRadius: 25
  },
  btn1: {
    color: "white",
    backgroundColor: "#FF69B4",
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontWeight: "500",
    fontSize: 16,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 13,

  },
})