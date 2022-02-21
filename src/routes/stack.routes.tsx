import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/HomeScreen";
import { Movie } from "../screens/MovieScreen";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createNativeStackNavigator();
export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="Movie" component={Movie} />
    </Navigator>
  );
}
