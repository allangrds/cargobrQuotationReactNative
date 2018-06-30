import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import { dangerColor } from '../config/colors';

const CustomTextInput = props => (
  <React.Fragment>
    <TextInput {...props} />
    {props.error ? <Text style={styles.error}>{props.error}</Text> : null}
  </React.Fragment>
);

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: dangerColor,
  },
});

export default CustomTextInput;
