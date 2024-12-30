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
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: "TicTacWar",
          }}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{
            title: "Instruksi Permainan",
          }}
        />
        <Stack.Screen
          name="Credits"
          component={Credits}
          options={{
            title: "Credits",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
