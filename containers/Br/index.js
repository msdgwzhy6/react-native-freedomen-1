import React from 'react'
import {View} from 'react-native'
import util from '../../utils/util'  
import theme from '../../config/theme'

export default class extends React.Component {

    constructor (props) { 
        super (props)
    }
 
    render () {  
        return <View style={[theme.external[this.props.item.type],  util.resetStyle(this.props.item.style)]} {...this.props.item.others}>
            {this.props.children}
        </View>
    }
}
 