import React, { Component } from 'react';
import {View, ImageBackground, TouchableOpacity } from 'react-native'
import Elements from '../../elements' 
import Containers from '../../containers'
import Swipeout from 'react-native-swipeout'
import Scroll from '../Scroll/index' 
import Views from '../Views/index'
import util from '../../utils/util'    
import theme from '../../config/theme'
 
const noWrapper = ['button', 'text', 'checkboxs', 'radios', 'input', 'pick', 'view', 'scroll', 'tags', 'select', 'image']
 
/**
 * items: [id]prop, value, [f]event, [f]load
 * 
 */

class Region extends Component {
    //全局状态管理
    static redux = (obj) => { 
        Object.keys(obj).forEach((key) => {
            if (Region.reduxMap[key] !== void 0) { 
                let newData = {}
                if (typeof obj[key] == 'function') {
                    newData = obj[key](Region.reduxMap[key].data) 
                } else {
                    newData = obj[key] 
                } 

                let currentComponent = Region.reduxMap[key]._this
                currentComponent._fresh(currentComponent, newData)
            }
        });
    }
    //状态存储表
    static reduxMap = {} 
    
    constructor(props) {
        super(props)  

        this.state = { 
            data: props.data || {},
            columns: this._resetColumns(props.columns, props.data),
            style: util.resetStyle(props.style) 
        } 

       
        this.inputs = []
        //内置redux
        if (props.redux) {  
            if (Region.reduxMap[props.redux]) {
                console.warn('the key ' + props.redux + ' already exists')
            }
            Region.reduxMap[props.redux] = {
                _this: this,
                data: this.state.data
            }
        }
    } 

    _fresh(_this, newData) {
        let columns = _this._resetColumns(_this.state.columns, newData) 
        _this.setState({
            data: newData,
            columns: columns
        })

        if (_this.inputs.length) { 
            for (let ref of _this.inputs) { 
                //newData[ref] == void 0    use oldData ???
                _this.refs[ref] && _this.refs[ref]._fresh(newData[ref])
            }
        }
    }

    componentWillUnmount() {
        //清除没有用的redux
        if (this.props.redux && Region.reduxMap[this.props.redux]) { 
            delete Region.reduxMap[this.props.redux]
        }
    }
    
    componentWillReceiveProps(nextProps) {  
        let data = this.state.data

        for (let i in nextProps.data) {
            data[i] = nextProps.data[i]
        } 

        this.state.columns = nextProps.columns 

        this._fresh(this, data) 
    } 

    _resetColumns = (columns = [], data = {}) => {
        for (let i = 0; i < columns.length; i ++) { 

            if (Array.isArray(columns[i])) {
                this._resetColumns(columns[i], data)
            } else { 
                columns[i].value = data[columns[i].prop] === void 0 ? columns[i].value : data[columns[i].prop] //reset item value
                columns[i].$data = data  //into full data
 
            } 
        } 

        return columns
    } 

