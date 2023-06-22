import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Courses from "./src/screens/Courses";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"Ameya Technical"} />}
        </Stack.Screen> */}
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name="About" component={About}  options={{
          headerTitleStyle:{
            fontSize: 25,
          },
          headerTitle: "About Us",
          headerTitleAlign: "center",
        }}/>
        <Stack.Screen name="Contact" component={Contact}  options={{
          headerTitleStyle:{
            fontSize: 25,
          },
          headerTitle: "Contact",
          headerTitleAlign: "center",
        }}/>
        <Stack.Screen name="Courses" component={Courses} 
        options={{
          headerTitleStyle:{
            fontSize: 25,
          },
          headerTitle: "Courses",
          headerTitleAlign: "center",
        }}/>
        <Stack.Screen name="Student" component={UserData}  options={{
          headerTitleStyle:{
            fontSize: 25,
          },
          headerTitle: "Students",
          headerTitleAlign: "center",
        }}/>
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
