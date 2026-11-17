    //ES6模块：一个js文件就是一个模块
    //模块里定义的变量/函数，必须使用export导出
    //在别的模块用import导入才能使用

    //1 命名导出
    export let var1 = 123
    export let var2 = 'abc'
    export function fn1(){
    console.log('函数1.。。。。')
    }

    let var3 = 456
    function fn2(){
    console.log('函数2.。。。')
    }

    //2 集中导出
    export {var3, fn2}

    let name = 'hbxy'

    //3 重命名导出
    export {name as sName}

    //4 默认导出：export default
    //使用import导入默认导出的变量/函数
    export default function fn3(){
    console.log('函数3.。。。')
    }





