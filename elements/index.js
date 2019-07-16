import FdImage from './FdImage/index'
import FdImages from './FdImages/index'
import FdText from './FdText/index'
import FdCounter from './FdCounter/index'
import FdInput from './FdInput/index'
import FdCheckBox from './FdCheckBox/index'
import FdCheckBoxs from './FdCheckBoxs/index'
import FdSelect from './FdSelect/index'
import FdProgress from './FdProgress/index'
import FdSlider from './FdSlider/index'
import FdButton from './FdButton/index'
import FdRadio from './FdRadio/index'
import FdRadios from './FdRadios/index'
import FdTags from './FdTags/index'
import FdRate from './FdRate/index'
// import FdVideo from './FdVideo' 
// import FdSelectAddress from './FdSelectAddress'
import FdSwitch from './FdSwitch/index'
// import FdDialog from './FdDialog'
// import FdPickImage from './FdPickImage'
// import FdImages from './FdImages'
// import FdMenu from './FdMenu'
import FdBreadcrumb from './FdBreadcrumb'; 
import FdPickDate from './FdPickDate/index'
 

// export default {
//     FdImage,
//     FdText,
//     FdButton,
//     FdInput,
//     FdCounter,
//     FdImages,
//     FdTags,
//     FdCheckBox,
//     FdCheckBoxs,
//     FdSelect,
//     FdSlider,
//     FdBreadcrumb,
//     FdRadio,
//     FdRadios,
//     FdPickDate,
//     FdRate, 
//     FdSwitch, 
//     FdProgress, 
// }

const map = new Map()
map.set('text', FdText)
map.set('image', FdImage)
map.set('button', FdButton)
map.set('input', FdInput)
map.set('counter', FdCounter)
map.set('images', FdImages)
map.set('tags', FdTags)
map.set('checkbox', FdCheckBox)
map.set('checkboxs', FdCheckBoxs)
map.set('select', FdSelect)
map.set('slider', FdSlider)
map.set('breadcrumb', FdBreadcrumb)
map.set('radio', FdRadio)
map.set('radios', FdRadios)
map.set('pick', FdPickDate)
map.set('rate', FdRate)
map.set('switch', FdSwitch)
map.set('progress', FdProgress)

export default map