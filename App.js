import React from 'react';
import {
  Image, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import validation from './helpers/validation';
import CustomTextInput from './components/CustomTextInput';
import { primaryColor } from './config/colors';
import { authenticate } from './config/api';

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleOnPress = () => {
    const usernameError = validation('username', this.state.username);
    const passwordError = validation('password', this.state.password);

    this.setState({
      usernameError,
      passwordError,
    });

    if (!usernameError && !passwordError) {
      authenticate(this.state);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/img/logo.png')} style={styles.logo} />
        <CustomTextInput
          onChangeText={username => this.setState({ username })}
          placeholder="Seu emaild"
          style={styles.input}
          keyboardType="email-address"
          error={this.state.usernameError}
        />
        <CustomTextInput
          onChangeText={password => this.setState({ password })}
          placeholder="Sua senha"
          secureTextEntry={true}
          style={styles.input}
          error={this.state.passwordError}
        />
        <TouchableOpacity onPress={this.handleOnPress} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  container: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    marginTop: 10,
    maxHeight: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: primaryColor,
    marginTop: 20,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
