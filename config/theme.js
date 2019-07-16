 

const color = { 
    primaryColor: '#409EFF',  //主色 
    optionColor: '#191919',
    disableColor: '#AEB4C0',
    backgroundColor: '#f5f5f5',
    placeholder: '#999'

}
const size = { 
    primarySize: 16,  
    itemSpace: 15,
    largeHeight: 42, 
    normalHeight: 35,
    smallHeight: 30
} 
const external = {
    'text': {
        color: '#999',
        fontSize: 14
    },

    'text-h1': {
        color: 'black',
        fontSize: 22
    },
    'text-h2': {
        color: '#191919',
        fontSize: 20
    },
    'text-h3': {
        color: '#232323',
        fontSize: 18
    },
    'text-h4': {
        color: '#323232',
        fontSize: 16
    },
    'text-h5': {
        color: '#666',
        fontSize: 14
    },
    'text-badge': {
        color: 'white',
        backgroundColor: 'red',  
        minHeight: 10,
        minWidth: 10,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 16,
        padding: 1, 
        textAlign: 'center', 
        borderColor: 'white',
        borderWidth: .8,
    },

    
    'image-icon': {
        height: 22,
        width: 22
    },
}
function custom(obj1 = {}, obj2 = {}, obj3 = {}) {
    //color
    for(let el in obj1) {
        color[el] = obj1[el]
    }
    //size
    for(let el in obj2) {
        size[el] = obj2[el]
    }


    //external

    external['button-primary'] = {
        padding: 12,
        textAlign: 'center',
        color: 'white',
        fontSize: size.primarySize,
        textAlignVertical:'center',
        backgroundColor: color.primaryColor, 
      
    }

    external['button-cancel'] = {
        borderColor: color.primaryColor,
        padding: 12,
        textAlign: 'center',
        textAlignVertical:'center',
        color: color.primaryColor,
        fontSize: size.primarySize,
        borderWidth: 1, 
    }

    external['button-primary-disabled'] = {
        padding: 12,
        textAlignVertical:'center',
        textAlign: 'center',
        color: color.placeholder,
        fontSize: size.primarySize,
        backgroundColor: color.disableColor, 
    }

    external['button-cancel-disabled'] = {
        textAlignVertical:'center',
        borderColor: color.disableColor,
        padding: 12,
        textAlign: 'center',
        color: color.disableColor,
        fontSize: size.primarySize,
        borderWidth: 0.8, 
    }
     
    for(let el in obj3) {
        external[el] = obj3[el]
    } 
    
}
export default {
    color, size , external, custom
}