define(['jquery','template','header','footer','float'],function($,template,Header,Footer,Float){
  var  Content = function (){
    var self = this;
  };
  var obj;
  Content.prototype.init = function(){
    console.log(111)
    $('body').append('<div id="content" class="content"/>');
    $('#content').append( this.template.upAdver() );
    var top=new Header();
    top.init();
    var float =new Float();
    float.init();
    var footer=new Footer();
    footer.init();
    this.setCookie();
    var self = this;
    this.ajax(function(res){
      console.log(res);
      console.log(typeof res);
      obj = {"data":JSON.parse(res)};
      update(obj);
      self.bind();
    });
    function update(obj){
      console.log(obj);
      for(var i = 0;i<obj.data.length;i++){
        // 大图
        var oDiv=document.createElement('div');
        oDiv.innerHTML='<img src="'+obj.data[i].goodsImg2+'" alt="">';

        $('.bigImg').append( oDiv);



      // 放大镜
      var oDiv=document.createElement('div');
      oDiv.innerHTML='<img src="'+obj.data[i].goodsImg3+'" alt="">';
      $('.fangda').append( oDiv );
      // 商品信息
      $('.intro').find('h3').html(obj.data[i].goodsName);
      $('.intro').find('span').html("￥"+obj.data[i].goodsPrice);

       // 左边图表
       var small=JSON.parse(obj.data[i].goodsImg1);
       for(var j = 0;j<small.length;j++){
        var oLi=document.createElement('li');
        oLi.innerHTML='<img src="'+small[j]+'" alt="">'
        $('#tu').find('ul').append( oLi )



      }
    }
  }



  // this.bind();
};

Content.prototype.GetQueryString=function(name)
{
 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
 var r = window.location.search.substr(1).match(reg);
 if(r!=null)return  unescape(r[2]); return null;
}
Content .prototype.ajax = function(callback){
 var id = this.GetQueryString('id');
 console.log(id);
 $.ajax({
  type:"get",
  url:"http://10.3.135.25/1611/tw/ajax/getgoods.php",
  data:{"id":id},
  success:function(res){
    if(callback){
      callback(res);
    }else{
      console.log(res);
    }
  },
  error:function(){
    console.log(arguments);
  },
  dataType:"jsonp"
})
};



Content.prototype.setCookie=function(){
  var self=this;
  $('#shopcar').click(function(){
    // num.value;
    var num=$('.spinnerExample').val();
    var id=self.GetQueryString('id');
    console.log(id)
    var strCookie = getCookie('user');
    console.log(getCookie('user'))
    var  aUser =strCookie ? JSON.parse(strCookie):[];
    // var bool = true;

    if(strCookie){
      var bool = true;
      for(var i=0;i<aUser.length;i++){
        if(aUser[i].goodsid==id){
          var goodsnum =parseInt(  aUser[i].goodsnum );
          goodsnum +=1;
          aUser[i].goodsnum=goodsnum;
          setCookie('user',JSON.stringify( aUser),7,"/");
          bool = false;
        }
      }
      if(bool){
        aUser.push({"goodsid":id,"goodsnum":num});
        setCookie('user',JSON.stringify( aUser),7,"/");
        console.log( getCookie('user'))
      }
    }else{
     aUser.push({"goodsid":id,"goodsnum":num});
     setCookie('user',JSON.stringify( aUser),7,"/");
     console.log('商品已添加至cookie');
   }
       // if(bool){
       //      aUser.push({"goodsid":id,"goodsnum":num})
       //      setCookie('user',JSON.stringify( aUser),7,"/");
       //      console.log('商品已添加至cookie');
       //    }else{

       //    }
       console.log(JSON.parse(getCookie('user')));
     })
}




Content .prototype.bind = function(){
    // 上下看小图
    $('#down').click(function(){
        if(parseInt($('#list').css( 'margin-top'))>=0){
         $('#list').css( 'margin-top' , "-719px")
     }else{
         $('#list').css( 'margin-top',"+=181"  )
    }
  });
    $("#up").click(function(){
         if(parseInt($('#list').css( 'margin-top'))<=-719){
         $('#list').css( 'margin-top' , "5px")
     }else{
         $('#list').css( 'margin-top',"-=181"  )
    }
  });
    // 点击小图换大图
    $('#list').find('li').find('img').click(function(){
          $('.bigImg').find('img').attr('src',$(this).attr('src').replace('.jpg','h.jpg'));
          $('.fangda').find('img').attr('src',$(this).attr('src').replace('.jpg','b.jpg'));
    })
    // 点击小图换颜色
    $('.color').find('li').find('img').eq(1).click(function(){
         $(this).parent().find('b').css('display','block').parent().siblings('li').find('b').css('display','none');
         $('.bigImg').find('img').attr('src', $('.bigImg').find('img').attr('src').replace('cls','cg'));
         $('.fangda').find('img').attr('src', $('.fangda').find('img').attr('src').replace('cls','cg'));
         $('.fangda').find('img').attr('src', $('.fangda').find('img').attr('src').replace('cls','cg'));
         for(var i=0;i<$('#list').find('li').length;i++ ){
             $('#list').find('li').find('img').eq(i).attr(  'src', $('#list').find('li').find('img').eq(i).attr('src').replace('cls','cg') )
          }
    })
    $('.color').find('li').find('img').eq(0).click(function(){
          $(this).parent().find('b').css('display','block').parent().siblings('li').find('b').css('display','none');
          $('.bigImg').find('img').attr('src', $('.bigImg').find('img').attr('src').replace('cg','cls'))
          for(var i=0;i<$('#list').find('li').length;i++ ){
              $('#list').find('li').find('img').eq(i).attr(  'src', $('#list').find('li').find('img').eq(i).attr('src').replace('cg','cls') )
          }
    })
    // 加减数量
    $(".mun").find('span').click(function(){
            // console.log(11);
        var i=$('.spinnerExample').val();
            i++;
            $('.spinnerExample').val(i)
    })
    $(".mun").find('i').click(function(){
            // console.log(1122);
          var i=$('.spinnerExample').val();
          if(i>0){
              i--;
          $('.spinnerExample').val(i)
            }
    })

    // 产品信息下拉框弹出
    $('.link').find('li').click(function(){
      console.log(11);
      $(this).find('div').css('display','block').parent().siblings('li').find('div').css('display','none');
    })
    // 购物车显示
    $('#code').hover(function(){
        $('.shophov').css('display','block');
      },function(){
        $('.shophov').css('display','none');
    })


     // 飞入购物车

      var number=0;
  $('#shopcar').click(function(){
      var $img = $('.bigImg').find('img');
      var $cloneImg = $img.clone();
      $('body').append($cloneImg);
      $cloneImg.css({
        "width":$img.width(),
        "height":$img.height(),
        "position":"absolute",
        "top":$img.offset().top,
        "left":$img.offset().left
      })

      $cloneImg.animate({
        "width":0,
        "height":0,
        "left":$('#code a').offset().left,
        "top":$('#code a').offset().top +$('#code a').outerHeight()
      },2000,function(){
    console.log('动画完成后执行');
    $cloneImg.remove();
    $('.tip').css('display','block');
    number+=1;
    $('.shopNum').html(number);

     // 购物车hover效果

      var oLi1=document.createElement('li');
      oLi1.className='clear';
      oLi1.innerHTML='<img src="'+obj.data[0].goodsImg+'" alt="">\
      <div class="box">\
      <p>'+obj.data[0].goodsName+'</p>\
      <p>￥<span class="shPrice">'+obj.data[0].goodsPrice+'.00</span></p>\
      <p>件数<span>'+number+'</span></p></div>\
      </li>';
      $('.shoplist').append(oLi1);

  })
})
// 关闭弹出框
$(".close").click(function(){
  $('.tip').css('display','none');
})
$('.tip').find('input').eq(1).click(function(){
  $('.tip').css('display','none');
})
$('.tip').find('input').eq(0).click(function(){
  window.location.href='http://10.3.135.25/1611/tw/app/shopcart/';
})



// 放大镜
$('.bigImg').click(function(){
  $('.xk2').css('display','none');
  $('.fangda').css('display','block');
  $('.xk1').css('display','block');
        var _smallImg = $(".bigImg"); //小图
        var _bigImg = $(".fangda").find('img'); //大图
        var _smallArea = $(".xk1"); //小区域
        var _bigArea = $(".fangda"); //大区域
        _smallArea.width( _smallImg.width() / _bigImg.width() * _bigArea.width() );
        _smallArea.height( _smallImg.height() / _bigImg.height() * _bigArea.height() );
        //放大系数/放大比例
        var scale = _bigImg.width() / _smallImg.width();
        _smallImg.mouseenter(function(){
         _bigArea.css("display", "block");
       })
        _smallImg.mouseleave(function(){
         _bigArea.css("display", "none");
       })
        $(document).mousemove(function(e){

          var leftSide = _smallImg.offset().left; //小图左边界
          var rightSide = leftSide + _smallImg.width(); //右边界
          var topSide = _smallImg.offset().top; //上边界
          var bottomSide = topSide + _smallImg.height(); //下边界

          //如果在小图区域内
          if (e.pageX > leftSide && e.pageX < rightSide && e.pageY > topSide && e.pageY < bottomSide) {

            //显示小区域
            _smallArea.css("display", "block");

            var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
            var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;

            //如果超出左边界, 则设置x为0
            if (x < 0) {
              x = 0;
            }
            //如果超出右边界, 则设置为右边界位置的值
            else if ( x > _smallImg.width()-_smallArea.width() ) {
              x = _smallImg.width()-_smallArea.width();
            }

            //如果超出上边界, 则最小为0
            if (y < 0) {
              y = 0;
            }
            //如果超出下边界, 则设置为下边界位置的值
            else if ( y > _smallImg.height()-_smallArea.height() ) {
              y = _smallImg.height()-_smallArea.height();
            }


            //移动小区域
            _smallArea.css({left: x, top: y});

            //移动大图的位置
            _bigImg.css({left: -x*scale, top:-y*scale});

          }
          else {
            //隐藏小区域
            _smallArea.css("display", "none");
          }
        })
      })


}

Content.prototype.template={
  upAdver : template.compile('<div class="wrapper">\
    <div class="ct">\
    <a href="http://10.3.135.25/1611/tw/app/index/">首页</a>&nbsp;/&nbsp;<a href="#">新品棉服</a>&nbsp;/&nbsp;<a href="#">男春两穿防风连帽立领中长款棉服棉衣</a>\
    </div>\
    <div class="cb clear">\
    <div class="cbl ">\
    <div class="smallImg clear">\
    <div id="up"></div>\
    <div id="tu">\
    <ul id="list">\
    </ul>\
    </div>\
    <div id="down"></div>\
    </div>\
    <div class="bigImg">\
    <div class="xk1"></div>\
    <div class="xk2">点击看大图</div>\
    </div>\
    <div class="fangda"></div>\
    </div>\
    <div class="cbr">\
    <div class="intro">\
    <h3>男春两穿防风连帽立领中长款棉服棉衣</h3>\
    <h4>E ONEIDA PADDED JACKET</h4>\
    <p>产品编号: 217109501</p>\
    <span>¥ 999.00</span>\
    </div>\
    <div >\
    <p>促销信息:</p>\
    <div class="youhui">\
    <p>500积分兑换满1500减150元优惠券</p>\
    <p>500积分兑换满1000减100元优惠券</p>\
    <p>500积分兑换满500减50元优惠券</p>\
    <p>500积分兑换20元无门槛优惠券</p>\
    </div>\
    </div>\
    <div class="message clear">\
    <p>选择颜色</p>\
    <ul class="clear color">\
    <li><img src="../../img/cbs1.jpg" alt=""><b class="i1"></b></li>\
    <li><img src="../../img/cbs2.jpg" alt=""><b></b></li>\
    </ul>\
    <div class="chima clear">\
    <select  >\
    <option selected>尺码</option>\
    <option >165/88A/XS</option>\
    <option>170/92A/S</option>\
    <option>175/96A/M</option>\
    <option>180/100A/L</option>\
    <option>185/104A/XL</option>\
    <option>190/108A/XXL</option>\
    <option>195/112A/</option>\
    </select>\
    <div class="mun">\
    <input type="text" class="spinnerExample" value="1" />\
    <span></span>\
    <i></i>\
    </div>\
    </div>\
    <div>\
    <p> <input type="button"  value="加入购物车" id="shopcar" ></p>\
    <p><input type="button" value="加入收藏夹" id="shou"></p>\
    <p>联系客服？</p>\
    </div>\
    <p> <span>分享：</span><i></i>&nbsp;/&nbsp;<em></em></p>\
    </div>\
    <div class="link">\
    <ul>\
    <li><p>产品信息</p>\
    <div class="xiangqing x1">外套面料：聚酯纤维78%锦纶22%；袖里料：锦纶100%；内里包边：棉100%；可脱卸内胆面料：锦纶100%；内胆包边：棉100%；填充物：聚酯纤维100%（装饰物部分除外）</div>\
    </li>\
    <li><p>温馨提示</p>\
    <div class="xiangqing">\
    外套内里单独洗涤，不可浸泡，缓和程序水洗。温度不高于30摄氏度，不可漂白，悬挂晾干，不可熨烫，不可干洗。</div>\
    </li>\
    <li><p>配送说明</p>\
    <div class="xiangqing">\
    收到订单信息后，我们会尽快处理您的订单，在正常情况下72小时内发货，一般发货后，北京，天津3日内到货，其他地区5-7天到货，具体派送时间根据买家当地的快递公司派件情况</div>\
    </li>\
    </ul>\
    </div>\
    </div>\
    </div>\
    <div class="tip">\
    <h4>成功添加购物车</h4>\
    <p>您的购物车中有0件商品<br>\
    购物车小计：0.00&nbsp;&nbsp;&nbsp;积分小计：0</p>\
    <input type="button" value="去购物车结算" id="jiesuan">\
    <input type="button" value="继续购物" id="jixu">\
    <span class="close">╳<span>\
    </div>\
    <div class="shophov">\
    <h4>购物车一件</h4>\
    <ul class="shoplist ">\
    </ul>\
    </div>\
    </div>\
    ')
}
return Content;
})
