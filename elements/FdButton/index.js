import React from 'react'
import {TouchableOpacity} from 'react-native'
import FdImage from '../FdImage/index'
import FdText from '../FdText/index'
import util from '../../utils/util'
import theme from '../../config/theme'
import Base from '../Base'
const styleItems = [
    'flex'
]

export default class extends Base {
    constructor (props) { 
        super (props)
        let item = props.item || {}
        this.state = { 
            prop: item.prop,
            value: item.value,
            data: item.$data
        } 
        this.style = this._style(item.style, this.state.value, this.state.data)
        this.disabled = this._disabled(item.disabled, this.state.value, this.state.data)
    }

    _getXmlbyType = (item) => {
        let jsx = null   
        let style = Object.assign(this.style , {})
        this.disabled ? style.backgroundColor = theme.color.disableColor  :  ''
        if (util.startWith(item.type, 'button-image')) {

            jsx = <FdImage item={item} />

        } else if (util.startWith(item.type, 'button')) {
            
            jsx = <FdText item={item} />

        }
        return jsx
    } 
   
    componentWillReceiveProps(nextProps) {  
        this.setState({
            value: nextProps.item.value,
        } ) 
    }

    _press = (type) => {
        this.props.event && this.props.event({
            type: type, 
            prop: this.props.item.prop, 
            value: this.props.item.value
        })
    }

    render () { 
        let jsx = this._getXmlbyType (this.props.item)  
        return (  
            this.disabled === void 0 || !this.disabled
            ? 
            <TouchableOpacity    
                style={[
                    util.makeStyle(theme.external[this.props.item.type], ...styleItems),
                    util.makeStyle(this.style, ...styleItems)
                ]}
                onPress={() => {
                    this._press('press')
                }} onLongPress={() => {
                    this._press('longPress')
                }}
                {...this.props.item.others}> 
                    {jsx} 
            </TouchableOpacity> 
            : jsx
        )
    }
}
 