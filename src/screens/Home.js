import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../components/Menu";

const Home = () => {
  const description =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, scrambled it to make a type specimen book.";
  const name = "Ameya Technical";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/one.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 25,
              color: "4c5dab",
              marginTop: 0,
            },
          ]}
        >
          {name}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            { marginVertical: 10, borderWidth: 1, borderColor: "grey" },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    // height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});