    _buttons = (options) => {
        if (!options) {
            return [{
                text: '删除',
                backgroundColor: 'red',
                onPress: () => {
                    this._event({
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
                        this._event({
                            prop:  option.prop, 
                            type: 'press'
                        })
                    },
                }
            })
        }
    }

    _tag = (el, index) => {
        let tag    
        el.type = el.type || ""

        if(el.type.indexOf('input') === 0) {
            tag = <Elements.FdInput key={index} key={index} ref={el.prop} change={this._change} item={el}/>
            this.inputs.push(el.prop)

        } else if (el.type.indexOf('counter') === 0) {

            tag = <Elements.FdCounter key={index} change={this._change} item={el}/>

        } else if (el.type.indexOf('view') === 0) {

            tag = <Views 
                    key={index}
                    event={(params) => {
                        let newData = this.props.event && this.props.event(params)

                        if (newData)  
                            this._fresh(this, newData) 
                    }} 
                    style={el.style} 
                    columns={el.columns} 
                    data={el.value} 
                    type={el.type}/>

        } else if (el.type.indexOf('scroll') === 0) {

            tag = <Scroll  
                    key={index}
                    event={(params) => { this._event({value: params.row}) }} 
                    style={el.style} 
                    columns={el.columns} 
                    data={el.value} 
                    type={el.type}/>

        } else if (el.type.indexOf('tags') === 0) {

            tag = <Elements.FdTags key={index} change={this._change} item={el}/>

        } else if (el.type.indexOf('text') === 0) {

            tag = <Elements.FdText event={this._event}  key={index} item={el}/>

        } else if (el.type.indexOf('images') === 0) {

            tag = <Elements.FdImages key={index} item={el} event={this._event}/>

        } else if (el.type.indexOf('image') === 0) {

            tag = <Elements.FdImage key={index} key={index} item={el} />

        } else if (el.type.indexOf('menu') === 0) {

            tag = <Elements.FdMenu key={index} item={el} event={this._event}/>

        } else if (el.type.indexOf('checkboxs') === 0) {

            tag = <Elements.FdCheckBoxs key={index} item={el} change={this._change} />

        } else if (el.type.indexOf('checkbox') === 0) {

            tag = <Elements.FdCheckBox key={index} item={el} change={this._change} />

        } else if (el.type.indexOf('rate') === 0) {

            tag = <Elements.FdRate key={index} item={el} change={this._change} />
            
        } else if (el.type.indexOf('select') === 0) {

            tag = <Elements.FdSelect key={index} change={this._change} item={el} />

        } else if (el.type.indexOf('slider') === 0) {

            tag = <Elements.FdSlider key={index} change={this._change} item={el} />

        } else if (el.type.indexOf('radios') === 0) {

            tag = <Elements.FdRadios key={index} change={this._change} item={el} />

        } else if (el.type.indexOf('radio') === 0) {

            tag = <Elements.FdRadio key={index} change={this._change} item={el} /> 

        } else if (el.type.indexOf('switch') === 0) {

            tag = <Elements.FdSwitch key={index} change={this._change} item={el} />

        } else if (el.type.indexOf('button') === 0) {

            tag =  <Elements.FdButton key={index} event={this._event} item={el} />

        } else if (el.type.indexOf('progress') === 0) {

            tag =  <Elements.FdProgress key={index} item={el} />

        } else if (el.type.indexOf('breadcrumb') === 0) {

            tag = <Elements.FdBreadcrumb key={index} event={this._event} item ={el} />

        } else if (el.type.indexOf('pick') === 0) {

            tag = <Elements.FdPickDate key={index} change={this._change} item ={el} />

        } else {

            tag = <View style={el.style} key={index}></View>
        }

        if (!util.startWith(el.type, ...noWrapper))
            tag = <Containers.FdView item={el} key={index}>
                { tag }
            </Containers.FdView>
               

        return tag
    }

    _change = (param) => {  
        
        let { data } = this.state
        data[param.prop] = param.value 

        this._resetColumns(this.state.columns, data)
        this.setState({data: data}, () => {
            let params = {
                type: 'change',
                prop: param.prop,
                value: param.value
            }
            this._event(params)
        })
    }

    _event = (params) => {   

        params.row = this.state.data 
        let newData = this.props.event && this.props.event(params)

        if (newData)  
            this._fresh(this, newData) 

    }
    
    _makeJsx = (columns) => {
        let view = []
        let sub = [] 
        for (let i = 0; i < columns.length; i ++) { 
 
            if (util.startWith(columns[columns.length - 1].type, ...['br', 'click', 'backimage', 'swipeout']) && typeof columns[columns.length - 1].load === 'function') {
                if (!columns[columns.length - 1].load(columns[columns.length - 1].value, this.state.data))
                    continue
            }

            if (columns[i].load && typeof columns[i].load === 'function') {
                if (!columns[i].load(columns[i].value, this.state.data))
                    continue
            }
            
            //br: view, click:可以点击， backimage: 背景图片， swipeout 侧滑,必要options [{prop: ,text, backgroundColor},{text}]
            if (i === columns.length - 1 && util.startWith(columns[i].type, ...['br', 'click', 'backimage', 'swipeout'])) {
                if (util.startWith(columns[i].type, 'br')) {
                    view.push( 
                        <View key={i} style={[theme.external[columns[i].type], util.resetStyle(columns[i].style)]}>{ sub }</View>
                    )  
                } else if (util.startWith(columns[i].type, 'backimage')) {
                    this.state.data[columns[i].prop] ? 
                        view.push(
                            <ImageBackground key={i} source={{uri: this.state.data[columns[i].prop]}} style={[theme.external[columns[i].type], util.resetStyle(columns[i].style)]}>
                                { sub } 
                            </ImageBackground>
                        )  :
                        view.push(
                            <ImageBackground key={i} source={columns[i].value} style={[theme.external[columns[i].type], util.resetStyle(columns[i].style)]}>
                                { sub } 
                            </ImageBackground>
                        )  
                } else if (util.startWith(columns[i].type, 'click')) {
                    view.push( 
                        <TouchableOpacity 
                            key={i} 
                            style={[theme.external[columns[i].type], util.resetStyle(columns[i].style)]} 
                            onPress={() => {this._event({ type: 'click', prop: columns[i].prop })}}>
                            { sub } 
                        </TouchableOpacity> 
                    ) 
                } else if (util.startWith(columns[i].type, 'swipeout')) {
                    view.push(
                        <Swipeout key={i} right={this._buttons(columns[i].options)}>
                            <View style={[theme.external[columns[i].type], util.resetStyle(columns[i].style)]}>
                                {sub}
                            </View>
                        </Swipeout>
                    )
                }
                sub = [] 
            } else if (Array.isArray(columns[i]))
                sub.push(this._makeJsx(columns[i]))
            else
                sub.push(this._tag(columns[i], i))
        } 
        
        if (!['br', 'click', 'backimage'].includes(columns[columns.length - 1].type))  
            view.push(<View key={'_10000'} style={[this.state.style]}>{ sub }</View>) 
        return view
    }
    render() {    
        return (
            <View style={[this.state.style]}>
                {
                    this._makeJsx(this.state.columns)
                }
            </View> 
        )
    }
} 
 
export default Region