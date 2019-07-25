import React from 'react'
import {View} from 'react-native'
import util from '../../utils/util'  
import theme from '../../config/theme'
import SwipeOut from 'react-native-swipeout'
export default class extends React.Component {

    constructor (props) { 
        super (props)
    }
    
    _buttons = (options) => {
        if (!options) {
            return [{
                text: '删除',
                backgroundColor: 'red',
                onPress: () => {
                   this.props.event && this.props.event({
                        prop: '$delete', 
                        type: 'press'
                   })
                },
            }]
        } else {
            return options.map(option => {
                return {
                    text: option.value,
                    backgroundColor: option.backgroundColor || 'red',
                    onPress: () => {
                        this.props.event && this.props.event({
                            prop:  option.prop, 
                            type: 'press'
                        })
                    },
                }
            })
        }
    }

    render () {  
        return  <SwipeOut right={this._buttons(this.props.item.options)}> 
                <View style={[theme.external[this.props.item.type],  util.resetStyle(this.props.item.style)]} >
                    {this.props.children}
                </View>
            </SwipeOut> 
    }
}
 