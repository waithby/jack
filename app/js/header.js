define(['jquery','template'],function($,template){
  var  Header = function (){
    var self = this;
  };

 Header.prototype.init = function(){
    console.log(111)
    $('body').append('<div id="top" class="header"/>');
    $('#top').append( this.template.upNav() );
    $('#top').append( this.template.upBanner() );



  },
 Header.prototype.template={
    upNav : template.compile('\
      <div class="top clear">\
      <div class="tl">\
      <p>您的位置：中国&nbsp; &nbsp; / &nbsp;&nbsp; RMB </p>\
      <em></em><i></i>\
      </div>\
      <div class="logo">\
      <h1><a href="#"><img src="../../img/logo.jpg" alt=""></a></h1>\
      </div>\
      <div class="tr">\
      <ul>\
      <li><a href="http://10.3.135.25/1611/tw/app/login/"><span>登录/</span></a><a href="http://10.3.135.25/1611/tw/app/res/"><span>注册</span></a></li>\
      <li><a href="http://10.3.135.25/1611/tw/app/shopcart/">购物车&nbsp;&nbsp;<span class="shopNum">0</span></a></li>\
      <li><input type="text" name="search" placeholder ="搜索"><em></em></li>\
      </ul>\
      </div>\
      </div>'
      ),
upBanner : template.compile('\
<div class="bottom">\
     <ul class="clear">\
       <li class="mt"><a href="http://10.3.135.25/1611/tw/app/index/">首页</a></li>\
       <li class="mt"><a href="#">全场包邮</a>\
        <div class="menu">\
          <ul>\
            <li class="menut">\
              <a href="#">春夏新品</a>\
              <ul>\
                <li><a href="#">新品棉服</a></li>\
                <li><a href="#">新品毛衣</a></li>\
                <li><a href="#">新品外套</a></li>\
                <li><a href="#">新品针织衫</a></li>\
                <li><a href="#">新品卫衣</a></li>\
                <li><a href="#">新品休闲裤</a></li>\
                <li><a href="#">新品牛仔裤</a></li>\
                <li><a href="#">新品衬衫</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">保暖外套</a>\
              <ul>\
                <li><a href="#">秋冬羽绒服</a></li>\
                <li><a href="#">秋冬毛呢</a></li>\
                <li><a href="#">秋冬皮衣</a></li>\
                <li><a href="#">秋冬棉服</a></li>\
                <li><a href="#">秋冬西服</a></li>\
                <li><a href="#">新品外套</a></li>\
                <li><a href="#">新品棉服</a></li>\
                <li><a href="#">新品皮衣</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">夹克外套</a>\
              <ul>\
                <li><a href="#">PU夹克</a></li>\
                <li><a href="#">防风夹克</a></li>\
                <li><a href="#">BOMBER夹克</a></li>\
                <li><a href="#">TRUCKER夹克</a></li>\
                <li><a href="#">新品外套</a></li>\
                <li><a href="#">新品西服</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">内搭上装</a>\
              <ul>\
                <li><a href="#">纯色针织衫</a></li>\
                <li><a href="#">织花针织衫</a></li>\
                <li><a href="#">拼接针织衫</a></li>\
                <li><a href="#">印花针织衫</a></li>\
                <li><a href="#">纯色衬衫</a></li>\
                <li><a href="#">格条纹衬衫</a></li>\
                <li><a href="#">秋季卫衣</a></li>\
                <li><a href="#">新品针织衫</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">酷感牛子裤</a>\
              <ul>\
                <li><a href="#">秋冬牛仔裤</a></li>\
                <li><a href="#">纯棉牛仔裤</a></li>\
                <li><a href="#">高弹力牛仔裤</a></li>\
                <li><a href="#">韩莱卡牛仔裤</a></li>\
                <li><a href="#">新品牛仔裤</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">简约休闲裤</a>\
              <ul>\
                <li><a href="#">含羊毛休闲裤</a></li>\
                <li><a href="#">含莱卡休闲裤</a></li>\
                <li><a href="#">运动卫裤</a></li>\
                <li><a href="#">纯棉休闲裤</a></li>\
                <li><a href="#">新品休闲裤</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">时尚配饰</a>\
              <ul>\
                <li><a href="#">男士腰带</a></li>\
                <li><a href="#">男士鞋履</a></li>\
                <li><a href="#">男子袜子</a></li>\
                <li><a href="#">男士内裤</a></li>\
                <li><a href="#">帽子背包</a></li>\
                <li><a href="#"> 手套围巾</a></li>\
                <li><a href="#">领带领结</a></li>\
                <li><a href="#">新品配饰</a></li>\
              </ul>\
            </li>\
            <li class="menut"><a href="#">产品系列</a>\
              <ul>\
                <li><a href="#">CORE系列</a></li>\
                <li><a href="#">STUDIO系列</a></li>\
                <li><a href="#">ORIGINAL系列</a></li>\
                <li><a href="#">ESSENTLAL系列</a></li>\
              </ul>\
            </li>\
          </ul>\
        </div>\
      </li>\
      <li class="mt"><a href="#">五折专区</a>\
        <div class="menu1">\
          <ul>\
            <li class="m5"><a href="#">百款热卖精选</a></li>\
            <li class="m5"><a href="#">五折羽绒服</a></li>\
            <li class="m5"><a href="#">五折毛呢皮衣</a></li>\
            <li class="m5"><a href="#">五折棉服外套</a></li>\
            <li class="m5"><a href="#">五折针织衫</a></li>\
            <li class="m5"><a href="#">五折牛仔裤</a></li>\
          </ul>\
        </div>\
      </li>\
      <li class="mt"><a href="#">潮流推荐</a>\
        <div class="menu1">\
          <ul>\
            <li class="m5"><a href="#">全国店铺热销</a></li>\
            <li class="m5"><a href="#">足球俱乐部授权系列</a></li>\
            <li class="m5"><a href="#">秋冬运动款精选</a></li>\
          </ul>\
        </div>\
      </li>\
      <li class="mt"><a href="#">春装到店</a>\
        <div class="menu1">\
          <ul>\
            <li class="m5"><a href="#">02月21日上新</a></li>\
            <li class="m5"><a href="#">02月17日上新</a></li>\
            <li class="m5"><a href="#">02月14日上新</a></li>\
            <li class="m5"><a href="#">02月10日上新</a></li>\
            <li class="m5"><a href="#">02月07日上新</a></li>\
            <li class="m5"><a href="#">02月03日上新</a></li>\
            <li class="m5"><a href="#">1月全部新品</a></li>\
            <li class="m5"><a href="#">2017春夏新品</a></li>\
          </ul>\
        </div>\
      </li>\
      <li class="mt"><a href="#">时尚专辑</a>\
        <div class="menu1">\
          <ul>\
            <li class="m5"><a href="#">飞行员夹克专辑</a></li>\
            <li class="m5"><a href="#">全新足球授权系列</a></li>\
            <li class="m5"><a href="#">02月14日上新</a></li>\
            <li class="m5"><a href="#">摩登灵感现代绅士</a></li>\
            <li class="m5"><a href="#">新春运动潮品来袭</a></li>\
            <li class="m5"><a href="#">冬日硬朗东吕风</a></li>\
            <li class="m5"><a href="#">经典升级 长款 bomber</a></li>\
            <li class="m5"><a href="#">卡车司机牛子夹克</a></li>\
          </ul>\
        </div>\
      </li>\
      <li class="mt"><a href="#">杂志精选</a></li>\
      <li class="mt"><a id="hy" href="#">会员中心</a></li>\
    </ul>\
  </div>'),
}
  return Header;
})
