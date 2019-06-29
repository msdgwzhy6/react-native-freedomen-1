# Region 

​	核心组件

# 使用

```js

import Freedomen from 'react-native-freedomen'

render() {
    return(
      <Freedomen.Region    
          data={this.state.data}
          event={(params) => {}}
          style={{}}
          columns={[]} 
      /> 
   )
}
```

# 参数

|  名称   | 是否必须 | 类型     | 描述                                                         |
| :-----: | :------: | -------- | :----------------------------------------------------------- |
| boolean |   none   |          | 元素的集合                                                   |
|  data   |    否    | object   | 对columns中元素对应的prop属性进行数据的填充                  |
|  event  |    否    | function | 元素触发事件的回调 (params)=>{},params固定结构{prop: '', value: '', row:{}, type: '' }; 可以返回{},来更新Region内数据 |
|  style  |    否    | object   | 样式属性{},纯object对象,不可以使用StyleSheet创建的对象       |
|  redux  |    否    | string   | 将此Region列入状态管理队列                                   |

# columns 用法

​	columns 接收元素数据的集合

```js
render() {
    return (
        <Freedomen.Region  
            columns={[
                [
                    {type: 'image', value: require('./assets/header.png'), style: {width: 38, height: 38, borderRadius: 38, marginRight: 12}},
                    [
                        {type: 'text-h4', value: '张三'},
                        {type: 'text', value: '2018-09-06'}
                    ],
                	{type: 'br', style: {flexDirection: 'row', alignItems: 'center'}}
    			],
                {type: 'text-h5', value: '你好，世界！', style: {padding: 10}},
                {type: 'br', style: {padding: 15, backgroundColor: '#f5f5f5'}}
        	]}
    	/> 
	);
}
```



# data 用法

​	data会将对应的prop属性的元素添加value

```js
constructor(props) {
      super(props)
      this.state = {
        	data: {text: '对prop为text的column进行赋值, 一秒后将会重新改变'}
      }
}
componentDidMount() {
    setTimeout(() => {
        this.setState({data: {
            text: '已经改变'
        }})
    }, 1000);
}
render() {
	return (
    	<Freedomen.Region  
        	data={this.state.data}
			columns={[
         		{type: 'text',  prop: 'text'} 
         	]}
		/> 
	);
}
```

# event使用

```js
//demo1
<Freedomen.Region  
    event={params => {
        if (params.prop == 'login') {
             //login(params.row)
        }
    }}
    columns={[
      {type: 'input-text', prop: 'input', placeholder: '请输入用户名'},
      {type: 'input-password', prop: 'password',  placeholder: '请输入密码'},
      {type: 'button-primary', value: '登录', prop: 'login', style: {margin: 5}}
    ]}
/> 
//demo2 更新Region内dom数据
<Freedomen.Region  
     event={params => {
      	if (params.prop == 'submit') 
            return {
              name: '张三',
              sex: '男'
            }
      	else if (params.prop == 'reset') 
        	return {name: ''}
    }}
    columns={[
        {type: 'text-h3', prop: 'name', value: '--', filter: value =>　`姓名：${value}`},
        {type: 'text-h3', prop: 'sex', value: '--', filter: value =>　`姓别：${value}`},
        {type: 'button-cancel', value: '清除姓名', prop: 'reset'},
        {type: 'button-primary', value: '更新域内数据', prop: 'submit'},
    ]}
/>

```

# redux使用

```js
//个人信息页面
<Freedomen.Region 
	redux={'user'}
	columns={[
		{type: 'image', prop:'userIconUrl', value: require('../assets/image_header.png'), style: {width: 62, height: 62, borderRadius: 62}},
		[
            {type: 'text-h3', prop: 'userName', value: '未知'},
            {type: 'text', prop: 'workName', value: 'IT'},
            {type: 'br', style: {marginLeft: 12, flex: 1}}
        ],
    ]}
/>
        
//登录页面
login(params) {
     setTimeout(() => {
         Freedomen.redux({
             user: {
                 userIconUrl: '',
                 userName: '张三',
                 workName: '搬运工'
             }
         })
     }, 200)
}
```

