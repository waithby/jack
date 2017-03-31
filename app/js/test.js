//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){

    var  Test = function (){
        var self = this;
        //数据
        //ajax的回调函数用来刷新页面
        this.ajax(function(res){
            console.log(res);
            console.log(typeof res);
            var obj = {"data":JSON.parse(res)};
            $('#main').append(self.template.goodlist(obj));

        });
        this.bind();
        //当前页面的构造函数
    //    $('#main').append(this.template.list(data));
    }
    Test.prototype.template = {
        "list": template.compile("<h2>{{title}}</h2>\
        <ul>\
            {{each list as value index}}\
            <li>序号{{index}}：{{value}}</li>\
            {{/each}}\
        </ul>"),
        "goodlist":template.compile('<ul>\
                                        {{ each data as value}}\
                                        <li><img src="{{value.goodsImg}}">\
                                        {{value.goodsId}}: {{value.goodsName}}:{{value.goodsPrice}}:\
                                        </li>\
                                        {{/each}}\
                                    </ul>')
    };
    Test.prototype.ajax = function(callback){
        $.ajax({
            type:"get",
            url:"http://localhost/1611/day32/ajax/getlist.php",
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
    Test.prototype.bind = function(){
        $('#main').on('mouseenter','img',function(){
            console.log('enter');
        })
    }

    return Test


})

