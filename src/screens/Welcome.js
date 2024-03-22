import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Miniver-Regular.ttf")
  });

  const navigation = useNavigation();
  const [showDoneButton, setShowDoneButton] = useState(true);

  const handleDone = () => {
    navigation.navigate("Login");
    setItem("onboarded", "1");
  };

  if (!fontsLoaded) {
    return null;
  }

  const doneButton = () => {
    return (
      <TouchableOpacity onPress={handleDone}>
        <Text style={styles.doneButton}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={showDoneButton ? doneButton : null}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#E8AA42",
            image: (
              <View>
                <LottieView
                  style={styles.lottieProperties}
                  source={require("../../assets/animations/animate-1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Multiple Programming Languages",
            subtitle:
              "Deserunt elit esse elit laboris eiusmod sit deserunt voluptate. Magna nisi sit aute ut pariatur. Non labore labore qui minim. Minim occaecat commodo quis qui voluptate est cupidatat."
          },
          {
            backgroundColor: "#025464",
            image: (
              <View>
                <LottieView
                  style={styles.lottieProperties}
                  source={require("../../assets/animations/animate-2.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Schema Properties",
            subtitle: "Done with React Native Onboarding Swiper"
          },
          {
            backgroundColor: "#E57C23",
            image: (
              <View>
                <View>
                  <LottieView
                    style={styles.lottieProperties}
                    source={require("../../assets/animations/animate-3.json")}
                    autoPlay
                    loop
                  />
                </View>
              </View>
            ),
            title: "On Mobile Devices",
            subtitle: "Done with React Native Onboarding Swiper"
          }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  lottieProperties: {
    width: width * 0.9,
    height: width,
    fontFamily: "Poppins-Regular"
  },
  doneButton: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100
  }
});

export default Welcome;
