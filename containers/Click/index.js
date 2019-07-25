import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import util from '../../utils/util'  
import theme from '../../config/theme'

export default class extends React.Component {

    constructor (props) { 
        super(props) 
    }
    render () {  
        return <TouchableOpacity 
            onPress={() => {
                this.props.event && this.props.event({
                    type: 'click', 
                    prop: this.props.item.prop
                })
            }}
            style={[theme.external[this.props.item.type], util.resetStyle(this.props.item.style)]}>
            {this.props.children}
        </TouchableOpacity>
    }
}
 