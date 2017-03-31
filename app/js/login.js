define(['jquery','template','header','footer'],function($,template,Header,Footer){
  var  Login = function (){
    var self = this;
  };
  Login.prototype.init = function(){
   var top=new Header();
   top.init();
   $('body').append('<div id="login" class="login"/>');
   $('#login').append( this.template.upLogin() );
   var footer=new Footer();
   footer.init();
   this.bind();
 };
 Login.prototype.bind = function(){
  // 验证码
  $('#idcode1').click(function(){
   var str = '0123456789abcdefghklmqszABCDEFGJLOQSTVWYZ';
   var str1 = '';
   for (i = 0; i < 4; i++) {
    var a = parseInt(Math.random() * str.length);
    str1 += str[a];
  }
  $('#idcode1').html(str1);
})

   // 手机号码验证
   $('#username').blur(function(){
    var phoneNum=$(this).val();
    var reg=/^1(3|4|5|7|8)\w{9}$/;
    if(reg.test(phoneNum)){
      $('#username').parent().find('span').html('√');
    }else{

      $('#username').parent().find('span').html('输入的号码不对');
    }
  })

   $('#denglu').click(function(){
    console.log(111);
    var str=getCookie('users');
    if(str){
     var aUser= JSON.parse(str);
     for(var i=0;i<aUser.length;i++){
      if(aUser[i].name ==  $('#username').val() && $("#yanzheng").val()==$('#idcode1').html()){
        if(aUser[i].psw==$('#psw').val()){
         alert('登录成功');
         window.location.href='http://10.3.135.25/1611/tw/app/index/';
       }else{
        alert('密码错误');
      }
    }else{
      alert('验证码输入错误')
    }
  }

  }else{
    alert('该用户不存在');




}
})

 }
 Login.prototype.template={
  upLogin : template.compile('<div class="wrapper">\
    <div class="group">首页&nbsp;&nbsp;/&nbsp;&nbsp;登录</div>\
    <div class="l1">\
    <h3>登录</h3>\
    </div>\
    <div class="l2 clear">\
    <div class="lol  ">\
    <h4>会员登录</h4>\
    <div class="form clear">\
    <p><label>账号:</label><input type="text" id="username"><span>请输入手机号</span></p>\
    <p><label></label><input placeholder="输入验证码" type="text" id="yanzheng"><span id="idcode1">点击获取</span></p>\
    <p><label>密码:</label><input type="password" id="psw"><input type="button" value="获取动态密码" class="btn1" id="huoqu"></p>\
    <h5>如果您不是会员，也可以使用动态密码,快速注册成为会员若您已是注册会员，<a href="http://10.3.135.25/1611/tw/app/login/res">点击使用已有密码登录</a>\
    </h5>\
    <p><input type="button" class="btn2" id="denglu" value="登录"></p>\
    <h5>如果您是SELECTED，ONLY或 VERO MODA会员，可直接输入账号登录。</h5>\
    </div>\
    </div>\
    <div class="lor">\
    <h3>还不是JACK ＆JONES俱乐部会员？</h3>\
    <p>立刻加入会员，您的每笔消费均可累计积分，尽享时尚便捷的购物体验</p>\
    <a href="http://10.3.135.25/1611/tw/app/res/"><input type="button" value="用户注册" class="btn2" id="zhuche" ></a>\
    </div>\
    </div>\
    </div>\
    ')
}
return Login;
})
