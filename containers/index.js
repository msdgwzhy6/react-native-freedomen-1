import FdView from './View'
import FdBr from './Br'
import FdClick from './Click'
import FdBackImage from './BackImage'
import Swipe from './Swipe';

const map  = new Map()

map.set('br', FdBr)
map.set('click', FdClick)
map.set('backimage', FdBackImage)
map.set('swipe', Swipe)

export default map