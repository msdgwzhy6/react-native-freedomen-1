import Region from './Region/index'
import FreshList from './FreshList/index'
import SlidePop from './SlidePop/index'
import Tab from './Tab/Tab'
import theme from '../config/theme'
const redux = Region.redux
const global = {}
// import Toast from 'react-native-root-toast';
// function toast(msg) {
//     Toast.show(msg, {
//         duration: Toast.durations.SHORT,
//         position: Toast.positions.CENTER,
//         shadow: true,
//         animation: true, 
//         delay: 0,
         
//     });
// }

export default {
    
    Region,
    redux,
    FreshList,
    SlidePop,
    Tab ,
    global,
    custom: theme.custom,
   
    // Scanner,
    // toast
}