define(['jquery','template','header','footer','float'],function($,template,Header,Footer,Float){
  var Main = function (){
    var self = this;
  };
  Main .prototype.init = function(){
    console.log(111)

      var top=new Header();
    top.init();
    $('body').append('<div id="main" class="main"/>');
    $('#main').append( this.template.upNav() );
    var float =new Float();
    float.init();
    var footer=new Footer();
    footer.init();
    var self = this;
    this.ajax(function(res){
      console.log(res);
      console.log(typeof res);
      var obj = {"data":JSON.parse(res)};

      update(obj);
      self.bind();
    //   $('.pbig').click(function(){
    //   window.location.href='http://localhost/1611/tw/app/content/';
    // })

    });
    function update(obj){
      console.log(obj);
      for(var i = 0;i<obj.data.length;i++){
        var oLi=document.createElement('li');
        oLi.className='lt';
        console.log(obj.data[i].goodsId)
        oLi.innerHTML='<div class="pbig">\
       <a  href="http://10.3.135.25/1611/tw/app/content/?id='+obj.data[i].goodsId+'"> <img src='+obj.data[i].goodsImg+' alt=""></a> </div>\
        <p><a href="#">'+obj.data[i].goodsName+'</a> </p>\
        <p><span class="price">￥'+obj.data[i].goodsPrice+'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>99%</strong>好评</p>\
        </div> ';
        document.getElementById('list').appendChild(oLi);
        var small=JSON.parse(obj.data[i].goodsmall);
        for(var j = 0;j<small.length;j++){
         var oDiv=document.createElement('div');

         oDiv.innerHTML='<div class="psmall">\
         <ul>\
         <li> <img src="'+small[j]+'" alt=""></li>\
         </ul>\
         </div>';

         oLi.appendChild(oDiv);
       }
     }


   }



   // this.bind();

 },


 Main .prototype.bind = function(){
  $('.pbig').find('img').hover(function(){
   $(this).attr('src', $(this).attr('src').replace('.jpg','h.jpg') )
 },function(){
   $(this).attr('src', $(this).attr('src').replace('h.jpg','.jpg') )
 });


  $('.psmall').find('img').click(function(){
    $(this).closest('.lt').find('.pbig').find('img').attr( 'src', $(this).attr('src') )
  });
},


Main.prototype.ajax = function(callback){
  $.ajax({
    type:"get",
    url:"http://10.3.135.25/1611/tw/ajax/getlist.php",
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


Main.prototype.template={
  upNav : template.compile('<div class="main clear">\
    <div class="mt">\
    <div class="nav">\
    <a href="http://10.3.135.25/1611/tw/app/index/">首页&nbsp;／</a>\
    <a href="#">所有商品首页&nbsp;／</a>\
    <a href="#">2017春夏新品首页&nbsp;／</a>\
    <a href="#">新品棉服</a>\
    </div>\
    <div class="title">新品棉服</div>\
    </div>\
    <div class="ml">\
    <div class="mlt">\
    <h3>按品类筛选</h3>\
    <ul>\
    <li><a href="#">全部</a></li>\
    <li><span></span><a href="#">秋冬热销</a></li>\
    <li><span></span><a href="#">热销推荐</a></li>\
    <li><span></span><a href="#">2017春夏新品</a></li>\
    <li><span></span><a href="#">秋冬潮品</a></li>\
    <li><span></span><a href="#">新品到店</a></li>\
    <li><span></span><a href="#">海报同款</a></li>\
    <li><span></span><a href="#">暖意针织衫</a></li>\
    <li><span></span><a href="#">夹克外套</a></li>\
    <li><span></span><a href="#">气质衬衫</a></li>\
    <li><span></span><a href="#">西服外套</a></li>\
    <li><span></span><a href="#">潮流牛仔裤</a></li>\
    <li><span></span><a href="#">简约休闲裤</a></li>\
    <li><span></span><a href="#">潮流T恤</a></li>\
    <li><span></span><a href="#">优选配饰</a></li>\
    <li><span></span><a href="#">产品系列</a></li>\
    </ul>\
    </div>\
    <div class="mlb">\
    <ul>\
    <li><a href="#"><img src="../../img/lileft1.jpg" alt=""></a></li>\
    <li><a href="#"><img src="../../img/lileft2.jpg" alt=""></a></li>\
    <li><a href="#"><img src="../../img/lileft3.jpg" alt=""></a></li>\
    </ul>\
    </div>\
    </div>\
    <div class="mr">\
    <h3>\
    <a href="#">搭配</a>\
    <label>排序根据:</label>\
    <select>\
    <option>上架时间(降序)</option>\
    <option>价格(升序)</option>\
    <option>价格(降序)</option>\
    <option>销售量(降序)</option>\
    </select>\
    <label>每页展示数量:</label>\
    <select>\
    <option>160</option>\
    <option>40</option>\
    <option>60</option>\
    </select>\
    <div class="ye">\
    <span>10个结果</span><i></i><span>&nbsp;1/1&nbsp;</span><em></em>\
    </div>\
    </h3>\
    <div >\
    <ul id="list">\
    </ul>\
    </div>\
    </div>\
    </div>\
    ')
}
return Main;
})
