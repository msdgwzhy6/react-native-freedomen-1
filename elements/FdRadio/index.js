import React from 'react'
import {View, TouchableOpacity, Animated} from 'react-native'
import util from '../../utils/util' 
import theme from '../../config/theme';
import Base from '../Base'

const styleItems = [
    'width', 
    'height',   
    'borderRadius',
    'borderWidth', 
    'borderColor'
]

export default class extends Base { 
    constructor (props) {
        super (props)
        let item = props.item || {} 

        this.state = {
            type: item.type,
            prop: item.prop,
            value: item.value, 
            data: item.$data
        }   

        this.style = this._style(item.style, this.state.value, this.state.data)   

        this.scaleValue = new Animated.Value(0)
        this.scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.2, 1]
        })
    }

    componentWillReceiveProps(nextProps) {    
        if (this.state.value !== nextProps.item.value)
            this.setState({
                value: nextProps.item.value
            }, () => {
                this._startAnimation()
            })   

        
    } 
 
    _startAnimation() {
        this.scaleValue.setValue(0)

        Animated.spring(
            this.scaleValue,
            {
                toValue: 1,
            }
        ).start()
    }
  
    _click = () => {
        this._change(!this.state.value)
        this._startAnimation()
    }

    render () { 
        return (
            <TouchableOpacity underlayColor={'transparent'} onPress={this._click}>
                <Animated.View style={[
                        {
                            borderWidth: 2, 
                            borderColor: theme.color.primaryColor, 
                            height: theme.size.smallHeight, 
                            width: theme.size.smallHeight, 
                            padding: theme.size.smallHeight < 26 ? 2 : 5
                        }, 
                        theme.external[this.props.item.type], 
                        util.makeStyle(this.style, ...styleItems),
                        {transform: [{scale: this.scale}]}
                    ]}
                >
                {
                    this.state.value  ? 
                        <View style={[
                                {backgroundColor: theme.color.primaryColor, flex: 1}, 
                                util.makeStyle(theme.external[this.props.item.type], 'borderRadius'),
                                util.makeStyle(this.style, 'borderRadius'),
                            ]} 
                        /> 
                    : null
                }
                </Animated.View>
            </TouchableOpacity>
        )
    }
} 