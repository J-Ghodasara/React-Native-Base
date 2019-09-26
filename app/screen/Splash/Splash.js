import React from "react";
import { View, Image } from "react-native";
import style from "../../config/style";
import string from "../../config/string";
import constant from "../../config/constant";
import { getAsyncData, saveAsyncData } from "../../helper/AsyncStorageUtil";
import SplashScreen from 'react-native-splash-screen'

class Splash extends React.Component {
  isOverlay = false;
  constructor(props) {
    super(props);
    this.state = {
      isFirstTime: "true",
    };
  }



  getIsFirstTime = async () => {
    try {
      console.log("getFirstTime");
      getAsyncData(constant.keyAllConstant.isUserFirstTime)
        .then(res => {
          this.setState({
            isFirstTime: res
          });
          console.log("res received");
        })
        .catch(error => {
        });
    } catch (error) { }
  };

  componentDidMount() {
    console.log("ComponentDidMount");
    this.getIsFirstTime();
    
  
    setTimeout(() => {
      SplashScreen.hide();
      if (
        this.state.isFirstTime === null ||
        this.state.isFirstTime === "true"
      ) {

        // this.props.navigation.navigate('OnBoarding');
      } else {
        this.checkToken();

      }
    }, 3000);

    setTimeout(() => {
      SplashScreen.hide();
    }, 100)


  }



  render() {
    return (
        <View style={style.splashContainerStyle}>
          <Image
            source={require('../../assets/image/splash2.png')}
            style={{width:'100%',height:'100%'}}
            resizeMode="stretch"
          />
        </View>
    );
  }

  checkToken = async () => {
  
  };
}
export default Splash;


