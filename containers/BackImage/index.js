import React from 'react'
import {View, ImageBackground} from 'react-native'
import util from '../../utils/util'  
import theme from '../../config/theme'

export default class extends React.Component {

    constructor (props) { 
        super (props)
        this.state = {
            value: props.item.value
        }
    }
 
    render () {  
        var image, value = this.state.value
        if (typeof value === 'number')
            image = value
        else 
            image = {uri: value} 

        return <ImageBackground source={image} style={[theme.external[this.props.item.type],  util.resetStyle(this.props.item.style)]}>
            {this.props.children}
        </ImageBackground>
    }
}
 