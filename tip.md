## 事件处理
addEventListener()  
removeEventListener()  
event.preventDefault()  
事件冒泡(从外向内，true)和捕获（从内向外，false）  
e.target  
e.stopPropagation()  
### 定时器
setTimeout() 执行一次  
clearTimeout()  
setInterval() 重复执行  
clearInterval()  

## 面向对象
#### OOP :
面向对象（函数）  
构造函数（传参） -- js里只能有一个构造函数！  
this  
...参数  
匿名函数  
prototype扩展 + 原型继承（.prototype）  
封装 - this把变量和函数 “注册” 为属性和方法，否则为私有的？  

### 新 - 语法糖：syntactic sugar
构造函数constructor  
getter and setter  
symbol数据类型  
对象继承 - extends and super   --- java  

```javascript
function objectType(){
    this.infor = 'this is object';
    this.showInfor = function (){
        console.log(this.infor);
    }
    this.setInfor = function (msg){
        this.infor = msg;
    }
}
let newO = new objectType();
console.log(newO.infor);
newO.showInfor();
objectType.prototype.sayHello = function (){
    console.log("Hello");
}
newO.sayHello();


class Pet{
    constructor(animal,name) {
        this.animal = animal;
        this.name = name;
    }
    print(msg){
        console.log("this " + this.animal +"'s name is " + this.name);
    }
}
let pet = new Pet("cat","xiao huang");
pet.print();
```

## DOM：
**windows -> document**  
节点 -》  
#### nodeType:  
1 元素节点 - 2 属性节点 - 3 文本节点-....  
#### childNodes(是一个NodeList，数组)
firstChild  
lastChild  
parentChild  
兄弟节点（不存在就为null）  
nextSibling  
previousSibling  
hasChildNodes()  
#### nodeValue
#### nodeName
### 获取DOM：
document.getElementById()  
document.getElementsByTagName() 有s - 数组  
document.getElementsByClassName()  
getAttribute()读取属性值   /  attribute属性（数组）也可以访问，但是可能Firefox会有错误。  
### 创建节点： (增加在DOM内，而不是源代码里)
document.createElement("div");  
document.createTextNode(“文本内容”)  
document.cloneNode() true or false - 即子节点复不复制  
### 加入节点：
（innerHTML不是W3C标准）  
appendChild() 添加到子节点列表的末尾  
insertBefore() 确定插入位置   
replaceChild() 替换子节点  
removeChild() 删除节点  
setAttribute() 编辑元素属性  
#### 加载顺序
- windows.load
    页面 完成加载时触发
- onload事件
    外部资源 完成下载并可以使用时触发
- appendChild()
    文件 加载完成之后
  
### DOM Core and HTML DOM
- DOM Core 核心部分，可移植，标准的写法 如:
    ```javascript
      dom.setAttribute("href","#item"+i)
    ```
- HTML DOM 更多只适用于HTML，写法更简便 如： 
    ```javascript
    dom.href = "#item"+i
    ```
