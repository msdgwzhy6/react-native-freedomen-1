# 简介

 * react-native-freedomen 是能够大副度提升你的开发效率的框架

 * 它能够实现只渲染必要的dom渲染，而不必你去计算，大幅提升流畅度

 * 它不需要外接redux 就可以组件相互通信

 * 它不需要你重复的定义变量（state里定义一次，rend里又定义一次,....)

 * 它可以将组件数据化，甚至是你数据库里的一条数据都可以是一款组件，数据化后变减掉组件文件，组件之间传递数据问题

 * 组件数据化，没有多个组件传参问题，统一结构的写法，大幅提高可维护性，扩展性

 * 轻松组装组件

 * ...

   

# 安装

```python

npm i react-native-freedomen

	或
	
yarn add react-native-freedomen

```

# 引用

```js

import Freedomen from 'react-native-freedomen'

```

# 自定义主题

```js

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json'; 

import Freedomen from 'react-native-freedomen'

Freedomen.custom({ //色彩
    primaryColor: '#409EFF',  //主色 
    optionColor: '#191919', //有options 属性的label颜色
    placeholder: '#999' //有placeholder 的颜色
},{//大小
    primarySize: 16, //主字体大小
    itemSpace: 15, //options 间距
    largeHeight: 42, 
    normalHeight: 35, //正常尺寸的高度
    smallHeight: 30
},{//自定义样式
    'text-badge': {...}, //使用 {type: 'text-badge'}
    'button-login': {...}, //使用 {type: 'button-login'}
    'button-image-icon': {...}
    ...
})

AppRegistry.registerComponent(appName, () => App);
```



# DEMO

##  demo1. 只渲染有必要的Dom	

你可以把成吨的元素放到Region里面，然后使用setState来更新render 函数， Region也可以保证只渲染需要的dom, 就如下列,slider就是处罚频率极高的组件，在高频率的事件中调用setState 仍然可以非常流畅的执行，因为只更新需要更新的dom.所以你可以***放心的放入成吨的dom后，高频率的使用setState方法***, 也仍然可以保证流畅性

```js

render() {  
    return ( 
        <ScrollView>  
        	<Freedomen.Region 
                style={{padding: 10}}
            	event={params => {  
                   if (params.prop == 'slider') {
                       let row = params.row
                       row.slit = parseInt(params.value * 100) + '%'
                       return row //或者 this.setState({data: row})
                   } 
        		}} 
                columns={[   
                      {type: 'slider', value: .2, prop: 'slider', style: {padding: 5}},
                      {type: 'text', value: '2%', prop: 'slit'},
                      {type: 'progress', value: .9, prop: 'progress',  style: {width: 420, padding: 5}},
                      {type: 'pickdate', placeholder: '请选择时间', prop: 'pickdate', style: {padding: 5}},
                      [
                          {type: 'checkbox', prop: 'checkbox', value: false,  style: {padding: 5} },
                          {type: 'radio', prop: 'radio', value: false,  style: {borderRadius: 40, padding: 5} },
                          {type: 'text-badge', value: 8, prop: 'badge1'}, 
                          {type: 'text-badge', value: 1, filter: value => {return value> 99 ? '99+': value}, prop: 'badge2'}, 
                          {type: 'switch', value: false, prop: 'switch'},
                          {type: 'text', value: '标签', prop: 'biaoqian', style: {padding: 2, color: '#FF4949', borderColor: '#FF4949', borderWidth: 1}},
                          {type: 'button-text', value: '按钮', style: { margin: 5, padding: 10, paddingLR: 15, backgroundColor: '#13CE66', color: 'white'}},
                          {type: 'button-text', value: '按钮', style: { margin: 5, padding: 5, borderRadius: 12, paddingLR: 10, backgroundColor: '#F7BA2A', color: 'white'}},
                          {type: 'button-image', value: require('./assets/img_button.png'), style: {width: 40, height: 40}},
                          {type: 'br', style: {flexDirection: 'row', alignItems: 'center'}}
                      ],
                      {type: 'select', options: '吃,喝,玩,乐', placeholder: '请选择', prop: 'select', style: {padding: 5}},
                      {type: 'tags',value:'玩', options: '吃,喝,玩,乐', prop: 'tags1', style: {padding: 5}},
                      {type: 'tags', value:'乐什么', options: '吃什么,喝什么,玩什么,乐什么', size: 2, prop: 'tags2', style: { padding: 5, borderRadius: 0}},
                      {type: 'counter', value: 1, max: 50, min: 1, prop: 'counter', style: {padding: 5}},
                      {type: 'radios', options: "男生1, 女生3", prop: 'radios1', style: {padding: 5}}, 
                      {type: 'radios', options: "男生1, 女生3", prop: 'radios2', style: {padding: 5, borderRadius: 40}}, 
                      {type: 'checkboxs',   options: "男生, 女生,未定", prop: 'checkboxs', style: {margin: 5, alignItems: 'center'}}, 
                      {type: 'input-text', prop: 'input', maxLength: 12, placeholder: '请输入用户名', style: {borderColor: '#ccc', borderWidth: 1, padding: 20, margin: 5}},
                      {type: 'input-password', prop: 'password', maxLength: 12,   placeholder: '请输入密码', style: {borderColor: '#ccc', borderWidth: 1, padding: 10, margin: 5}},
                      {type: 'rate', prop: 'rate',  value: 1 , style: {padding: 5}},  
                      {type: 'button-cancel', value: 'SlidePop', prop: 'slidPop',style: { margin: 5}},
                      {type: 'button-primary', value: '填充', prop: 'submit',style: { margin: 5}},
                      {type: 'br', style: {padding: 10}}
                ]}
            />
         </ScrollView>
      	)
    }
```



