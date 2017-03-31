define(['jquery','template'],function($,template){
  var  Float = function (){
    var self = this;
  };
  Float .prototype.init = function(){
    console.log(111)
    $('body').append('<div id="float" class="float"/>');
    $('#float').append( this.template.upNav() );
    $('#float').append( this.template.upBanner() );

    this.bind();


  };
  Float .prototype.bind = function(){
        $(function(){
           $('#hfclose').click(function(){
          $('#homFix').css('display','none');
         })
        })



  }
  Float.prototype.template={
    upNav : template.compile('   <div id="homFix">\
  <div class="hf">\
    <div class="hfimg">人物图片</div>\
    <div class="hfimg2"><img src="../../img/deswe45.jpg" alt=""></div>\
    <div class="hfr">\
     <div id="show" class="clear">\
       <a href="http://10.3.135.25/1611/tw/app/res/" class="fixBtn" id="reg">即刻注册</a>\
       <label>OR</label>\
       <a href="http://10.3.135.25/1611/tw/app/login/" class="fixBtn" id="login">立即登录</a>\
     </div>\
     <div id="search">\
      <input type="text" name="email" id="email" placeholder="输入电子邮箱，了解最新的时尚资讯" >\
      <input type="button" id="dy" class="hfbtn" value="订阅">\
    </div>\
  </div>\
  <div id="hfclose">关闭</div>\
</div>\
</div> '),
upBanner : template.compile('<div class="Fix">\
  <div id="test">\
    <div id="code">\
      <a href="http://10.3.135.25/1611/tw/app/shopcart/">购物车</a>\
    </div>\
    <div id="shopCart">\
      <input type="hidden" value="0" id="order">\
    </div>\
  </div>\
  <div id="online">\
    <a href="#">客服在线</a>\
  </div>\
  <div id="menCenter">\
    <a href="#">会员中心</a>\
  </div>\
  <div id="goTop">\
    <a href="#top">返回顶部</a>\
  </div>\
</div>')
  }
  return Float;
})
