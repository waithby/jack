define(['jquery','template','header','footer','float'],function($,template,Header,Footer,Float){
  var  Adver = function (){
    var self = this;
  };
  Adver.prototype.init = function(){
    var top=new Header();
    top.init();
    $('body').append('<div id="adver" class="adver"/>');
    $('#adver').append( this.template.upAdver() );
    this.bind();
    var float =new Float();
    float.init();
    var footer=new Footer();
    footer.init();
  };
  Adver .prototype.bind = function(){
       $('img').click(function(){
           window.location.href='http://10.3.135.25/1611/tw/app/main/';
       })
  }
  Adver.prototype.template={
    upAdver : template.compile('<div id="adver">\
      <div class="adverT">\
      <img src="../../img/b1.jpg" alt="">\
      </div>\
      <div class="adverM">\
      <div class="Ml">\
      <img src="../../img/b4.jpg" alt=""></div>\
      <div class="Mr">\
      <img src="../../img/b10.jpg" alt="">\
      </div>\
      </div>\
      <div class="mb1">\
      <img src="../../img/b5.jpg" alt="">\
      </div>\
      <div class="mb2">\
      <img src="../../img/b6.jpg" alt="">\
      </div>\
      <div class="mb3">\
      <img src="../../img/b9.jpg" alt="">\
      </div>\
      <div class="mb4">\
      <img src="../../img/b7.jpg" alt="">\
      </div>\
      </div>')
  }
  return Adver;
})
