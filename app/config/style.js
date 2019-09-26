import { StyleSheet } from "react-native";
import colors from "../config/colors";
import dimen from "./dimen";

const baseStyles = StyleSheet.create({
  splashContainerStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: colors.colorWhite,
    flexDirection: "column"
  },
  scrollContainer: {
    flexGrow: 1
  },
  onBoardingSplashContainerStyle:{
    width: dimen.value_100wp,
    height: dimen.value_30hp,
    flex: 1,
    backgroundColor: colors.colorWhite,
    flexDirection: "column"
  }
  
  
  
  
  

  
});

export default baseStyles;
