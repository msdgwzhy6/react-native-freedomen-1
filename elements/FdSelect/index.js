import React from 'react'
import { Picker} from 'react-native' 
import util from '../../utils/util'
import theme from '../../config/theme'
import Base from '../Base'
class FdSelect extends Base {
    constructor (props) {
        super (props)
        let item = props.item || {} 
        this.state = {
            value: item.value, 
            prop: item.prop,
            data: item.$data,
        }  

        this.options = this._options(item.options)
        this.style = this._style(item.style, this.state.value, this.state.data) 
    }  

    componentWillReceiveProps(nextProps) { 
        this.setState({
            value: nextProps.item.value
        })
    } 
 
    _optionItem = (options) =>{
        return options.map((option, i) => {
            return <Picker.Item key={i} label={option.label} value={option.value}  />
        })
    }

    render () { 
        return (
            <Picker
                selectedValue={this.state.value} 
                {...this.props.item.others}
                style={[theme.external[this.props.item.type], this.style]}
                onValueChange={this._change}>
                    {
                        this._optionItem(this.options)
                    }
            </Picker>
        )
    }
}

export default FdSelect