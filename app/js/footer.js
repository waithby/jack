define(['jquery','template'],function($,template){
  var  Footer = function (){
    var self = this;
  };
  Footer .prototype.init = function(){
    console.log(111)
    $('body').append('<div id="footer" class="footer"/>');
    $('#footer').append( this.template.upNav() );
    // $.ajax({
    //   type:'get',
    //   url:"",
    //   sussess
    // })
  },
  Footer.prototype.template={
    upNav : template.compile('   <div class="ft">\
    <h5><a href="#"><img src="../../img/logo1.jpg" alt=""></a></h5>\
    <ul class="clear">\
      <li><a href="#">毛呢皮衣</a></li>\
      <li><a href="#">棉服外套</a></li>\
      <li><a href="#">羽绒服</a></li>\
      <li><a href="#">牛仔裤</a></li>\
      <li><a href="#">休闲裤</a></li>\
      <li><a href="#">针织衫</a></li>\
      <li><a href="#">衬衫</a></li>\
      <li><a href="#">配饰鞋履</a></li>\
    </ul>\
  </div>\
  <div class="main">\
    <ul class="clear">\
      <li >\
        <i class="i1"></i>\
        <div class="fl">\
          <h5>会员专区</h5>\
          <p><a href="">会员中心</a></p>\
          <p><a href="">会员制度</a></p>\
          <p><a href="">如何使用积分</a></p>\
        </div>\
      </li>\
      <li>\
        <i class="i2"></i>\
        <div class="fl">\
          <h5>配送流程</h5>\
          <p><a href="">配送说明</a></p>\
        </div>\
      </li>\
      <li>\
        <i class="i3"></i>\
        <div class="fl">\
          <h5>关于我们</h5>\
          <p><a href="">JACK ＆ JONES</a></p>\
          <p><a href="">绫致时装</a></p>\
          <p><a href="">工作机会</a></p>\
        </div>\
      </li>\
      <li>\
        <i class="i4"></i>\
        <div class="fl">\
          <h5>帮助中心</h5>\
          <p><a href="#">常见问题</a></p>\
          <p><a href="#">网站声明</a></p>\
          <p><a href="#">联系我们</a></p>\
          <p><a href="#">门店地址</a></p>\
          <p><a href="#">网站地图</a></p>\
        </div>\
      </li>\
      <li>\
        <i class="i5"></i>\
        <div class="fl">\
          <h5>关注我们</h5>\
          <p><span class="p1"></span><a href="#">新浪微博</a></p>\
          <p><span class="p2"></span><a href="#">微信</a></p>\
        </li>\
        <li>\
          <i class="i6"></i>\
          <div class="fl">\
            <h5>安全购物</h5>\
            <p><img src="../../img/l4.jpg" alt=""></p>\
          </div>\
        </li>\
      </ul>\
      <h3>\
        <a href="#"><img src="../../img/l3.jpg" alt=""></a>\
        <a href="#"><img src="../../img/l5.jpg" alt=""></a>\
        <a href="#"><img src="../../img/l2.jpg" alt=""></a>\
      </h3>\
    </div>\
    <div class="fb">\
      <p><img src="../../img/b3.jpg" alt=""></p>\
      <p>© 2013 Bestseller. All Rights Reserved 津ICP备12007886号 - 1</p>\
      <p>绫致时装（天津）有限公司</p>\
    </div> ')
  }
  return Footer;
})
