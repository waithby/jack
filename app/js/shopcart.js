define(['jquery','template','header','footer'],function($,template,Header,Footer){
  var  Shopcart = function (){
    var self = this;
  };

  Shopcart.prototype.init = function(){
   var top=new Header();
   top.init();
   $('body').append('<div id="shopcart" class="shopcart"/>');
   $('#shopcart').append( this.template.upShopcart() );

   var footer=new Footer();
   footer.init();
    this.bind();
   var self=this;
   this.ajax(function(res){
    obj ={};
    console.log(res)
    var obj = {"data":JSON.parse(res)};
     self.getCookie();
    update(obj);
    //self.bind();
  })
   function update(obj){
       console.log(obj);

    for(var i=0;i<strCookie.length;i++){
      var munber=0;
      munber += parseInt(   strCookie[i].goodsnum  )
      for(var j = 0;j<obj.data.length;j++){
        if(obj.data[j].goodsId==strCookie[i].goodsid){
          var oUl=document.createElement('ul');
          oUl.className='clear';
          oUl.innerHTML='<li><input type="checkbox" class="listGx" name=""><a href="http://10.3.135.25/1611/tw/app/content/?id=2"><img src="'+obj.data[j].goodsImg+'" alt=""></a></li>\
          <li><a href="http://10.3.135.25/1611/tw/app/content/?id=2">\
          '+obj.data[j].goodsName+'</a></li>\
          <li>\
          <div class="num">\
          <input type="text" value="'+strCookie[i].goodsnum+'"  class="numShow"><span class="up"></span><span class="down"></span>\
          </div>\
          </li>\
          <li><p  class="price">￥<span>'+obj.data[j].goodsPrice+'</span></p></li>\
          <li><p class="allPrice">￥<span>999</span></p></li><div class="del">\
            <button href="#">移至收藏夹</button>\
            <button href="#" class="delete">从购物车中删除</button>\
          </div>';
           $('.null').remove();
           $('.lt').append(oUl);
           $('.allPrice').find('span').html(strCookie[i].goodsnum  * parseInt(obj.data[j].goodsPrice)  )

      }
    }
    $('.shopNum').html( "["   +munber+ "件]" );
  }
}


};
Shopcart.prototype.bind = function(){
    // 数量的加减
    $('.lt').on('click','.up',function(){
          console.log('click');
          var i= parseInt( $(this).parent().find('input').val()  );
          i+=1;
          $(this).parent().find('input').val(i);
          $(this).closest('ul').find('li').find('.allPrice').find('span').html( parseInt( $(this).closest('ul').find('li').find('.price').find('span').html() ) *$(this).parent().find('input').val())
          $('.sPrice em').html($('.allPrice span').html()+'.00');
    })
    $('.lt').on('click','.down',function(){
      console.log('click');
      var i= parseInt( $(this).parent().find('input').val()  );
       if(i>1){
          i-=1;
          $(this).parent().find('input').val(i);
          $(this).closest('ul').find('li').find('.allPrice').find('span').html( parseInt( $(this).closest('ul').find('li').find('.price').find('span').html() )  *$(this).parent().find('input').val())
          // $('.allPrice span').html( parseInt($('.price span').html())*$(this).parent().find('input').val()  );
          $('.sPrice em').html($('.allPrice span').html()+'.00');
        }
    })
     // 勾选框的勾选
       $('.all').click(function(){
          $('.listGx').prop('checked',this.checked)
          $('.all').prop('checked',this.checked);
        })
    // 删除选中商品
     $('.lt').on('click','.delete',function(){
       $(this).closest('ul').remove();
       if($('.delete').html()){
       }else{
        $('.lt').html('<div class="null"> \
          <p>您的购物车现在是空的</p>\
       <a href="http://10.3.135.25/1611/tw/app/index/">   <button>开始购物</button></div></a>')
       }
        return false;
      })
}


Shopcart.prototype.getCookie=function(){
  var strCookie1 = getCookie('user');
  strCookie= JSON.parse(strCookie1);
  console.log(strCookie1);
  return strCookie;
}




Shopcart.prototype.ajax=function(callback){
  // this.getCookie();
  // for(var i=0;i<strCookie.length;i++){
  //  id=strCookie[i].goodsid;
  //  console.log(id);
  //  var num=strCookie[i].goodsnum;
   $.ajax({
    type:"get",
    url:"http://10.3.135.25/1611/tw/ajax/getlist.php",
    // data:{"id":id},
    success:function(res){
      if(callback){
                  // var obj={"data":JSON.parse(res)};
                  // var temp = {};
                  // temp.data = obj;
                   // console.log(obj.data)
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
 // }
}




Shopcart.prototype.template={
  upShopcart : template.compile(' <div class="wrapper">\
    <div class="st">\
    <p>首页&nbsp; / &nbsp;购物车</p>\
    <h2>购物车</h2>\
    <ul class="clear">\
    <li class="li">1 查看购物车</li>\
    <li>2 填写并核对订单信息</li>\
    <li>3 成功提交订单</li>\
    </ul>\
    </div>\
    <div class="help">\
    <h3>希望得到帮助\
    </h3>\
    <p>\
    <a href="#">常见问题</a>\
    <a href="#">联系我们</a>\
    <a href="#">配送说明</a>\
    <a href="#">退换货政策</a>\
    </p>\
    </div>\
    <div class="shop">\
    <div class="zaiyao clear">\
    <h3>订单摘要</h3>\
    <a href="#">结算</a>\
    </div>\
    <ul class="clear miaoshu">\
    <li class="all1"><input type="checkbox" class="all">全选</li>\
    <li>商品描述</li>\
    <li>数量</li>\
    <li>单价</li>\
    <li>总价</li>\
    </ul>\
    <div class="sp">\
    <input type="checkbox" class="all">\
    <span>商品</span>\
    </div>\
    <div class="list">\
    <div class="lt">\
   <div class="null"> \
          <p>您的购物车现在是空的</p>\
           <a href="http://localhost/1611/tw/app/index/"><button>开始购物</button></a></div>\
    </div>\
    </div>\
    <div class="lb clear ">\
    <p>\
    <input type="checkbox" class="all"><span>全选</span>\
    <a href="#">批量移至收藏夹</a>\
    <a href="#">批量删除</a>\
    </p>\
    <ul class="clear">\
    <li class="clear sPrice"><i>商品总金额：</i> <span>RMB¥</span> <em> 999.00</em>\
    </li>\
    <li class=" youhui clear"><i>优惠:</i><span>RMB¥</span><em> 0.00</em>\
    </li>\
    <li class="youhui clear"><i>优惠的积分：</i><span>PTS</span> <em> 0</em>\
    </li>\
    <li class="clear sPrice"><i>总计金额(不含运费)：</i><span>RMB¥</span><em> 999.00</em>\
    </li>\
    <li class="clear"><i>花费的积分：</i><span>PTS</span> <em> 0</em>\
    </li>\
    </ul>\
    </div>\
    <h4> <a href="http://10.3.135.25/1611/tw/app/main/"><button class="jixu">继续购物</button> </a> <input type="button" name="" value="结算" class="jiesuan"></h4>\
    </div>\
    </div>\
    ')
}
return Shopcart;
})
