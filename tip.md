## 事件处理
addEventListener()  
removeEventListener()  
event.preventDefault()  
事件冒泡(从外向内，true)和捕获（从内向外，false） - addEventListener()第三个参数    
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

## json
json  -  JavaScript对象标签  
json -- python字典？  
json -> javascript代码：去序列化 

- eval()  -  加上( )，避免含义不明确的语句
- 浏览器支持
    * JSON.parse()
        + 将字符串转化为JSON对象
    * JSON.stringify()
        + 从一个JavaScript对象创建一个JSON编码的对象

键值对、数组、对象、方法（仅在js内）  
多层次对象

## **canvas**
canvas 2D API  
默认画布大小为300x150  
渲染环境 - 画  

## **元素拖放**
- dragstart
- drag
- dragenter
- dragleave
- dragover
- drop
- dragend
## 操作本地文件
- File
- FileList
- FileReader

## DOM操作css

## cookie
web存储 - cookie  
escape()编码 unescape()解码   
RFC6265标准
- domain
- path
- secure
- expires

## 正则表达式（regular expression,regex）

用 / / 声明正则表达式，要匹配的字符在 / / 之中。

```javascript
var regex = /a/i;
if(dom.value.search(regex) == -1){
    alert('not found');
}
```
### //后面可以跟着修饰符，控制查找方式
|修饰符(标志)|说明|
|---|---|
|i|不区分大小写|
|g|全局匹配|
|m|多行匹配|

### []可以控制查找方式
|表达式|搜索范围|
|---|---|
|[abc]|a、b、c之中的任意字符（无个数限制）|
|[^abc]|除a、b、c之外的任意字符|
|[0-9]|0-9数字中的任意数字|
|[^0-9]|除0-9数字之外|
|(a&#124;b)|选择a或者b|

### 处理特殊字符的快捷方式：元字符（metacharacter）  

|元字符|描述|
|---|---|
|.|单个字符，除了换行符|
|_|0个或多个字符|
|\d|一个数字字符|
|\D|一个非数字字符|
|\w|一个单词字符,等同于[a-zA-Z0-9_]|
|\W|一个非单词字符|
|\s|一个空白字符|
|\S|一个非空白字符|
|\b|在一个单词的开头或结尾的一个匹配|
|\B|不在一个单词的开头或结尾的一个匹配|
|\0|一个空字符|
|\n|换行字符|
|\f|一个换页字符|
|\r|一个回车字符|
|\t|一个制表符|
|\v|一个垂直制表符|
|\xxx|八进制数xxx所指字符|
|\xdd|十六进制数dd所指字符|
|\uxxxx|十六进制数xxxx所指Unicode字符|

### 限定符
|限定符|匹配|
|---|---|
|n+|至少包含一个n的任意字符串|
|n*|包含n的0次或多次出现的任何字符串|
|n?|包含n的0次或1次出现的任何字符串|
|n{X}|包含X个n的序列的字符串|
|n{X,Y}|包含X到Y个n的序列的字符串|
|n{X,}|至少包含X个n的序列的字符串|
|n$|以n结尾|
|^n|以n开头|
|?=n|后面跟着一个字符串n|
|?!n|后面没有跟着一个字符串n|

### RegExp对象
new RegExp()  
test()方法  
exec()方法

### 字符串方法使用regexp
match\search\replace\split  

## **闭包**
闭包是访问父作用域的一个函数，即便是在该作用域已经结束之后，也可以执行。  
使用闭包实现数据私有性。  

例子：
```javascript
let x = 'apple';
var f1 = function (){
    console.log(x);
    x = 'pear';
}
x = 'banana';
var f2 = function (){
    console.log(x);
}
f1();
f2();
```
out:
```bash
banana
pear
```

