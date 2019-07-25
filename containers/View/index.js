import React from 'react'
import {View} from 'react-native'
  
import theme from '../../config/theme'
import Base from '../../elements/Base'

export default class extends Base {
    constructor (props) { 
        super (props)
        let item = props.item || {}
        this.state = { 
            prop: item.prop,
            value: item.value,
            data: item.$data
        } 
        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.item.value})
    }

    render () { 
        this.style = this._style(this.props.item.style, this.state.value, this.state.data)
        return <View style={[theme.external[this.props.item.type], this.style]}>
            {this.props.children}
        </View>
    }
}
 