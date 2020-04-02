import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreenOld";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreenOld";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import FlexScreen from "./src/screens/FlexScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Flex: FlexScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "LookBack"
    }
  }
);

export default createAppContainer(navigator);
