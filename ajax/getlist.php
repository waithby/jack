<?php
    class Goods{
        public $goodsId;
        public $goodsName;
        public $goodsPrice;
        public $goodsImg;
        public $goodsmall;
    }

    $con = new mysqli('127.0.0.1','root','','demo1');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from goods';
    $res = $con->query($sql);
    $arr = array();
    if($res->num_rows > 0){

        while($row = $res->fetch_assoc()){
            $goods = new Goods();
            $goods->goodsId = $row["gid"];
            $goods->goodsName = $row["goodsname"];
            $goods->goodsPrice = $row["goodsprice"];
            $goods->goodsImg = $row["goodsimg"];
            $goods->goodsmall= $row["goodssmallimg"];
            array_push($arr, $goods);
        }

        //返回json字符串
    }else {
        array_push($arr, "没有商品");
    }
    //判断是否是jsonp的请求
    //isset(var) 判断变量是否被定义
    if(isset($_REQUEST['callback'])){
        // 表示是一个jsonp的请求
        //找到callback 的函数名称
        $callback = $_REQUEST['callback'];
        //调用callback的函数
        $str = json_encode($arr);
        print_r( $callback."('$str')");
    }else{
        // echo json_encode($arr);
        $str = json_encode($arr);
         print_r( $str );

    }

  //  print_r($str)

 ?>
