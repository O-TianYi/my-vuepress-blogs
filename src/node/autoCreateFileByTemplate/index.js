/**
 * 自动生成组件一系列相关文件
 * 目标：键入node index1.js [组件名称]---然后可以在packages文件夹下：组件名称.js以及在target文件夹输出：组件名称.js
 */

 const uppercamelcase = require('uppercamelcase');
 const path = require('path')
 const fs = require('fs')
 const render = require('json-templater/string')//需要安装json-templater
 
 const componentName = process.argv[2]//获取键入的参数，即输入的组件名称。process的argv第一个为node.js的绝对路径，第二个为当前执行文件的绝对路径，后面就是键入的参数
 const ComponentName = uppercamelcase(componentName)
 
 
 //输出文件的数组
 const outputFiles = [
     {
         filepath: path.join(__dirname, './packages', `${componentName}.d.js`),
         compoment: `important xxx from 'xxx'
 
             /* ${ComponentName} 组件文件  */
             function xxx(){
                 console.log('${ComponentName}')
             }
         `
     },
     {
         filepath: path.join(__dirname, './target', `${componentName}.js`),
         //也可以使用文件读取的方式来读取模板
         // compoment: fs.readFileSync(path.resolve(__dirname,'./tempalte.js'),'utf8')
         compoment: render(fs.readFileSync(path.resolve(__dirname,'./tempalte.js'),'utf8'),{ value: ComponentName })
     },
 ]
 
 
 
 /* 定义一个文件输出方法(方法1)
 */
 const fileSave = require('file-save');
 
 function outPutFile(outputFileObj){
     //参数为生成文件的绝对路径，write参数为写入文件的内容
     fileSave(outputFileObj.filepath)
         .write(outputFileObj.compoment, 'utf8')
         .end('\n')//多一行换行区别而已
 }
 
//  //原生方法-----需要使用自己使用fs.mkdir()先创建对应文件夹否则报错
//  function outPutFile(outputFileObj){
//      fs.writeFileSync(outputFileObj.filepath,outputFileObj.compoment)//带sync为同步操作，三参数可以指定编码格式，读写权限等
//  }
 
 
 //遍历输出
 outputFiles.forEach( item => {
     outPutFile(item)
 })
 
 
