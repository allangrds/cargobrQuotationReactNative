import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import validation from './helpers/validation'
import CustomTextInput from './components/CustomTextInput'
import { primaryColor } from './config/colors'
import { authenticate } from './config/api'
import logo from './assets/img/logo.png'

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
})
export default class App extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleOnPress = () => {
    const { username, password } = this.state
    const usernameError = validation('username', username)
    const passwordError = validation('password', password)

    this.setState({
      usernameError,
      passwordError,
    })

    if (!usernameError && !passwordError) {
      authenticate(this.state)
    }
  }

  handleOnChangeText = field => value => this.setState({ [field]: value })

  render () {
    const { passwordError } = this.state

    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <CustomTextInput
          onChangeText={this.handleOnChangeText('username')}
          placeholder="Seu emaild"
          style={styles.input}
          keyboardType="email-address"
          error={this.state.usernameError}
        />
        <CustomTextInput
          onChangeText={this.handleOnChangeText('password')}
          placeholder="Sua senha"
          secureTextEntry
          style={styles.input}
          error={passwordError}
        />
        <TouchableOpacity onPress={this.handleOnPress} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
