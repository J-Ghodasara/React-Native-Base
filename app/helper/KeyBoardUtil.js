import { Keyboard } from 'react-native';
import {
    Platform
} from 'react-native';
export const addKeyboardListener = (_keyboardDidShow, _keyboardDidHide) => {
    if (Platform.OS == 'ios') {
        keyboardDidShowListener = Keyboard.addListener(
            'keyboardWillShow',
            _keyboardDidShow,
        );
        keyboardDidHideListener = Keyboard.addListener(
            'keyboardWillHide',
            _keyboardDidHide,
        );
    }
    else {
        keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            _keyboardDidShow,
        );
        keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            _keyboardDidHide,
        );
    }

}

export const moveToOffeset = (nodeHeight, extraHeight ,scrollviewRef) => {
    const scrollResponder = scrollviewRef.getScrollResponder();
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      nodeHeight,
      extraHeight,
      true
    );
  }

export const removeKeyBoardListener = () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
}

