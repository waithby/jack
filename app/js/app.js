
// require 第一个参数 数组  元素为加载模块的地址
//第二个参数 回调函数  为模块加载完毕以后的处理
// require(['js/slide/slide.js'],function(slide){
//     console.log(slide);

// 对模块化加载进行基本设置
requirejs.config({
  baseUrl:"../",
    //设置依赖
    shim:{
      'common_jquery':['jquery']
    },

    //加载路径  和加载对象   //省略后缀
    paths:{
      'jquery':"lib/jquery",
      'common_jquery':"lib/common_jquery",
      'template':'lib/template-debug',
      'index':"js/index",
      'page':'js/page',
      'test':'js/test',
      'header':'js/header',
      'footer':'js/footer',
      'float':'js/float',
      'adver':'js/adver',
      'main':'js/main',
      'content':'js/content',
      'login':'js/login',
      'res':'js/res',
      'shopcart':'js/shopcart'

        // 'top':'js/top'
      }

    //加载新的模块
  })


//require 属于按需加载

require(["jquery",'adver','main','content','index','login','res','shopcart'],function($,Adver,Main,Content,index,Login,Res,Shopcart){

     // var main=new Main();
    //  main.init();
     //  var adver=new Adver();
     // adver.init();


     // var content=new Content();
     // content.init();

    // var test = new Test();
     var path = location.pathname; //进行路由设置

     console.log(path);
     if(path=="/1611/tw/app/index/"){
      var adver = new Adver();
      adver.init()
    }else if(path=="/1611/tw/app/main/"){
      var main = new Main();
      main.init()
    }else if(path=="/1611/tw/app/content/"){
      var content = new Content();
      content.init()
      var search = location.search;
      console.log(search);
    }else if(path=="/1611/tw/app/login/"){
      var login = new Login();
      login.init()

    }else if(path=="/1611/tw/app/res/"){
      var res = new Res();
      res.init()

    }else if(path=="/1611/tw/app/shopcart/"){
      // index.init();
      var shopcart = new Shopcart();
      shopcart.init()
    }
    else{
      var adver = new Adver();
      adver.init()
    }
    //如果想要添加新的页面

    //1 建一个文件夹 放入index.html
    //2 建一个新的模块 在模块里面对页面进行设置
    //3 在入口js 设置访问路由
  })



//mvc m =model v = view 页面视图  c=control 控制器
