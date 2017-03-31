define(['jquery','template','header','footer'],function($,template,Header,Footer){
  var  Res = function (){
    var self = this;
  };
  Res.prototype.init = function(){
   var top=new Header();
   top.init();
   $('body').append('<div id="res" class="res"/>');
   $('#res').append( this.template.upRes() );
   this.bind();
   var footer=new Footer();
   footer.init();
 };
 Res.prototype.bind = function(){

  var b1,b2,b3,b4,b5,b6,b7;
  // 姓名验证
  $("#name").blur(function(){
    var name =$(this).val();
    var reg  = /^[a-zA-Z_]\w{1,}$/;
    if(reg.test(name)){
      $(this).parent().find('span').html('√');
      $('li').find('span').css('color','red')
      b1 = true;
    }else{
     $(this).parent().find('span').html('姓名输入错误');
     $('li').find('span').css('color','red')
     b1= false;
   }
 })

  // 手机号码验证
  $("#phone").blur(function(){
    var phone =$(this).val();
    var reg = /^1(3|5|7|8)\d{9}$/;
    if(reg.test(phone)){
      $(this).parent().find('span').html('√');
      b2 = true;
    }else{
      $(this).parent().find('span').html("电话号码输入错误");
      b2=false;
    }
  });
// 密码验证
$("#mima").blur(function(){
  var mima =$(this).val();
  var reg = /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{7,12}/;
  if(reg.test(mima)){
    $(this).parent().find('span').html('√');
    b3 = true;
  }else{
    $(this).parent().find('span').html("密码输入错误");
    b3=false;
  }
});
 //密码确认
 $("#queren").blur(function(){
  var queren =$(this).val();
  if($("#mima").val()==queren){
   $(this).parent().find('span').html('√');
   b4 = true;
 }else{
  $(this).parent().find('span').html('请重新输入密码');
  b4=false;
}
});
 // 邮箱验证
 $("#email").blur(function(){
  var email =$(this).val();
  var reg = /^.\w{3,12}(\@.\w{1,}\.com)$/;
  if(reg.test(email)){
   $(this).parent().find('span').html('√');
   b5 = true;
 }else{
  $(this).parent().find('span').html('请重新输入邮箱');
  b5=false;
}
});

 $('#tijiao').click(function(){
  if(b1&&b2&&b3&&b4&&b5){
    if($('#gouxuan').get(0).checked){
      var sCookie = getCookie('users');
      var aUser = sCookie?JSON.parse(sCookie):[];
      var bool = true;
      for(var i =0 ;i<aUser.length;i++){
                //aUser[i]
                if(aUser[i].name == $('#phone').val()){
                  bool = false;
                }
              }
              if(bool){
                //用户没有注册
                //将新用户压进用户数组
                aUser.push({"name":$('#phone').val(),"psw":$('#mima').val()});

                //修改cookie 为最新
                setCookie('users',JSON.stringify(aUser),10,'/');
                alert('注册已成功');
                window.location.href='http://10.3.135.25/1611/tw/app/login/';
              }else{
               alert( "您输入的用户名已注册");
                setTimeout(function(){
                   location.reload();
                },2000)
              }
            }
          }

          else{
            location.reload();
          }

        })


}
Res.prototype.template={
  upRes : template.compile('<div class="r">\
    <div class="rt clear">\
    <p>首页&nbsp;/&nbsp;注册</p>\
    <h3>注册</h3>\
    <div class="tianxie">1 填写注册账户</div>\
    <div class="wancheng">2 注册完成</div>\
    </div>\
    <div class="rb">\
    <div class="rbl">\
    <div class="form">\
    <h4>从这里开启你的会员之旅</h4>\
    <ul>\
    <li><label>姓名*</label><input type="text" id="name" placeholder="请输入你的名字"><span></span></li>\
    <li>\
    <em>性别*</em><input class="sex" type="radio" name="sex" checked>男\
    <input  class="sex" type="radio" name="sex">女\
    </li>\
    <li><label>生日*</label><input type="text" name=""><span></span></li>\
    <li><label>手机号码*</label><input type="text" id="phone" placeholder="如果您已在门店注册，请填写预留手机号"><button id="yzbtn">发送验证码</button><span></span></li>\
    <li><label>验证码*</label><input type="text" name="" placeholder="请正确填写您收到的验证码"><span></span></li>\
    <li><label>Email*</label><input type="text" id="email" placeholder="如果您已在门店注册，请填写预留邮箱"><span></span></li>\
    <li><label>密码*</label><input type="password" id="mima">\
    <p><span>请输入8～12位密码，包含数字和字母</span></p></li>\
    <li><label>再次输入密码*</label><input type="password" id="queren"><span></span></li>\
    <li><input type="submit" id="tijiao"></li>\
    <li> <input type="checkbox" id="gouxuan" checked><strong>我同意注册条款和政策</strong></li>\
    </ul>\
    </div>\
    </div>\
    </div>\
    </div>\
    ')
}
return Res;
})

