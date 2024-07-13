import {Alert} from 'react-native';
import string from '../config/string';
import constant from '../config/constant';

export const OpenOkCancelDialog = (
  message,
  OkButtonText,
  CancelButtonText,
  onOkButtonClicked,
  onCancelButtonClicked,
) => {
  setTimeout(() => {
    Alert.alert(
      string.app.app_name,
      message,
      [
        {
          text: OkButtonText,
          onPress: () => {
            onOkButtonClicked();
          },
        },
        {
          text: CancelButtonText,
          onPress: () => {
            onCancelButtonClicked();
          },
          style: string.label_cancel,
        },
      ],
      {cancelable: false},
    );
  }, 200);
};

export const OpenOkDialog = (message, OkButtonText, OnOkButtonClicked) => {
  setTimeout(() => {
    Alert.alert(
      string.app.app_name,
      message,
      [
        {
          text: OkButtonText,
          onPress: () => {
            OnOkButtonClicked();
          },
        },
      ],
      {cancelable: false},
    );
  }, 200);
};

export const OpenYesNoDialog = (
  message,
  OkButtonText,
  CancelButtonText,
  onOkButtonClicked,
  onCancelButtonClicked,
) => {
  setTimeout(() => {
    Alert.alert(
      string.app.app_name,
      message,
      [
        {
          text: OkButtonText,
          onPress: () => {
            onOkButtonClicked();
          },
        },
        {
          text: CancelButtonText,
          onPress: () => {
            onCancelButtonClicked();
          },
          style: string.label_cancel,
        },
      ],
      {cancelable: false},
    );
  }, 200);
};
