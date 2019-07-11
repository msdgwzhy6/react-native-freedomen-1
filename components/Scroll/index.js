import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import Region from '../Region/index' 
import theme from '../../config/theme' 
class Scroll extends Component { 

    constructor (props) {
        super (props)
 
        this.state = {
            columns: props.columns || [],  
            data: props.data || {},
            type: props.type
        } 
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
        })
    } 
    _event = (params, index) => {
        return this.props.event && this.props.event({
            prop: this.props.prop,
            type: 'views', 
            value: params,
            row: this.state.data,
            index: index
        })
    }
    render () {
        let { columns, data } = this.state 
        
        let jsx = data.map((d, index) => {
            return <Region columns={columns} data={d} key={index} event={(params) => {this._event(params, index)}} /> 
        }) 

        return (<ScrollView 
            showsVerticalScrollIndicator={false} 
            showsHorizontalScrollIndicator={false} 
            style={[{flex: 1, backgroundColor: theme.color.backgroundColor}, this.props.style]} 
            horizontal={this.props.type == 'scroll-x'}
            {...this.props.others}>
                { jsx }
            </ScrollView>)
    }
}

export default Scroll