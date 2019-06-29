import React from 'react'
import { Text } from 'react-native'
import util from '../../utils/util'
import theme from '../../config/theme'   

import Base from '../Base'

// const styleItems = [
//     'color', //字体颜色
//     'fontSize', //字体大小
//     'fontFamily', //字体
//     'fontStyle', //字的样式（normal：正常，italic：斜体）
//     'fontWeight', //设置粗体（normal：正常，bold：粗体: 100，200，300， 400， 500， 600， 700， 800， 900）
//     'lineHeight', //行高
//     'textAlign', //文字对其方式（auto：自动对齐left：左对齐right：右对齐 center：居中对齐）
//     'textDecorationLine', //下划线和删除线样式（none：无线underline：下划线line-through：删除线 underline ine-through：下划线和删除线） 
//     'textShadowOffset',
//     'textShadowRadius',
//     'padding',
//     'paddingLeft',
//     'padding'
// ]

class FdText extends Base { 
    constructor (props) {
        super (props)
        let item = props.item || {} 

        this.state = {
            prop: item.prop,
            value: item.value,
            data: item.$data, 
        }    

        this.style = this._style(item.style, this.state.value, this.state.data)    
        this.filter = this._filter(item.filter, this.state.value, this.state.data)
    } 

    componentWillReceiveProps(nextProps) {   
        this.setState({
            value: nextProps.item.value
        }) 
    }  

    render () {    
        return (
            <Text 
                {...this.props.item.other}
                style={[util.resetStyle(theme.external[this.props.item.type]) , this.style]} 
            >  
                {
                    this.filter || this.state.value
                }
            </Text>
        )
    }
}

export default FdText