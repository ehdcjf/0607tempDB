-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- test 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test`;

-- 테이블 test.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `writer` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `subject` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `hit` int(10) unsigned DEFAULT 0,
  `type` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.board_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(10) unsigned NOT NULL,
  `iamge` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `FK__board` (`board_id`) USING BTREE,
  CONSTRAINT `board_image_ibfk_1` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.consult 구조 내보내기
CREATE TABLE IF NOT EXISTS `consult` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `age` tinyint(3) unsigned NOT NULL DEFAULT 20,
  `tel` varchar(50) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `content` text NOT NULL,
  `read` tinyint(3) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.curriculum 구조 내보내기
CREATE TABLE IF NOT EXISTS `curriculum` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `info` varchar(500) NOT NULL,
  `term` tinyint(4) NOT NULL DEFAULT 0,
  `start_time` time NOT NULL DEFAULT '09:00:00',
  `end_time` time NOT NULL DEFAULT '18:00:00',
  `location` varchar(50) NOT NULL,
  `tuition` varchar(50) NOT NULL,
  `qual` varchar(50) NOT NULL,
  `show` tinyint(3) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.curr_faq 구조 내보내기
CREATE TABLE IF NOT EXISTS `curr_faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curr_id` int(11) NOT NULL,
  `board_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_curr_faq_board` (`board_id`) USING BTREE,
  KEY `FK_curr_faq_curriculum` (`curr_id`) USING BTREE,
  CONSTRAINT `curr_faq_ibfk_1` FOREIGN KEY (`curr_id`) REFERENCES `curriculum` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `curr_faq_ibfk_2` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.curr_sbj 구조 내보내기
CREATE TABLE IF NOT EXISTS `curr_sbj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curr_id` int(11) DEFAULT NULL,
  `sub_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__curriculum` (`curr_id`) USING BTREE,
  KEY `FK__subject` (`sub_id`) USING BTREE,
  CONSTRAINT `curr_sbj_ibfk_1` FOREIGN KEY (`curr_id`) REFERENCES `curriculum` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `curr_sbj_ibfk_2` FOREIGN KEY (`sub_id`) REFERENCES `subject` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.history 구조 내보내기
CREATE TABLE IF NOT EXISTS `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` smallint(5) unsigned NOT NULL,
  `content` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.sboard 구조 내보내기
CREATE TABLE IF NOT EXISTS `sboard` (
  `id` int(11) NOT NULL,
  `writer` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `subject` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `hit` int(11) DEFAULT 0,
  `class_code` tinyint(4) NOT NULL,
  `type` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.sboard_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `sboard_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sboard_id` int(11) NOT NULL,
  `iamge` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `FK__board` (`sboard_id`) USING BTREE,
  CONSTRAINT `sboard_image_ibfk_1` FOREIGN KEY (`sboard_id`) REFERENCES `sboard` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.subject 구조 내보내기
CREATE TABLE IF NOT EXISTS `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.teacher 구조 내보내기
CREATE TABLE IF NOT EXISTS `teacher` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `position` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `career` varchar(500) DEFAULT NULL,
  `content` text NOT NULL,
  `iamge` varchar(1000) NOT NULL DEFAULT '',
  `show` tinyint(3) unsigned DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- 내보낼 데이터가 선택되어 있지 않습니다.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
