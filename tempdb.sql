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
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8 */;
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='\r\ntype: \r\n0 인삿말   1: 위치    2: 인테리어  3: 공지사항  4: ki스토리  5:ki기자단  6 : 교수 칼럼 \r\n7: faq   \r\n';

-- 테이블 데이터 test.board:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT IGNORE INTO `board` (`id`, `writer`, `date`, `subject`, `content`, `hit`, `type`) VALUES
	(1, '관리자', '2021-06-06', '안녕하십니까', '인삿말입니다.', 0, 0),
	(2, '관리자', '2021-06-06', '오시는길', '천호동 금복빌딩3층', 0, 1),
	(3, '관리자\r\n', '2021-06-06', '시설소개', '시설소개', 0, 2);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 test.board_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_image` (
  `board_id` int(10) unsigned NOT NULL,
  `iamge` varchar(1000) NOT NULL DEFAULT '',
  KEY `FK__board` (`board_id`) USING BTREE,
  CONSTRAINT `FK_board_image_board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.board_image:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_image` ENABLE KEYS */;

-- 테이블 test.consult 구조 내보내기
CREATE TABLE IF NOT EXISTS `consult` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `age` tinyint(3) unsigned NOT NULL DEFAULT 20,
  `tel` varchar(50) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `content` text NOT NULL,
  `read` tinyint(3) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='read 읽었으면 1 \r\n';

-- 테이블 데이터 test.consult:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `consult` DISABLE KEYS */;
/*!40000 ALTER TABLE `consult` ENABLE KEYS */;

-- 테이블 test.curriculum 구조 내보내기
CREATE TABLE IF NOT EXISTS `curriculum` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `info` varchar(500) NOT NULL,
  `term` tinyint(4) NOT NULL DEFAULT 0,
  `start_time` time NOT NULL DEFAULT '09:00:00',
  `end_time` time NOT NULL DEFAULT '18:00:00',
  `location` varchar(50) NOT NULL,
  `tuition` varchar(50) NOT NULL,
  `qual` varchar(50) NOT NULL,
  `show` tinyint(3) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.curriculum:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;

-- 테이블 test.curr_faq 구조 내보내기
CREATE TABLE IF NOT EXISTS `curr_faq` (
  `curr_id` int(10) NOT NULL,
  `board_id` int(10) unsigned NOT NULL,
  KEY `FK_curr_faq_board` (`board_id`),
  KEY `FK_curr_faq_curriculum` (`curr_id`),
  CONSTRAINT `FK_curr_faq_board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_curr_faq_curriculum` FOREIGN KEY (`curr_id`) REFERENCES `curriculum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.curr_faq:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `curr_faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `curr_faq` ENABLE KEYS */;

-- 테이블 test.curr_sbj 구조 내보내기
CREATE TABLE IF NOT EXISTS `curr_sbj` (
  `curr_id` int(10) DEFAULT NULL,
  `sub_id` int(10) DEFAULT NULL,
  KEY `FK__curriculum` (`curr_id`),
  KEY `FK__subject` (`sub_id`),
  CONSTRAINT `FK__curriculum` FOREIGN KEY (`curr_id`) REFERENCES `curriculum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__subject` FOREIGN KEY (`sub_id`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.curr_sbj:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `curr_sbj` DISABLE KEYS */;
/*!40000 ALTER TABLE `curr_sbj` ENABLE KEYS */;

-- 테이블 test.history 구조 내보내기
CREATE TABLE IF NOT EXISTS `history` (
  `year` smallint(5) unsigned NOT NULL,
  `content` varchar(100) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.history:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;

-- 테이블 test.sboard 구조 내보내기
CREATE TABLE IF NOT EXISTS `sboard` (
  `id` int(10) NOT NULL,
  `writer` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `subject` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `hit` int(11) DEFAULT 0,
  `class_code` tinyint(4) NOT NULL,
  `type` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='type: \r\n수강후기0, 취업자인터뷰1, 포트폴리오2 ';

-- 테이블 데이터 test.sboard:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `sboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `sboard` ENABLE KEYS */;

-- 테이블 test.sboard_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `sboard_image` (
  `sboard_id` int(10) NOT NULL,
  `iamge` varchar(1000) NOT NULL DEFAULT '',
  KEY `FK__board` (`sboard_id`) USING BTREE,
  CONSTRAINT `FK_sboard_image_sboard` FOREIGN KEY (`sboard_id`) REFERENCES `sboard` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 test.sboard_image:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `sboard_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `sboard_image` ENABLE KEYS */;

-- 테이블 test.subject 구조 내보내기
CREATE TABLE IF NOT EXISTS `subject` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `content` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.subject:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;

-- 테이블 test.teacher 구조 내보내기
CREATE TABLE IF NOT EXISTS `teacher` (
  `id` tinyint(3) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `career` varchar(500) DEFAULT NULL,
  `content` text NOT NULL,
  `show` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 test.teacher:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
