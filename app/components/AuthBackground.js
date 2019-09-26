import React from 'react';
import FoodSvg from '../assets/image/bg_food.svg'
import { Animated,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class AuthBackground extends React.Component {

    state = {
        animatedHeight: ''
    }
    constructor(props) {
        super(props)
    }

    hideImage = () => {
        Animated.timing(new Animated.Value(40), {
            toValue: 0,
            duration: 500
        }).start()
        this.setState({
            animatedHeight: hp('40%')
        })
    }

    showImage = () => {
        Animated.timing(new Animated.Value(0), {
            toValue: 40,
            duration: 500
        }).start()
        this.setState({
            animatedHeight: 0
        })
    }

    render() {
        return (
           
            <FoodSvg width={wp('100%')} height={hp('35%')} /> 
        )


    }

}

