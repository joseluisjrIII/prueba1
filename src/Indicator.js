import React from 'react';
import {ActivityIndicator,StyleSheet,Text,View,Modal} from 'react-native';

function Indicator ({isVisible}) {
   
    return (
    <Modal
    visible={isVisible}   
    >
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#E90086" /> //modificacion de indicador
      </View>
    </Modal>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  }
});
export default Indicator