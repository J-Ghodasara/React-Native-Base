import React from 'react';
import { ActivityIndicator, StyleSheet, Modal, View } from 'react-native';
import color from '../config/colors';
import { connect } from 'react-redux';
import colors from '../config/colors';
import constant from '../config/constant';
import PubSub from 'pubsub-js';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isProgress: false }
  }

  componentDidMount = () => {
    PubSub.subscribe(constant.keyAllConstant.keyPubProgress, (msg, data) => {
      this.setState({
        isProgress: data.isShow
      })
    })
  }

  componentWillUnmount = () => {
    PubSub.unsubscribe(constant.keyAllConstant.keyPubProgress)
  }

  render() {
    return (
      <CustomProgressBar status={this.state.isProgress} />
    );
  }
}




const CustomProgressBar = (props) => (
  <View style={styles.container}>
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.status}
    >
      <View style={[styles.container, modalBackgroundStyle]}>
        <ActivityIndicator size="large" color={colors.colorWhite} />
      </View>
    </Modal>
  </View>
);

var modalBackgroundStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorWhite,
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0
  }
});
const mapStateToProps = state => {
  return ({
    progressBarStatus: state.commanReducers.isLoading
  });
};

export const HandleProgressBar = connect(
  mapStateToProps,
  null
)(ProgressBar);