## demo2. 组件相互通信

​	如下例，两个页面，页面1 定义了一个badge, 然后将此区域通过添加 redux 属性将其放入全局状态管理， 全局状态管理会将此区域的数据取出为***'bar_gouwuche': {count: 0}*** 放入状态管理表，而页面2定义一个按钮，每次点击会将页面1中的badge的值加 1

```js
//页面1
render() {  
    return (
        <Freedomen.Region 
        	columns={[ {type: 'text-badge', prop: 'count', value: 0,  filter: value =>  value > 99 ? '99+' : value, load: (value) => value > 0 }]}
            redux={'bar_gouwuche'}
		/>  
	)
}

//页面2
render() {  
    return (
        <Freedomen.Region 
            event={params => {
                if (params.prop == 'add') {
                    Freedomen.redux({
                        bar_gouwuche: (oldData) => {
                            oldData.count ++
                            return oldData
                        }
                    })
                }
            }}
        	columns={[{type: 'button-primary', prop: 'add']}
		/>  
	)
}
```



## demo3. 不需要重复定义变量

​	定义了和数据库对应的prop,  获取数据后便可以直接更新Region

```js
constructor(props) {
    super(props)
    this.state = { 
        user: {}
    }
}
componentDidMount() {
    setTimeout(() => {
        this.setState({
            data: {
                userIconUrl: 'http://pic40.nipic.com/20140331/9469669_142840860000_2.jpg'，
                userName： '张三',
                workName: '搬运工'
            }
        })
	}, 400);
}
render() {  
    return (
        <Freedomen.Region 
        	data={this.state.user}
        	columns={[
                {type: 'image', prop:'userIconUrl', value: require('../assets/image_header.png'), style: {width: 62, height: 62, borderRadius: 62}},
                [
                    {type: 'text-h3', prop: 'userName', value: '未知'},
                    {type: 'text', prop: 'workName', value: 'IT'},
                    {type: 'br', style: {marginLeft: 12, flex: 1}}
                ],
            ]}
		/>  
	)
}

```



## demo4.组件数据化

​	将相同结构的数据化抽出

```js

//columns.js
export default {
    listItem: [
        {type: 'image-product', prop: 'productImage'},
        [
            {type: 'text-h2', prop: 'productTitle'},
            {type: 'text', prop: 'productDescription' }
        ],
        {type: 'br-row', prop: 'detail'}
    ]
}


//页面
import columns from './columns.js'
render() {  
    return (
        <Freedomen.Region  
            event={params => {
                if (params.prop == 'detail') {
                    //do something
                }
            }}
        	columns={columns.listItem}
		/>  
	)
}
```



## demo5. 组件数据传递

​	下面的例子select选择 '消失Text' ,text 将会隐藏, Region内的每个元素都可以拿到全部的数据如style: (value, data) => {},  filter:(value, data) => {}, load: (value, data) => {}等，data即为全局数据

```js
render() {  
    return (
        <Freedomen.Region  
            event={params => {
                if (params.prop == 'detail') {
                    //do something
                }
            }}
            columns={[
                 {type: 'select', options: '开启Text,消失Text', prop: 'select'},
                 {type: 'text', value: 'Text', load: (value, data) => data.select == '开启Text'}
            ]}
		/>  
	)
}

```



## demo6. 组装组件

​	组装 一个搜索框

```js

render() {  
    return (
        <Freedomen.Region  
        	event={params => {
                if (params.prop == 'cancel')
                     return {productName: ''}
                else if (params.prop == 'productName') {
					//search(params.value)
                }
            }}  
            columns={[
                {type: 'image-icon', value: require('./assets/search.png')},
                {type: 'input-text', prop: 'productName', placeholder: '请输入要搜索的商品', style: {flex: 1}},
                {type: 'button-image-icon', prop: 'cancel',  value: require('./assets/cancel.png'), load: (value, data) => data.productName},
                {type: 'br', style: {backgroundColor: '#f1f1f1', borderRadius: 10, flexDirection: 'row', alignItems: 'center'}}
            ]}
		/>  
	)
}

```



# 文档地址

[documents](http://115.159.65.195:8080/freedomen)

# 稳定版本
	0.2.4