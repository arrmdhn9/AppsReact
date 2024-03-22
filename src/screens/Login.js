import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utils/asyncStorage";

const { width } = Dimensions.get("window");

const Login = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Miniver-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf")
  });

  const navigation = useNavigation();

  useEffect(() => {
    // Perform any side effects here
  }, []);

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Welcome");
  };

  if (!fontsLoaded) {
    // If fonts are not loaded yet, return null or a loading indicator
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieProperties}>
        <LottieView
          style={styles.lottieProperties}
          source={require("../../assets/animations/animate-4.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.text}>Welcome Home</Text>
      <Text style={{ fontFamily: "Poppins-Regular" }}>Welcome Home</Text>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text
          style={{ color: "white", fontFamily: "Poppins-Regular" }}
          onPress={handleReset}>
          Reset
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  lottieProperties: {
    width: width * 0.9,
    height: width
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Poppins-Regular"
  },
  resetButton: {
    backgroundColor: "#025464",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20
  }
});

export default Login;
