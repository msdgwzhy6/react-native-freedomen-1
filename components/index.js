import Region from './Region/index' 
import FreshList from './FreshList/index'
import SlidePop from './SlidePop/index'
import Tab from './Tab/Tab'
import theme from '../config/theme'
const redux = Region.redux
import elements from '../elements'
const global = {}
 
export default {
    Region,
    redux,
    FreshList,
    SlidePop,
    Tab,
    global, 
    custom: theme.custom,
    register: function (key, jsx) {
        elements.set(key, jsx)
    }
}