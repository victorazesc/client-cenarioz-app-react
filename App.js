import React, { useState, useEffect } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./components/menu";
import MenuItem from "./components/menuItem";
import Favorites from "./screens/favoritos";

const Stack = createStackNavigator();
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "manrope-regular": require("./assets/fonts/Manrope-Regular.ttf"),
        "manrope-bold": require("./assets/fonts/Manrope-Bold.ttf"),
        "manrope-semibold": require("./assets/fonts/Manrope-SemiBold.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, animationEnabled: false }}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{ headerShown: false, animationEnabled: false }}
          />
          {/* <Stack.Screen name="Details" component={DeÍtailsScreen} /> */}
        </Stack.Navigator>
        <Menu border={true}>
          <MenuItem label="Explorar" iconName="search-outline" />
          <MenuItem label="Favoritos" screen='Favorites' iconName="heart-outline" selected />
          <MenuItem label="Reservas" iconName="calendar-outline" />
          <MenuItem label="Mensagens" iconName="chatbox-outline" />
          <MenuItem label="Perfil" iconName="person-circle-outline" />
        </Menu>
      </NavigationContainer>
    </>
  );
};

export default App;
