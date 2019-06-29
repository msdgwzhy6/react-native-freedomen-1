import React from 'react'
import { Image, View} from 'react-native'  
import util from '../../utils/util' 
import theme from '../../config/theme'   
import Base from '../Base'

const styleItems = [
    'opacity', //设置不透明度0.0(透明)-1.0(完全不透明)
    'overflow', //设置图片尺寸超过容器可以设置显示或者隐藏(‘visible’,’hidden’)
    'borderWidth', // 
    'borderRadius', // 
    'resizeMode',
    'height',  //
    'width' //
]

const styleContain = [
    'padding',
    'paddingLeft',
    'paddingRight',
    'paddingBottom',
    'paddingTop',
    'margin',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'flex',
    'alignItems',
    'justifyContent'

]

class FdImage extends Base {
    constructor (props) {
        super (props)
        let item = props.item || {} 

        this.state = {
            prop: item.prop,
            value: item.value,
            label: item.label, 
            data: item.$data
        }
         
        this.style = this._style(item.style, this.state.value, this.state.data) 
        this.filter = this._filter(item.filter, this.state.value, this.state.data)
    }
 
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.item.value,
        })
    } 
  
    render () {
        let image, value = this.filter || this.state.value
        
        if (typeof value === 'number')
            image = value
        else 
            image = {uri: this.props.item.baseUrl !== void 0 ? this.props.item.baseUrl + value : value}
    
        return (
            <View style={[util.makeStyle(theme.external[this.props.item.type], ...styleContain), util.makeStyle(this.style, ...styleContain)]}>
                <Image source={image} style={[util.makeStyle(theme.external[this.props.item.type], ...styleItems), theme.external[this.props.item.type], util.makeStyle(this.style, ...styleItems)]}/> 
            </View>
        )
    }
}

export default FdImage