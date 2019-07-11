import React, { Component } from 'react';
import {Animated, Easing, PanResponder, Text, Modal, Dimensions} from 'react-native'  
const {width, height} = Dimensions.get('window')

export default class extends Component { 
    constructor (props) {
        super (props) 
        this.state = { 
            visible: false
        } 
        let style = props.style || {}

        if (style.top) {
            let top = typeof style.top == 'number' ? style.top : parseInt(style.top) * height / 100
            let h = height - top
            this._to = new Animated.Value(h)
            this.value = h 
            this.style = {
                position: 'absolute',
                height:  h,
                width: '100%',
                top: top,
                transform: [{translateY: this._to}]
            }
        } else if (style.bottom) {
            let bottom = typeof style.bottom == 'number' ? style.bottom : parseInt(style.bottom) * height / 100
            let h = height - bottom
            this._to = new Animated.Value(-h)
            this.value = -h 
            this.style = {
                position: 'absolute',
                height:  h,
                width: '100%',
                bottom: bottom,
                transform: [{translateY: this._to}]
            }
        } else if (style.left) {
            let left = typeof style.left == 'number' ? style.left : parseInt(style.left) * height / 100
            let w = width - left
            this._to = new Animated.Value(w)
            this.value = w
            this.style = {
                position: 'absolute',
                width:  w,
                height: '100%',
                left: left,
                transform: [{translateX: this._to}]
            }
        } else if (style.right) {
            let right = typeof style.right == 'number' ? style.right : parseInt(style.right) * height / 100
            let w = width - right
            this._to = new Animated.Value(-w)
            this.value = -w
            this.style = {
                position: 'absolute',
                width:  w,
                height: '100%',
                right: right,
                transform: [{translateX: this._to}]
            }
        }
    } 
    hide = () => {
        let duration = Math.abs(parseInt(this.value * .45))
        Animated.timing(this._to, {
            toValue: this.value,
            duration: this.props.time || duration < 200 ? 200 : duration,//240, 
        }).start(() => {
            this.setState({visible: false}, () => {
                this.props.close && this.props.close()
            })
        })
    }
    show = () => {
        let duration = Math.abs(parseInt(this.value * .52))
        this.setState({
            visible: true
        }, () => {
            Animated.timing(this._to, {
                toValue: 0,
                duration: this.props.time ? parseInt(this.props.time * .8) : duration < 260 ? 260 : duration,//240, 
                easing: Easing.out(Easing.ease),
            }).start()
        })
    }

    componentWillMount() { 
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    
            onPanResponderGrant: (evt, gestureState) => {
            // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
    
            // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {
            // 最近一次的移动距离为gestureState.move{X,Y}
            console.warn(gestureState.dx, gestureState.dy)
    
            // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
            // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
            // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
            // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            } 
        }); 
    }
    render () {
        return (  
            <Modal transparent={true} onRequestClose={this.hide} visible={this.state.visible}>
                {
                    this.props.noCover ? null :
                    <Text onPress={this.hide} 
                        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    </Text>
                }
                <Animated.View style={[{backgroundColor: 'white'}, this.props.style, this.style]} >
                    {
                        this.props.children    
                    }
                </Animated.View>
            </Modal>  
        )
    }
}  