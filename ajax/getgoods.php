<?php
 $val  =  $_GET["id"];

class Goods{
  public $goodsId;
  public $goodsName;
  public $goodsPrice;
  public $goodsImg;
  public $goodsmall;
  public $goodsImg1;
  public $goodsImg2;
  public $goodsImg3;


}

    $con = new mysqli('127.0.0.1','root','','demo1');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = "select * from goods where gid='$val'";
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

        $goods->goodsImg1 = $row["goodsImg1"];
        $goods->goodsImg2 = $row["goodsImg2"];
        $goods->goodsImg3 = $row["goodsImg3"];


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
        // if($val==$row["goodsid"]){
        //   $str=json_encode($arr[$val]);
        //   print_r($callback."('$str')");
        // }else{
        // print_r($val);
      $str = json_encode($arr);
      print_r( $callback."('$str')");
        // }
    }else{
            // echo json_encode($arr);
      $str = json_encode($arr);
      print_r( $str );
          // }
    }
    ?>
