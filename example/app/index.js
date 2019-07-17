import { createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation"
import Home from './main/Home'
import Middle from './main/Middle'
import Mine from './main/Mine'
import Form from './page/Form' 
import Form2 from './page/Form2'
import Form3 from './page/Form3'

import BottomBar from './BottomBar'
const App = createBottomTabNavigator({
    Home: Home,
    Middle: Middle,
    Mine: Mine
    
}, {
    initialRouteName: "Home",
    tabBarComponent: BottomBar,
    navigationOptions : ({navigation}) => { 
        return {
            header: null
        }
    }
});
const AppNavigator = createStackNavigator({
    App: App,
    Form: Form,
    Form2:Form2,
    Form3: Form3
}, {
    initialRouteName: "App",
})
export default createAppContainer(AppNavigator);