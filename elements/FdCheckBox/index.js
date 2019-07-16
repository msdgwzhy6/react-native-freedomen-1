import React from 'react'
import {Animated, Text, Image, TouchableOpacity} from 'react-native'
import util from '../../utils/util' 
import theme from '../../config/theme';
var checkedImage = require('../icon/checked.png');
var unCheckImage = require('../icon/uncheck.png');
import Base from '../Base'

const styleItems = [
    'width', 
    'height',  
    'borderColor',
    'borderWidth', 
    'borderRadius'
]

export default class extends Base { 
    constructor (props) {
        super (props)
        let item = props.item || {} 

        this.state = {
            type: item.type,
            prop: item.prop,
            value: !!item.value, 
            data: item.$data
        }   

        checkedImage = item.checked || checkedImage
        unCheckImage = item.unCheck || unCheckImage

        this.scaleValue = new Animated.Value(0)

        this.scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.2, 1]
        })

        this.style = this._style(item.style, this.state.value, this.state.data)   
           
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

    componentWillReceiveProps(nextProps) { 
        if (nextProps.item.value != this.state.value)
            this.setState({
                value: nextProps.item.value
            }, () => {
                this._startAnimation()
            })
    } 
  
    _click = () => {
        this._change(!this.state.value)
        this._startAnimation()
    }

    render () { 
        return (
            <TouchableOpacity onPress={this._click} >
            {
                this.props.item.checked && this.props.item.unCheck 
                ?
                    <Animated.Image 
                        source={ this.state.value ? checkedImage : unCheckImage } 
                        style={[
                            {height: theme.size.smallHeight, width: theme.size.smallHeight}, 
                            theme.external[this.props.item.type], 
                            util.makeStyle(this.style, 'height', 'width'), 
                            {transform: [{scale: this.scale}]}
                        ]}
                    /> 
                :
                    <Animated.View style={[
                        {
                            width: theme.size.smallHeight,
                            height: theme.size.smallHeight,
                            borderColor: theme.color.primaryColor,
                            borderWidth: 2,
                            borderRadius: 5,
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: this.state.value ? theme.color.primaryColor : null
                        },
                        theme.external[this.props.item.type], 
                        util.makeStyle(this.style, ...styleItems), 
                        {transform: [{scale: this.scale}]}
                    ]}> 
                        {
                            this.state.value ? 
                            <Image source={require('../icon/dui.png')} style={{width: theme.size.smallHeight < 25 ? 16: 26, height: theme.size.smallHeight < 25 ? 16: 26}}/>
                            : null
                        }
                    </Animated.View>

            }
            </TouchableOpacity>
        )
    }
} 