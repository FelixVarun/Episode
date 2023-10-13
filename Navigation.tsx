import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import MessengerScreen from './Screens/MessengerScreen';
import NotificationScreen from './Screens/NotificationScreen';
import { NavigationContainer } from '@react-navigation/native';
import BookingScreen from './Screens/BookingScreen';
import About from './Screens/About';
import SettingsScreen from './Screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Use the icon library of your choice
import Dashboard from './Screens/Dashboard';
import { useNavigation } from '@react-navigation/native';
import Phone from './Screens/Phone';
import Otp from './Screens/Otp';
import RegisterScreen from './Screens/RegisterScreen';
import Signin from './Screens/Signin';
import Logout from './Screens/Logout';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



function CustomDrawerContent(props: any) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#FF69B4" }}>
        <TouchableOpacity onPress={() => (navigation as any).navigate('Manager dashboard')}>
          <View style={{ flexDirection: "row" }}>


            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXyoZXpAWph9Vnu9_ZpWgNmn20W4hlBOn-5dLmFQuww8zSfnhRRNQW7B0RRuApO_PFwg&usqp=CAU" }}
              style={{ height: 80, width: 90, borderRadius: 16, marginTop: 30, marginLeft: 10, marginRight: 10, marginBottom: 10 }} />

            <View style={{ marginTop: 32, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>Jon</Text>
              <Text style={{ color: "white", fontSize: 15 }}>MGID:23M039</Text>
              <Text style={{ color: "white", fontSize: 15 }}>Coimbatore</Text>
            </View>

            <View style={{ justifyContent: "flex-end", marginBottom: 15, marginLeft: 15 }}>
              <Icon name="chevron-forward-circle" size={20} color="white" />
            </View>

          </View>
        </TouchableOpacity>

        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity onPress={() => (navigation as any).navigate('signin')}>
        <View style={{ padding: 30, flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Icon name="exit-outline" size={25} color="black" />
          <Text style={{ fontSize: 17, color: "black" }}>Logout</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}



function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Bookings Manager" component={BookingScreen}
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="book-outline" size={25} color="black" />
              <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>Bookings Manager</Text>
            </View>
          ),
        }} />
      <Drawer.Screen name="Messenger" component={MessengerScreen}
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chatbubble-ellipses-outline" size={25} color="black" />
              <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>Messenger</Text>
            </View>
          ),
        }} />
      <Drawer.Screen name="Notification" component={NotificationScreen}
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="notifications-outline" size={25} color="black" />
              <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>Notification</Text>
            </View>
          ),
        }} />
      <Drawer.Screen name="About Pingle" component={About}
        options={{

          drawerLabel: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="information-circle-outline" size={25} color="black" />
              <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>About Pingle</Text>
            </View>
          ),

        }} />
      <Drawer.Screen name="Settings" component={SettingsScreen}
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="settings-outline" size={25} color="black" />
              <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>Settings</Text>
            </View>
          ),
        }} />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='phonenumber' component={Phone} options={{ headerShown: false }} />
      <Stack.Screen name='otp' component={Otp} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name='signin' component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name='home' component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name='Manager dashboard' component={Dashboard} />
      <Stack.Screen name='logout' component={Logout} />

    </Stack.Navigator>


  );
}




export default Navigation

const styles = StyleSheet.create({})