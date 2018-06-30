import { createStackNavigator } from 'react-navigation'
import LoginScreen from './screens/Login'
import FormScreen from './screens/Form'

const App = createStackNavigator(
  {
    Login: LoginScreen,
    Form: FormScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    cardStyle: { backgroundColor: '#fff' },
  }
)

export default App
