-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 03 月 02 日 03:22
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `demo1`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(255) NOT NULL,
  `goodsprice` decimal(10,0) NOT NULL,
  `goodsimg` varchar(255) NOT NULL,
  `goodssmallimg` varchar(255) NOT NULL,
  `goodsImg1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `goodsImg2` varchar(255) CHARACTER SET utf8 NOT NULL,
  `goodsImg3` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`gid`, `goodsname`, `goodsprice`, `goodsimg`, `goodssmallimg`, `goodsImg1`, `goodsImg2`, `goodsImg3`) VALUES
(1, '连帽个性两穿棉服夹克外套C|217109505 ', '1699', '../../img/list2.jpg', '[\\"../../img/list2.jpg\\"]', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(2, '男春两穿防风连帽立领中长款棉服棉衣', '999', '../../img/list1.jpg', '[\\"../../img/list1.jpg\\",\\"../../img/list1_1.jpg\\"]', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(3, '拼接合体立领男装春季夹克棉服', '799', '../../img/list3.jpg', '[\\"../../img/list3.jpg\\"] ', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(4, '棒球领PU拼接男春棉服外套S|217109504', '799', '../../img/list4.jpg', '[\\"../../img/list4.jpg\\"]', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(5, '拼接棒球领男装春季棉服外套', '899', '  ../../img/list5.jpg', '[\\"../../img/list5.jpg\\",\\"../../img/list5_1.jpg\\"]', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(6, '棒球领合体男装春季棉服夹克外套', '699', '../../img/list6.jpg', '[\\"../../img/list6.jpg\\"] ', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(7, '春男装黑色棒球领飞行员夹克棉服棉衣 ', '699', ' ../../img/list7.jpg', '[\\"../../img/list7.jpg\\"]', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(8, '男装防风立领黑色春季棉服棉衣', '699', '../../img/list8.jpg', '[\\"../../img/list8.jpg\\"] ', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(9, '拼接棒球领男装春季棉服外套', '899', '../../img/list9.jpg', '[\\"../../img/list9.jpg\\",\\"../../img/list9_1.jpg\\"]', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg'),
(10, '印花双面穿棒球领男装春季羽绒服外套', '899', '../../img/list10.jpg', '[\\"../../img/list10.jpg\\"] ', '[\\"../../img/cls1.jpg\\",\\"../../img/cls2.jpg\\",\\"../../img/cls3.jpg\\",\\"../../img/cls4.jpg\\",\\"../../img/cls5.jpg\\",\\"../../img/cls6.jpg\\",\\"../../img/cls7.jpg\\"]', '../../img/cls1h.jpg', '../../img/cls1b.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
