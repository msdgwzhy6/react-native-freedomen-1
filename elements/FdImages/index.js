import React from 'react'
import Image from '../FdImage'
import {TouchableWithoutFeedback, Modal, View} from 'react-native' 
// import ImageViewer from 'react-native-image-zoom-viewer'
import Base from '../Base'
import util from '../../utils/util'
const styleItems = [
    'margin',
    'marginLeft',
    'marginRight',
    'marginBottom',
    'marginTop',
    'padding',
    'paddingLeft',
    'paddingRight', 
    'paddingTop', 
    'paddingBottom', 
    'alignItems',
    'flexWrap',
    'flexDirection'

]
class FdImage extends Base {
    constructor (props) {
        super (props)
        let item = props.item || {}
        //{item => Object: [type, value, label, event...]}
        //type: button-text, button-image, button-view
        this.state = {
            value: item.value, 
            prop: item.prop,
            data: item.$data,

            visible: false
        }

        this.images = this._setImages(item.value)
        this.style = this._style(item.style, this.state.value, this.state.data)
    }

    _setImages = (value) =>{
        return value.map(el => {
            if (typeof el == "number") {
                return {
                    props: {
                        url: '',
                        source: el
                    }
                }
            } else {
                return {url: (this.props.item.baseUrl || '') + el}
            }
        })
    }
   
    componentWillReceiveProps(nextProps) { 
        this.setState({
            value: nextProps.item.value
        }, () => {
            this.images = this._setImages(nextProps.item.value)
        })
    } 
    _press = (value, type) => {
        if (type == 'press') 
        this.setState({
            visible: !this.state.visible
        })

        this.props.event && this.props.event({type: type, prop: this.props.item.prop, value: value})
    }
    render () {
        return ( 
            <View style={[
                    {flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap'},
                    util.makeStyle(this.style, ...styleItems)
                ]}
            >
            {
                (this.state.value || []).map((ret, key) => {
                    return <TouchableWithoutFeedback 
                            onPress={() => {this._press(ret, 'press')}} 
                            onPressIn={() => {this._press(ret, 'pressIn')}}
                            onPressOut={() => {this._press(ret, 'pressOut')}}
                            onLongPress={() => {this._press(ret, 'longPress')}}
                            key={key}>
                        <View style={[ util.makeStyle(this.style, ...styleItems)]}>
                            <Image item={{
                                value: ret, 
                                style: this.style, 
                                filter: this.props.item.filter, 
                                $data: this.state.$data}} />
                        </View>
                    </TouchableWithoutFeedback>
                })
            }
            {/* <Modal visible={this.state.visible} transparent={true}>
                <ImageViewer imageUrls={this.images}/>
            </Modal> */}
            </View>
        )
    }
}

export default FdImage