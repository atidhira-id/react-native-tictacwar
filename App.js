import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screen/Menu";
import Game from "./screen/Game";
import Instructions from "./screen/Instructions";
import Credits from "./screen/Credits";
import { useGlobalStyles } from "./styles/styles";
import { palette } from "./styles/palette";

const Stack = createNativeStackNavigator();

export default function App() {
  const styles = useGlobalStyles();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: palette.lightBlue,
        }}
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
