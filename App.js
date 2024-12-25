import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screen/Menu";
import Game from "./screen/Game";
import Instructions from "./screen/Instructions";
import Credits from "./screen/Credits";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: "TicTacWar Game",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{
            title: "Instructions",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Credits"
          component={Credits}
          options={{
            title: "Credits",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
