-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: cumta
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_token_detail`
--

DROP TABLE IF EXISTS `access_token_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access_token_detail` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `refresh_token` varchar(32) COLLATE latin1_general_cs NOT NULL,
  `access_token` varchar(32) COLLATE latin1_general_cs NOT NULL,
  `status` tinyint NOT NULL,
  `requested_at` bigint NOT NULL,
  `last_refreshed_at` bigint NOT NULL,
  `valid_upto` bigint NOT NULL,
  UNIQUE KEY `id` (`id`),
  KEY `access_token_detail_idx_1` (`user_id`),
  KEY `access_token_detail_idx_2` (`refresh_token`),
  KEY `access_token_detail_idx_3` (`access_token`),
  KEY `access_token_detail_idx_4` (`status`),
  KEY `access_token_detail_idx_5` (`requested_at`),
  KEY `access_token_detail_idx_6` (`last_refreshed_at`),
  KEY `access_token_detail_idx_7` (`valid_upto`),
  CONSTRAINT `access_token_detail_fk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_token_detail`
--

LOCK TABLES `access_token_detail` WRITE;
/*!40000 ALTER TABLE `access_token_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `access_token_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` tinyint NOT NULL,
  `cover_image_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cover_image_location` text COLLATE latin1_general_cs NOT NULL,
  `upload_type` tinyint NOT NULL DEFAULT '1',
  `created_at` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `modified_at` bigint unsigned NOT NULL,
  `modified_by` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `album_idx_1` (`type`),
  KEY `album_idx_2` (`created_at`),
  KEY `album_idx_3` (`created_by`),
  KEY `album_idx_4` (`modified_at`),
  KEY `album_idx_5` (`modified_by`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (7,'1st Authority Meeting','1st Authority Meeting under the chairmanship of Thiru.M.K. Stalin',1,'Image.jpeg','upload/2023/07/13/1689257523-PLWG8.jpeg',1,1689257553,1,1690537473,1),(9,'Slider 1','',2,'CUMTA banner video 1.mp4','upload/2023/09/18/1695019972-ORX97.mp4',2,1695019978,1,1695019978,1),(10,'Slider 2','',2,'metro_slide_11.png','upload/2023/09/18/1695020043-RV4GF.png',1,1695020045,1,1695020045,1),(11,'Slider 3','',2,'metro_slide_12.png','upload/2023/09/18/1695020066-4HLMR.png',1,1695020068,1,1695020068,1),(12,'Slider 4','',2,'metro_slide_131.png','upload/2023/09/18/1695020096-690KV.png',1,1695020100,1,1695020100,1),(13,'Slider 5','',2,'city_slide.png','upload/2023/09/18/1695020115-C1K2H.png',1,1695020117,1,1695020117,1);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album_images`
--

DROP TABLE IF EXISTS `album_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `album_id` bigint unsigned NOT NULL,
  `type` tinyint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `location` text COLLATE latin1_general_cs NOT NULL,
  `uploaded_at` bigint unsigned NOT NULL,
  `uploaded_by` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `album_images_idx_1` (`album_id`),
  KEY `album_images_idx_2` (`type`),
  KEY `album_images_idx_3` (`uploaded_at`),
  KEY `album_images_idx_4` (`uploaded_by`),
  CONSTRAINT `album_images_fk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album_images`
--

LOCK TABLES `album_images` WRITE;
/*!40000 ALTER TABLE `album_images` DISABLE KEYS */;
INSERT INTO `album_images` VALUES (12,7,7,'Image.jpeg','upload/2023/07/13/1689257535-3GX0W.jpeg',1689257553,1),(13,7,7,'image1.jpeg','upload/2023/07/13/1689257536-CLXQH.jpeg',1689257553,1),(14,7,7,'Photo 3.jpg','upload/2023/07/28/1690537463-C84IR.jpg',1690537473,1),(15,7,7,'Photo 4.jpg','upload/2023/07/28/1690537467-T2IEM.jpg',1690537473,1),(16,7,7,'Photo 5.jpg','upload/2023/07/28/1690537470-KHA4U.jpg',1690537473,1);
/*!40000 ALTER TABLE `album_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careers`
--

DROP TABLE IF EXISTS `careers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `careers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) COLLATE latin1_general_cs NOT NULL,
  `careers_type` tinyint NOT NULL,
  `openings` varchar(10) COLLATE latin1_general_cs NOT NULL,
  `last_date` date NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `document_id` bigint NOT NULL DEFAULT '0',
  `created_at` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `modified_at` bigint unsigned NOT NULL,
  `modified_by` bigint unsigned NOT NULL,
  `apply_link` text COLLATE latin1_general_cs,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `careers_idx_1` (`title`),
  KEY `careers_idx_2` (`careers_type`),
  KEY `careers_idx_3` (`openings`),
  KEY `careers_idx_4` (`last_date`),
  KEY `careers_idx_5` (`status`),
  KEY `careers_idx_6` (`document_id`),
  KEY `careers_idx_7` (`created_at`),
  KEY `careers_idx_8` (`created_by`),
  KEY `careers_idx_9` (`modified_at`),
  KEY `careers_idx_10` (`modified_by`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careers`
--

LOCK TABLES `careers` WRITE;
/*!40000 ALTER TABLE `careers` DISABLE KEYS */;
INSERT INTO `careers` VALUES (3,'Senior Data Integration Engineer',1,'1','2023-09-20',1,89,1688369096,1,1694178705,1,'https://docs.google.com/forms/d/1Iaq6vBJcUHYJg_FVkZZ22sj368f1XoMkPqgP3n9xMnY/edit'),(4,'Town/Urban Planner - with GIS experience',1,'1','2023-09-20',1,90,1688369155,1,1694183300,1,'https://docs.google.com/forms/d/1Iaq6vBJcUHYJg_FVkZZ22sj368f1XoMkPqgP3n9xMnY/edit'),(5,'Social Expert',1,'1','2023-09-20',1,91,1694183332,1,1694183332,1,'https://docs.google.com/forms/d/1Iaq6vBJcUHYJg_FVkZZ22sj368f1XoMkPqgP3n9xMnY/edit');
/*!40000 ALTER TABLE `careers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city_metrics`
--

DROP TABLE IF EXISTS `city_metrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city_metrics` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `daily_trips` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `bus_ridership` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `suburban_ridership` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `metro_ridership` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `autorickshaws` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `bus_metro_rail` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `car_2_wheeler` varchar(8) COLLATE latin1_general_cs NOT NULL,
  `walk_cycle` varchar(8) COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `city_metrics_idx_1` (`daily_trips`),
  KEY `city_metrics_idx_2` (`bus_ridership`),
  KEY `city_metrics_idx_3` (`suburban_ridership`),
  KEY `city_metrics_idx_4` (`metro_ridership`),
  KEY `city_metrics_idx_5` (`autorickshaws`),
  KEY `city_metrics_idx_6` (`bus_metro_rail`),
  KEY `city_metrics_idx_7` (`car_2_wheeler`),
  KEY `city_metrics_idx_8` (`walk_cycle`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city_metrics`
--

LOCK TABLES `city_metrics` WRITE;
/*!40000 ALTER TABLE `city_metrics` DISABLE KEYS */;
INSERT INTO `city_metrics` VALUES (1,'157','31','11','1.16','7.1','28.2','36.7','28');
/*!40000 ALTER TABLE `city_metrics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_contacts`
--

DROP TABLE IF EXISTS `cms_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cms_contacts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `prefix` varchar(12) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `name` varchar(128) COLLATE latin1_general_cs NOT NULL,
  `contact_type` tinyint NOT NULL,
  `designation` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `department` varchar(255) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `status` tinyint NOT NULL DEFAULT '1',
  `document_id` bigint NOT NULL DEFAULT '0',
  `sequence` bigint unsigned NOT NULL,
  `created_at` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `modified_at` bigint unsigned NOT NULL,
  `modified_by` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `cms_contacts_idx_1` (`prefix`),
  KEY `cms_contacts_idx_2` (`name`),
  KEY `cms_contacts_idx_3` (`contact_type`),
  KEY `cms_contacts_idx_4` (`designation`),
  KEY `cms_contacts_idx_5` (`department`),
  KEY `cms_contacts_idx_6` (`status`),
  KEY `cms_contacts_idx_7` (`document_id`),
  KEY `cms_contacts_idx_8` (`created_at`),
  KEY `cms_contacts_idx_9` (`created_by`),
  KEY `cms_contacts_idx_10` (`modified_at`),
  KEY `cms_contacts_idx_11` (`modified_by`),
  KEY `cms_contacts_idx_12` (`sequence`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_contacts`
--

LOCK TABLES `cms_contacts` WRITE;
/*!40000 ALTER TABLE `cms_contacts` DISABLE KEYS */;
INSERT INTO `cms_contacts` VALUES (1,'Thiru','Thiru. M.K.Stalin',1,'Honourable Chief Minister of Tamil Nadu','',1,1,168,1687929594,1,1687947050,1),(2,'Thiru','Thiru. S. Muthusamy',1,'Minister for Housing and Urban Development','',1,2,169,1687929594,1,1687947139,1),(3,'Thiru','Thiru. S.S.Sivasankar',1,'Minister for Transport','',1,3,170,1687929594,1,1687947146,1),(4,'','Thiru. M.K.Stalin',2,'Honorable Chief Minister','Chairman',1,4,3,1687929604,1,1687947387,1),(5,'','Thiru. S. Muthusamy',2,'Minister-in-charge','Housing and Urban Development Department',1,5,4,1687929604,1,1687948547,1),(6,'','Thiru. S.S. Sivasankar',2,'Minister-in-charge','Transport Department',1,6,5,1687929604,1,1687948557,1),(7,'','Shiv Das Meena, I.A.S',2,'Chief Secretary to Government','Government of Tamil Nadu',1,74,6,1687929604,1,1688993772,1),(8,'','Selvi Apoorva, I.A.S.',2,'Secretary to Government','Housing and Urban Development Department, Vice-Chairman, CMDA',1,8,14,1687929604,1,1687929604,1),(9,'','K. Phanindra Reddy, I.A.S',2,'Secretary to Government','Home Department',1,9,15,1687929604,1,1687929604,1),(10,'','T. Udhayachandran, I.A.S',2,'Secretary to Government','Finance Department',1,10,16,1687929604,1,1687929604,1),(11,'','Pradeep Yadav, I.A.S.',2,'Secretary to Government','Highways Department',1,11,17,1687929604,1,1687929604,1),(12,'','P Amudha I.A.S.',2,'Secretary to Government','Home Department',1,12,18,1687929604,1,1687929604,1),(13,'','Dr. D Karthikeyan I.A.S.',2,'Secretary to Government','Municipal Administration & Water Supply Department',1,76,19,1687929604,1,1688995203,1),(14,'','Sandeep Rai Rathore, I.P.S.',2,'Commissioner of Police','Greater Chennai Police',1,75,21,1687929604,1,1688993960,1),(15,'','Dr.Radhakrishnan, I.A.S.',2,'Commissioner of Police','Greater Chennai Corporation',1,15,23,1687929604,1,1687929604,1),(16,'','L. Nirmal Raj, I.A.S.',2,'Transport Commissioner','',1,16,24,1687929604,1,1687929604,1),(17,'','Anshul Mishra, I.A.S.',2,'Member Secretary','CMDA',1,17,25,1687929604,1,1687929604,1),(18,'','R.N. Singh',2,'General Manager','Southern Railway',1,18,26,1687929604,1,1687929604,1),(19,'','Ganesh',2,'Divisional Railway Manager','Chennai Division, Southern Railway',1,19,27,1687929604,1,1687929604,1),(20,'','A. Anbu Abraham, B.Tech',2,'Managing Director','Metropolitan Transport Corporation.(Chennai) Ltd',1,20,28,1687929604,1,1687929604,1),(21,'','M.A. Siddique, I.A.S.',2,'Managing Director','Chennai Metro Rail Ltd., Chennai',1,21,29,1687929604,1,1687929604,1),(22,'','I. Jeyakumar, IRTS',4,'Member Secretary / Special Officer','',1,22,22,1687929611,1,1687929611,1),(23,'','C. Prem Ananth Surendran',4,'Chief Planner','',1,23,23,1687929611,1,1687929611,1),(24,'','M. Biju Panicker',4,'Town Planner','',1,24,25,1687929611,1,1687929611,1),(25,'','Poonam Sabikhi',4,'Transport Planner','',1,25,26,1687929611,1,1687929611,1),(26,'','S. Velmurugan',4,'Assistant Executive Engineer','',1,26,27,1687929611,1,1687929611,1),(27,'','C. Sathiya Narayanan',4,'Assistant Executive Engineer','',1,27,28,1687929611,1,1687929611,1),(28,'','N.P. Albert Raja',4,'Assistant Planner','',1,28,29,1687929611,1,1687929611,1),(29,'','M. Lenin Prabhu',4,'Accounts Officer','',1,29,30,1687929611,1,1687929611,1),(30,'','M. Arun Balaji',4,'Communication Expert','',1,30,31,1687929611,1,1687929611,1),(31,'','Akila. S',4,'Environmental Specialist','',1,31,32,1687929611,1,1687929611,1),(32,'','S. Jonathan Praveen Kumar',4,'Civil Engineer','',1,32,33,1687929611,1,1687929611,1),(33,'','Vignesh. T',4,'Mobility and Spatial Development Data Architect','',1,33,34,1687929612,1,1687929612,1),(34,'','Selva Sujitha. S',4,'Procurement Expert','',1,34,35,1687929612,1,1687929612,1),(35,'','Chandra J',4,'HR Executive','',1,35,36,1687929612,1,1687929612,1);
/*!40000 ALTER TABLE `cms_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_events`
--

DROP TABLE IF EXISTS `cms_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cms_events` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `location` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `document_id` bigint NOT NULL DEFAULT '0',
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_events`
--

LOCK TABLES `cms_events` WRITE;
/*!40000 ALTER TABLE `cms_events` DISABLE KEYS */;
INSERT INTO `cms_events` VALUES (1,'Work begins on updated mobility plan for Chennai','The comprehensive mobility plan will be ready in June 2024 after a survey of 50,000 households;','https://www.thehindu.com/news/cities/chennai/work-begins-on-updated-mobility-plan-for-chennai-will-help-in-improved-design-of-traffic-junctions-flyovers-say-experts/article66998740.ece','https://www.thehindu.com/news/cities/chennai/work-begins-on-updated-mobility-plan-for-chennai-will-help-in-improved-design-of-traffic-junctions-flyovers-say-experts/article66998740.ece',45,'2023-07-01','2023-07-08',1687949831);
/*!40000 ALTER TABLE `cms_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_news`
--

DROP TABLE IF EXISTS `cms_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cms_news` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `upload_file_detail` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `created_at` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_news`
--

LOCK TABLES `cms_news` WRITE;
/*!40000 ALTER TABLE `cms_news` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `location` text COLLATE latin1_general_cs NOT NULL,
  `uploaded_at` bigint unsigned NOT NULL,
  `uploaded_by` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `document_idx_1` (`type`),
  KEY `document_idx_2` (`uploaded_at`),
  KEY `document_idx_3` (`uploaded_by`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document`
--

LOCK TABLES `document` WRITE;
/*!40000 ALTER TABLE `document` DISABLE KEYS */;
INSERT INTO `document` VALUES (1,3,'Stalin.jpeg','upload/images/Stalin.jpeg',1687929586,1),(2,3,'Muthusamy.jpg','upload/images/Muthusamy.jpg',1687929586,1),(3,3,'sivasankar.jpg','upload/images/sivasankar.jpg',1687929586,1),(4,3,'Stalin.jpeg','upload/images/Stalin.jpeg',1687929586,1),(5,3,'Muthusamy.jpg','upload/images/Muthusamy.jpg',1687929586,1),(6,3,'sivasankar.jpg','upload/images/sivasankar.jpg',1687929586,1),(7,3,'Irai.jpg','upload/images/Irai.jpg',1687929586,1),(8,3,'SelviApoorva.png','upload/images/SelviApoorva.png',1687929586,1),(9,3,'Phanindra.jpg','upload/images/Phanindra.jpg',1687929586,1),(10,3,'UDHAYACHANDRAN.jpg','upload/images/UDHAYACHANDRAN.jpg',1687929586,1),(11,3,'Pradeepyadav.jpg','upload/images/Pradeepyadav.jpg',1687929586,1),(12,3,'AMUDHA.jpg','upload/images/AMUDHA.jpg',1687929586,1),(13,3,'DasMeena.png','upload/images/DasMeena.png',1687929586,1),(14,3,'ShankarJiwal.jpeg','upload/images/ShankarJiwal.jpeg',1687929586,1),(15,3,'Radhakrishnan.jpeg','upload/images/Radhakrishnan.jpeg',1687929586,1),(16,3,'NirmalRaj.jpg','upload/images/NirmalRaj.jpg',1687929586,1),(17,3,'AnshulMishra.jpg','upload/images/AnshulMishra.jpg',1687929586,1),(18,3,'RNSingh.jpg','upload/images/RNSingh.jpg',1687929586,1),(19,3,'dummy-user.png','upload/images/dummy-user.png',1687929586,1),(20,3,'Anbuabraham.jpg','upload/images/Anbuabraham.jpg',1687929586,1),(21,3,'MASiddique.JPG','upload/images/MASiddique.JPG',1687929586,1),(22,3,'jeyakumar.jpg','upload/images/jeyakumar.jpg',1687929586,1),(23,3,'prem.jpg','upload/images/prem.jpg',1687929586,1),(24,3,'biju.jpg','upload/images/biju.jpg',1687929586,1),(25,3,'poonam.jpg','upload/images/poonam.jpg',1687929586,1),(26,3,'velumurugan.jpg','upload/images/velumurugan.jpg',1687929586,1),(27,3,'sathiya.jpg','upload/images/sathiya.jpg',1687929586,1),(28,3,'albert.jpg','upload/images/albert.jpg',1687929586,1),(29,3,'lenin.jpg','upload/images/lenin.jpg',1687929586,1),(30,3,'arun.jpg','upload/images/arun.jpg',1687929586,1),(31,3,'akila.jpg','upload/images/akila.jpg',1687929586,1),(32,3,'jonathan.jpg','upload/images/jonathan.jpg',1687929586,1),(33,3,'vignesh.jpg','upload/images/vignesh.jpg',1687929586,1),(34,3,'selsuji.jpg','upload/images/selsuji.jpg',1687929586,1),(35,3,'chandra.jpg','upload/images/chandra.jpg',1687929586,1),(37,6,'1-1.jpg','upload/2023/06/28/1687930917-L4CUL.jpg',1687930919,1),(38,3,'Stalin.jpeg','upload/images/Stalin.jpeg',1687947050,1),(39,3,'Muthusamy.jpg','upload/images/Muthusamy.jpg',1687947139,1),(40,3,'sivasankar.jpg','upload/images/sivasankar.jpg',1687947146,1),(41,3,'Stalin.jpeg','upload/images/Stalin.jpeg',1687947387,1),(42,3,'Muthusamy.jpg','upload/images/Muthusamy.jpg',1687948547,1),(43,3,'sivasankar.jpg','upload/images/sivasankar.jpg',1687948557,1),(44,6,'Veichles-130323.jpeg','upload/2023/06/28/1687948937-94RZM.jpeg',1687948938,1),(45,2,'NOCHIKUPPAM FISH MARKET MARINA LOOP ROAD TRAFFIC_01.jpeg','upload/2023/06/28/1687949829-NS3DB.jpeg',1687949831,1),(46,2,'NOCHIKUPPAM FISH MARKET MARINA LOOP ROAD TRAFFIC_01.jpeg','upload/2023/06/28/1687949829-NS3DB.jpeg',1688026669,1),(47,6,'Veichles-130323.jpeg','upload/2023/06/28/1687948937-94RZM.jpeg',1688026697,1),(48,9,'CUMTA-ACT-2010.pdf','upload/2023/07/03/1688350502-3AJKR.pdf',1688350504,1),(49,9,'Street_Design_Guidelines.pdf','upload/2023/07/03/1688350585-YRX8T.pdf',1688350601,1),(50,9,'Street_Planning_Guidelines.pdf','upload/2023/07/03/1688350660-JQZ5E.pdf',1688350668,1),(51,9,'Non_Motorized_Transport_Policy.pdf','upload/2023/07/03/1688350731-F1X6U.pdf',1688350739,1),(52,9,'National_Urban_Transport_Policy_NUPT_Guidelines_2014.pdf','upload/2023/07/03/1688350805-KP2A6.pdf',1688350810,1),(53,9,'UTTIPEC_Guidelines.pdf','upload/2023/07/03/1688350867-BXZ7Y.pdf',1688350875,1),(54,9,'National_Transit_Oriented_Developoment_Policy.pdf','upload/2023/07/03/1688350943-93H6X.pdf',1688350946,1),(55,9,'Metro_Rail_Policy_2017.pdf','upload/2023/07/03/1688350998-P5LM7.pdf',1688351000,1),(56,9,'Chennai_Comprehensive_Transport2010.pdf','upload/2023/07/03/1688351149-9NBNR.pdf',1688351152,1),(57,9,'Comprehensive_Mobility.pdf','upload/2023/07/03/1688351194-2IGL9.pdf',1688351200,1),(58,9,'DPR-for-Chennai-Metro-Rail-Phase-II4.pdf','upload/2023/07/03/1688351243-TVHUZ.pdf',1688351255,1),(59,9,'DPR_Velachery.pdf','upload/2023/07/03/1688351301-9R7TB.pdf',1688351304,1),(60,9,'1_cumta.pdf','upload/2023/07/03/1688351394-SDFT5.pdf',1688351395,1),(61,9,'G.O.10_2019 CUMTA Act effective date.pdf','upload/2023/07/03/1688351548-RA48K.pdf',1688351550,1),(62,9,'G.O. 11 Rules of CUMTA_2019.pdf','upload/2023/07/03/1688351580-E09RU.pdf',1688351582,1),(63,9,'GO MS 70 - Chennai City Partnership Program.pdf','upload/2023/07/03/1688351611-L68KA.pdf',1688351612,1),(64,9,'G.O. (Ms.) No.146, dt 16.12.2021 Act.pdf','upload/2023/07/03/1688351653-H75WD.pdf',1688351655,1),(65,9,'G.O.(Ms).No.165, Subcommittee creation dated 09.09.2022.pdf','upload/2023/07/03/1688351684-IVLVP.pdf',1688351686,1),(66,9,'Authority_Meeting.pdf','upload/2023/07/03/1688351769-D9EC3.pdf',1688351771,1),(67,6,'Cumta_PressRelease1.jpeg','upload/2023/07/03/1688352026-DZANK.jpeg',1688352028,1),(68,6,'Cumta_PressRelease.jpeg','upload/2023/07/03/1688352143-PGVXQ.jpeg',1688352145,1),(69,3,'RNSingh.jpg','upload/images/RNSingh.jpg',1688368927,1),(70,3,'RNSingh.jpg','upload/images/RNSingh.jpg',1688368959,1),(71,4,'ToR_Road-Safety-Expert_-CUMTA_Chennai-Unified-Metropolitan-Transport-Authority.pdf','upload/2023/07/03/1688369094-N1RCO.pdf',1688369096,1),(72,4,'ToR_Social-Expert_-CUMTA_Chennai-Unified-Metropolitan-Transport-Authority.pdf','upload/2023/07/03/1688369152-AYMN9.pdf',1688369155,1),(73,6,'Cumta_PressRelease1.jpeg','upload/2023/07/03/1688352026-DZANK.jpeg',1688797765,1),(74,3,'DasMeena.png','upload/2023/07/10/1688993768-84Q3J.png',1688993772,1),(75,3,'Sandeep_Rai.png','upload/2023/07/10/1688993957-P7EQ4.png',1688993960,1),(76,3,'Karthikeyan_I.A.S..png','upload/2023/07/10/1688995200-P24H2.png',1688995203,1),(77,9,'Non_Motorized_Transport_Policy.pdf','upload/2023/07/03/1688350731-F1X6U.pdf',1691395418,1),(78,9,'script.php.jpg','upload/2023/08/22/1692727284-K70MZ.jpg',1692727294,1),(79,9,'script.php%00.jpg','upload/2023/08/22/1692727599-KM659.jpg',1692727605,1),(80,9,'script.php%00.jpg','upload/2023/08/22/1692727599-KM659.jpg',1692727617,1),(81,9,'CUMTA-ACT-2010.pdf','upload/2023/07/03/1688350502-3AJKR.pdf',1692727859,1),(82,6,'script.php.jpg','upload/2023/08/23/1692729033-SJA4P.jpg',1692729036,1),(83,9,'CUMTA-ACT-2010.pdf','upload/2023/09/07/1694098517-J0O5S.pdf',1694098519,1),(84,6,'Image123.jpeg','upload/2023/09/08/1694131915-0K1KK.jpeg',1694131920,1),(85,4,'ToR_Road-Safety-Expert_-CUMTA_Chennai-Unified-Metropolitan-Transport-Authority.pdf','upload/2023/07/03/1688369094-N1RCO.pdf',1694145382,1),(86,4,'ToR_Social-Expert_-CUMTA_Chennai-Unified-Metropolitan-Transport-Authority.pdf','upload/2023/07/03/1688369152-AYMN9.pdf',1694145398,1),(87,4,'ToR_Road-Safety-Expert_-CUMTA_Chennai-Unified-Metropolitan-Transport-Authority.pdf','upload/2023/07/03/1688369094-N1RCO.pdf',1694145422,1),(88,4,'ToR_Road-Safety-Expert_-CUMTA_Chennai-Unified-Metropolitan-Transport-Authority.pdf','upload/2023/07/03/1688369094-N1RCO.pdf',1694170908,1),(89,4,'Senior Data Integration Engineer -ToR-01-09-23.pdf','upload/2023/09/08/1694178674-CQR5N.pdf',1694178705,1),(90,4,'Urban-Planner-ToR-01-09-23.pdf','upload/2023/09/08/1694183285-1X6C0.pdf',1694183300,1),(91,4,'Social-Expert-ToR-01-09-23.pdf','upload/2023/09/08/1694183321-0GJCD.pdf',1694183332,1),(92,5,'MRTSTENDERDOCUMENT.pdf','upload/2023/09/14/1694676874-QAJ8G.pdf',1694676877,1),(93,5,'MRTSTENDERDOCUMENT.pdf','upload/2023/09/14/1694676874-QAJ8G.pdf',1694680093,1),(94,5,'MRTSTENDERDOCUMENT.pdf','upload/2023/09/14/1694676874-QAJ8G.pdf',1694690553,1),(95,5,'MRTSTENDERDOCUMENT.pdf','upload/2023/09/14/1694676874-QAJ8G.pdf',1694705560,1);
/*!40000 ALTER TABLE `document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `notification_title` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `notification_type` tinyint NOT NULL DEFAULT '0',
  `notification_text` varchar(126) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `notification_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `status` tinyint NOT NULL DEFAULT '0',
  `notification_end_date` date DEFAULT NULL,
  `added_at` bigint NOT NULL,
  `added_by` bigint NOT NULL,
  `modified_at` bigint NOT NULL,
  `modified_by` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `notification_idx_1` (`notification_type`),
  KEY `notification_idx_2` (`status`),
  KEY `notification_idx_3` (`added_at`),
  KEY `notification_idx_4` (`added_by`),
  KEY `notification_idx_5` (`modified_at`),
  KEY `notification_idx_6` (`modified_by`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'Press Release',0,'CUMTA comes up with SOPs for kilambakkam terminus operation','https://staging-cumta.dcxworks.com/home/index.html#/press-releases',1,'2023-08-31',1689913816,1,1689913816,1),(2,'Event',0,'Work begins on updated mobility plan for Chennai','https://staging-cumta.dcxworks.com/home/index.html#/events',1,'2023-08-31',1689913861,1,1689913861,1),(3,'Survey',0,'Click here to take the Citizen Survey on Comprehensive Mobility Plan','https://staging-cumta.dcxworks.com/home/#/landing/comprehensive-mobility-plan',1,'2023-12-31',1691389809,1,1691389809,1);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `press_release`
--

DROP TABLE IF EXISTS `press_release`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `press_release` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `document_id` bigint NOT NULL DEFAULT '0',
  `press_release_date` varchar(16) COLLATE latin1_general_cs NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `press_release`
--

LOCK TABLES `press_release` WRITE;
/*!40000 ALTER TABLE `press_release` DISABLE KEYS */;
INSERT INTO `press_release` VALUES (2,'Cumta comes up with SOPs for Kilambakkam terminus operations','Cumta comes up with SOPs for Kilambakkam terminus operations','https://www.thehindu.com/news/cities/chennai/work-begins-on-updated-mobility-plan-for-chennai-will-help-in-improved-design-of-traffic-junctions-flyovers-say-experts/article66998740.ece',67,'15/06/2023'),(3,'Updated Comprehensive mobility plan by June 2024','Updated Comprehensive mobility plan by June 2024','',68,'22/06/2023');
/*!40000 ALTER TABLE `press_release` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password`
--

DROP TABLE IF EXISTS `reset_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_password` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `reset_code` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `otp_count` int NOT NULL DEFAULT '0',
  `last_otp_at` bigint DEFAULT NULL,
  `otp_reset_time` bigint DEFAULT NULL,
  `otp_verified_count` tinyint NOT NULL DEFAULT '0',
  `status` tinyint DEFAULT NULL,
  `request_at` bigint DEFAULT NULL,
  `valid_upto` bigint DEFAULT NULL,
  `next_verify_time` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `reset_password_idx_1` (`user_id`),
  KEY `reset_password_idx_2` (`otp_count`),
  KEY `reset_password_idx_3` (`reset_code`),
  KEY `reset_password_idx_4` (`status`),
  KEY `reset_password_idx_5` (`valid_upto`),
  KEY `reset_password_idx_6` (`request_at`),
  KEY `reset_password_idx_7` (`otp_reset_time`),
  KEY `reset_password_idx_8` (`otp_verified_count`),
  CONSTRAINT `reset_password_fk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password`
--

LOCK TABLES `reset_password` WRITE;
/*!40000 ALTER TABLE `reset_password` DISABLE KEYS */;
INSERT INTO `reset_password` VALUES (1,1,'259356',3,1690896623,1690983023,0,0,1687756696,1687843096,0);
/*!40000 ALTER TABLE `reset_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resources` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link` text COLLATE latin1_general_cs NOT NULL,
  `resources_type` tinyint NOT NULL,
  `option_type` tinyint NOT NULL,
  `document_id` bigint NOT NULL DEFAULT '0',
  `sub_committee_type` tinyint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `resources_idx_1` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` VALUES (3,'CUMTA ACT','1\">',1,2,83,0,1),(4,'Street Implementation Guidelines','',2,2,49,0,1),(5,'Street Planning Guidelines','',2,2,50,0,1),(6,'Non-Motorized Transport Policy','',2,2,51,0,1),(7,'NUTP Guidelines 2014','',2,2,52,0,1),(8,'UTTIPEC Guidelines','',2,2,53,0,1),(9,'National TOD policy','',2,2,54,0,1),(10,'Metro Rail policy','',2,2,55,0,1),(11,'Indian Road Congress','https://law.resource.org/pub/in/bis/manifest.irc.html',3,1,0,0,1),(12,'CCTS 2010','',4,2,56,0,1),(13,'Comprehensive Mobility Plan 2019','',4,2,57,0,1),(14,'DPR for Metro Rail','',4,2,58,0,1),(15,'DPR for Velachery Air Space Exploitation','',4,2,59,0,1),(16,'CUMTA ACT','',5,2,60,0,1),(17,'CUMTA ACT','',5,2,61,0,1),(18,'Rules of CUMTA','',5,2,62,0,1),(19,'City Partnership Program','',5,2,63,0,1),(20,'CUMTA Act','',5,2,64,0,1),(21,'Subcommittee Creation','',5,2,65,0,1),(22,'Authority Minutes','',6,2,66,0,1),(23,'Road Dataset','https://github.com/chennai-cumta/road_dataset',7,1,0,0,1);
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint NOT NULL,
  `name` varchar(64) COLLATE latin1_general_cs NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_idx_1` (`type`),
  KEY `role_idx_2` (`name`),
  KEY `role_idx_3` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,1,'Super Admin',1);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `address_line_1` varchar(128) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `address_line_2` varchar(128) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `pincode` varchar(16) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `email` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `primary_phone` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `additional_phone` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `map_link` text COLLATE latin1_general_cs,
  `facebook` varchar(256) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `instagram` varchar(256) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `twitter` varchar(256) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `linkedin` varchar(256) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `web_manager_name` varchar(128) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `web_manager_title` varchar(128) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `hr_email` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `mtc_fare_link` text COLLATE latin1_general_cs,
  `cmrl_fare_link` text COLLATE latin1_general_cs,
  `site_last_update_at` bigint NOT NULL DEFAULT '0',
  `last_updated` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (1,'MetroS, 4th Floor, No: 327, Anna Salai','Nandanam, Chennai, Tamilnadu, India','600 035','office@cumta.in','044 24322377','044 28552355','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0595265648376!2d80.2431707!3d13.031881299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267924c92577f%3A0xd8d9d6e0abaa3b20!2sChennai%20Unified%20Metropolitan%20Transport%20Authority%20(CUMTA)!5e0!3m2!1sen!2sin!4v1684952158905!5m2!1sen!2sin','https://www.facebook.com/profile.php?id=100084011167997&mibextid=LQQJ4d','https://www.instagram.com/cumtachennai/','https://twitter.com/cumtaofficial','https://www.linkedin.com/company/chennai-unified-metropolitan-transport-authority-cumta/','Arun Balaji M','Communications Expert','cumtaoffice@tn.gov.in','https://mtcbus.tn.gov.in/Home/fares','https://chennaimetrorail.org/wp-content/uploads/2021/02/Fare-chart-for-all-stns.pdf',1695020117,0);
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smtp_mail_settings`
--

DROP TABLE IF EXISTS `smtp_mail_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smtp_mail_settings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `host_name` varchar(128) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `port_number` varchar(16) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `sender_email` varchar(64) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `sender_password` varchar(128) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `is_ssl_enabled` tinyint NOT NULL,
  `added_at` bigint NOT NULL,
  `added_by` bigint NOT NULL,
  `modified_at` bigint NOT NULL,
  `modified_by` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `smtp_mail_settings_idx_1` (`added_at`),
  KEY `smtp_mail_settings_idx_2` (`added_by`),
  KEY `smtp_mail_settings_idx_3` (`modified_at`),
  KEY `smtp_mail_settings_idx_4` (`modified_by`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smtp_mail_settings`
--

LOCK TABLES `smtp_mail_settings` WRITE;
/*!40000 ALTER TABLE `smtp_mail_settings` DISABLE KEYS */;
INSERT INTO `smtp_mail_settings` VALUES (1,'smtp.office365.com','587','office@cumta.in','ChennaiUMTA@123',1,1690896485,1,1690896485,1);
/*!40000 ALTER TABLE `smtp_mail_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tenders`
--

DROP TABLE IF EXISTS `tenders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tender_no` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tender_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `working_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qualification` varchar(512) COLLATE latin1_general_cs NOT NULL,
  `tender_type` varchar(256) COLLATE latin1_general_cs NOT NULL,
  `payment_method` varchar(16) COLLATE latin1_general_cs NOT NULL,
  `emd_amount` varchar(16) COLLATE latin1_general_cs NOT NULL,
  `pre_bid_meeting_date` date DEFAULT NULL,
  `bid_start_date` date DEFAULT NULL,
  `bid_end_date` date DEFAULT NULL,
  `bid_meeting_venue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `apply_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `type` tinyint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `document_id` bigint NOT NULL DEFAULT '0',
  `awarded_name` varchar(128) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `reference_number` varchar(16) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `awarded_date` date DEFAULT NULL,
  `tender_enquiry_mode` varchar(512) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `publication_date` date DEFAULT NULL,
  `created_at` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `modified_at` bigint unsigned NOT NULL,
  `modified_by` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `tenders_idx_1` (`qualification`),
  KEY `tenders_idx_2` (`tender_type`),
  KEY `tenders_idx_3` (`payment_method`),
  KEY `tenders_idx_4` (`emd_amount`),
  KEY `tenders_idx_5` (`pre_bid_meeting_date`),
  KEY `tenders_idx_6` (`bid_start_date`),
  KEY `tenders_idx_7` (`bid_end_date`),
  KEY `tenders_idx_8` (`type`),
  KEY `tenders_idx_9` (`status`),
  KEY `tenders_idx_10` (`document_id`),
  KEY `tenders_idx_11` (`created_at`),
  KEY `tenders_idx_12` (`created_by`),
  KEY `tenders_idx_13` (`modified_at`),
  KEY `tenders_idx_14` (`modified_by`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tenders`
--

LOCK TABLES `tenders` WRITE;
/*!40000 ALTER TABLE `tenders` DISABLE KEYS */;
INSERT INTO `tenders` VALUES (4,'CUMTA/TN/9837/003','Selection of consultant for consultancy','Selection of consultant for consultancy','','Open','','',NULL,'2023-09-14','2023-09-29','','https://tntenders.gov.in/nicgep/app?page=FrontEndLatestActiveTendersOrgwise&service=page&org=Chennai%20Unified%20Metropolitian%20Transport%20Authority',1,1,92,'','',NULL,'','2023-09-14',0,1,0,1);
/*!40000 ALTER TABLE `tenders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(64) COLLATE latin1_general_cs NOT NULL,
  `last_name` varchar(64) COLLATE latin1_general_cs NOT NULL,
  `username` varchar(64) COLLATE latin1_general_cs NOT NULL,
  `password` varchar(512) COLLATE latin1_general_cs NOT NULL,
  `email` varchar(64) COLLATE latin1_general_cs NOT NULL,
  `mobile` varchar(16) COLLATE latin1_general_cs NOT NULL,
  `role_id` tinyint unsigned NOT NULL,
  `timezone` varchar(128) COLLATE latin1_general_cs NOT NULL,
  `user_activation_token` varchar(64) COLLATE latin1_general_cs NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` bigint NOT NULL,
  `modified_at` bigint NOT NULL,
  `created_by` bigint NOT NULL,
  `modified_by` bigint NOT NULL,
  `last_logged_in` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `user_idx_1` (`email`),
  KEY `user_idx_2` (`password`),
  KEY `user_idx_3` (`mobile`),
  KEY `user_idx_4` (`role_id`),
  KEY `user_idx_5` (`timezone`),
  KEY `user_idx_6` (`status`),
  KEY `user_idx_7` (`user_activation_token`),
  KEY `user_idx_8` (`created_at`),
  KEY `user_idx_9` (`modified_at`),
  KEY `user_idx_10` (`created_by`),
  KEY `user_idx_11` (`modified_by`),
  CONSTRAINT `user_fk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Super','Admin','mscumta@gmail.com','89d618db672552673df9a808cd8b4d4cd8831171816630ad13ea3e5f829986863310c221b311102f8bf722bd8e3b2ca2f8ed57d167e8ae30f42899ba090c3bf3','mscumta@gmail.com','9994054717',1,'Asia/Kolkata','gkiSX',1,1686745561,1686745561,0,0,1695789550);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitor_count`
--

DROP TABLE IF EXISTS `visitor_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitor_count` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `visitor_count` bigint NOT NULL DEFAULT '0',
  `added_at` bigint NOT NULL,
  `added_by` bigint NOT NULL,
  `modified_at` bigint NOT NULL,
  `modified_by` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `visitor_count_idx_1` (`added_at`),
  KEY `visitor_count_idx_2` (`added_by`),
  KEY `visitor_count_idx_3` (`modified_at`),
  KEY `visitor_count_idx_4` (`modified_by`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor_count`
--

LOCK TABLES `visitor_count` WRITE;
/*!40000 ALTER TABLE `visitor_count` DISABLE KEYS */;
INSERT INTO `visitor_count` VALUES (1,1132,1695799680,1,1695799680,1);
/*!40000 ALTER TABLE `visitor_count` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-27  9:52:41
