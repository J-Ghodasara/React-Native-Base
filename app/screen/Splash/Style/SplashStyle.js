import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';
import dimen from '../../../config/dimen';
import constant from '../../../config/constant';

const SplashStyle = StyleSheet.create({
  logoStyle: {
    marginTop:14,
    alignSelf: "center",
  },
  textSpalshStyle: {
    color: colors.colorPrimary,
    textAlign:'right',
    marginTop:10,
    marginEnd:10,
    fontSize: 16,
    fontFamily: constant.font.muliBold
  },
});
export default SplashStyle;