import React from 'react'
import { View, Animated, TouchableOpacity } from 'react-native'   
import theme from  '../../config/theme'
import util from '../../utils/util' 

const unstar = require('../icon/unstar.png')
const star = require('../icon/star.png')
import Base from  '../Base'

export default class extends Base { 
    constructor (props) {
        super (props)
        let item = props.item || {}
        //{item => Object: [type, value, label, event...]}
        //type: button-text, button-image, button-view
        this.state = { 
            prop: item.prop,
            value: parseInt(item.value || 0), 
            size: item.size || 5,  
            data: item.$data
        } 

        this.checkedImage = item.checked || star
        this.unCheckImage = item.unCheck || unstar

        this.scaleValue = new Animated.Value(0)

        this.scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.2, 1]
        })

        this.style = this._style(item.style, this.state.value, this.state.data)
        this.disabled = this._disabled(item.disabled, this.state.value, this.state.data)
        // this.filter = this._filter(item.filter, this.state.value, this.state.data) ??
        
    } 

    _click (value) {
        if (this.disabled) 
            return
            
        this._change(value)
        this._startAnimation()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item.value != this.state.value)
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
   
    _item () {
        let arr = []
        for(let i = 1; i <= this.state.size; i ++) {
            let source = this.state.value >= i ? this.checkedImage : this.unCheckImage 
            arr.push(
                <TouchableOpacity key={i} style={{marginRight: theme.size.itemSpace}} onPress={() => {
                    this._click(i)
                }}>
                    <Animated.Image 
                        source={source} 
                        style={[ 
                            {
                                width: theme.size.normalHeight, 
                                height: theme.size.normalHeight, 
                                transform: this.state.value >= i ? [{scale: this.scale}] : []
                            },
                            theme.external[this.props.item.type], 
                            util.makeStyle(this.style, 'height', 'width'), 
                        ]}
                    />
                </TouchableOpacity>
            )
        }
        return arr
    }
    render() {
        return  <View style={{flexDirection: 'row'}}>
            {
                this._item()
            }
        </View>
    }
  
} 