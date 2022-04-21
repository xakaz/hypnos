-- MariaDB dump 10.19  Distrib 10.6.7-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: hypnos
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accueil`
--

DROP TABLE IF EXISTS `accueil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accueil` (
  `accueil_id` int NOT NULL AUTO_INCREMENT,
  `accueil_title` varchar(100) NOT NULL,
  `accueil_image` varchar(100) NOT NULL,
  `accueil_description` text NOT NULL,
  `accueil_alt` varchar(30) NOT NULL,
  PRIMARY KEY (`accueil_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accueil`
--

LOCK TABLES `accueil` WRITE;
/*!40000 ALTER TABLE `accueil` DISABLE KEYS */;
INSERT INTO `accueil` VALUES (1,'Reception','reception.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.','image reception'),(2,'Evenements','events.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.','image evenements'),(3,'Bien-être','wellness.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.','image massage'),(4,'Reception','reception.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.','image reception'),(5,'Evenements','events.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.','image evenements'),(6,'Bien-être','wellness.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.','image massage');
/*!40000 ALTER TABLE `accueil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `login` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  PRIMARY KEY (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('admin','$2y$10$uMOJ9zJ1dEATwoEYjFByDeVlssSxB1w5TAoS.eGBsDhh5omN95Q0C');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bienetre`
--

DROP TABLE IF EXISTS `bienetre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bienetre` (
  `bienEtre_id` int NOT NULL AUTO_INCREMENT,
  `bienEtre_image` varchar(150) NOT NULL,
  `bienEtre_description` varchar(150) NOT NULL,
  `bienEtre_alt` varchar(150) NOT NULL,
  `bienEtre_title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bienEtre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bienetre`
--

LOCK TABLES `bienetre` WRITE;
/*!40000 ALTER TABLE `bienetre` DISABLE KEYS */;
INSERT INTO `bienetre` VALUES (1,'massage.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','massage','Massage'),(2,'pool.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','piscine','Piscine'),(3,'spaPrivatif.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','spa','Spa'),(4,'sport.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','salle de sport','Salle de sport');
/*!40000 ALTER TABLE `bienetre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `booking_user` int NOT NULL,
  `booking_suite` int NOT NULL,
  `booking_start` bigint NOT NULL,
  `booking_end` bigint NOT NULL,
  `booking_date` bigint NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,31,7,1649866751000,1649953151000,1650298754000),(12,31,7,1650319200000,1650492000000,1650308014000),(16,31,14,1651096800000,1651269600000,1650355700000),(18,31,2,1650492000000,1650578400000,1650370263000),(20,31,7,1650405600000,1650578400000,1650376769000),(32,31,4,1650924000000,1651096800000,1650441232000);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evenements`
--

DROP TABLE IF EXISTS `evenements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evenements` (
  `evenements_id` int NOT NULL AUTO_INCREMENT,
  `evenements_image` varchar(150) NOT NULL,
  `evenements_description` varchar(150) NOT NULL,
  `evenements_alt` varchar(150) NOT NULL,
  `evenements_title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`evenements_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evenements`
--

LOCK TABLES `evenements` WRITE;
/*!40000 ALTER TABLE `evenements` DISABLE KEYS */;
INSERT INTO `evenements` VALUES (1,'baptism.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','reception','Baptèmes & Mariages'),(2,'business.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','breakfast','Repas d\'affaires'),(3,'party.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','chef','Concerts & orchestres');
/*!40000 ALTER TABLE `evenements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotels` (
  `hotel_id` int NOT NULL AUTO_INCREMENT,
  `hotel_name` varchar(150) NOT NULL,
  `hotel_adresse` varchar(150) NOT NULL,
  `hotel_cp` varchar(5) NOT NULL,
  `hotel_ville` varchar(100) NOT NULL,
  `hotel_telephone` varchar(15) NOT NULL,
  `hotel_description` text NOT NULL,
  `hotel_image` varchar(150) NOT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (2,'Four Seasons Hotel George V','31 Avenue George V','75008','Paris','01.49.52.70.00','Hotel haut de gamme richement d&eacute;cor&eacute;, chambres/suites &eacute;l&eacute;gantes, restaurants r&eacute;put&eacute;s, bar chic et spa de luxe.','paris.jpg'),(3,'Hotel Dieu Intercontinental','1 Pl. Daviel','13002','Marseille','04.13.42.42.42','H&ocirc;tel haut de gamme comprenant piscine int&eacute;rieure, spa, restaurant de renom et bar avec terrasse.','marseille.jpg'),(4,'Sainte-Barbe Hotel et Spa Le Conquet','Pointe Sainte Barbe','29217','Le Conquet','02.98.48.46.13','Logements chaleureux avec vue sur mer dans h&ocirc;tel haut de gamme proposant restaurant, bar sur toit et spa.','leConquet.jpg'),(5,'Royal Champagne Hotel et Spa','9 Rue de la R&eacute;publique - Hameau de, Rue de Bellevue','51160','Champillon','03.26.52.87.11','H&ocirc;tel chic avec restaurant haut de gamme et chambres &eacute;pur&eacute;es avec t&eacute;l&eacute;vision &agrave; &eacute;cran plat et Wi-Fi.','champillon.jpg'),(6,'InterContinental Lyon - Hotel Dieu','20 Quai Jules Courmont','69002','Lyon','04.26.99.23.23','Chambres et suites &eacute;l&eacute;gantes dans h&ocirc;tel majestueux avec restaurant chic, jardins et vue sur fleuve.','lyon.jpg'),(7,'La Cour des Consuls Hotel et Spa','46 Rue des Couteliers','31000','Toulouse','05.67.16.19.99','H&ocirc;tel raffin&eacute; avec restaurant, bar chic, cour, spa et hammam.','toulouse.jpg'),(14,'Hotel Renaissance Bordeaux','16 Rue de Gironde','33000','Bordeaux','05.19.80.02.00','Renaissance Bordeaux Hotel dispose d&#039;un restaurant, d&#039;une salle de sport, d&#039;un bar et d&#039;un salon commun. Cet &eacute;tablissement propose diverses prestations, dont une r&eacute;ception ouverte 24h/24, un service d&rsquo;&eacute;tage et une connexion Wi-Fi gratuite dans l&rsquo;ensemble de ses locaux. Vous profiterez d&rsquo;un service de concierge et d&rsquo;une piscine int&eacute;rieure.','bordeaux.jpg');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(150) NOT NULL,
  `image_fichier` varchar(150) NOT NULL,
  `image_suite` int NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `image_suite` (`image_suite`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`image_suite`) REFERENCES `suites` (`suite_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'galerie','galerie.jpg',5),(2,'galerie','lagalerie1.jpg',5),(3,'galerie','lagalerie2.jpg',5),(4,'lamuse','muse.jpg',5),(5,'lamuse','lamuse1.jpg',5),(6,'lamuse','lamuse2.jpg',5),(7,'josephine','josephine1.jpg',13),(8,'josephine','josephine2.jpg',13),(9,'josephine','josephine3.jpg',13),(10,'panoramique','panoramique1.jpg',12),(11,'panoramique','panoramique2.jpg',12),(12,'panoramique','panoramique3.jpg',12),(13,'deluxe','deluxe1.jpg',11),(14,'deluxe','deluxe2.jpg',11),(15,'deluxe','deluxe3.jpg',11),(16,'superieure','superieure1.jpg',10),(17,'superieure','superieure2.jpg',10),(18,'superieure','superieure3.jpg',10),(19,'deluxe','deluxe1.jpg',15),(20,'deluxe','deluxe2.jpg',15),(21,'deluxe','deluxe3.jpg',15),(22,'superieure','superieure1.jpg',14),(23,'superieure','superieure2.jpg',14),(24,'superieure','superieure3.jpg',14),(25,'classique','classique1.jpg',8),(26,'classique','classique2.jpg',8),(27,'classique','classique3.jpg',8),(28,'premium','premium1.jpg',9),(29,'premium','premium2.jpg',9),(30,'premium','premium3.jpg',9),(31,'4saisons','4saisons1.jpg',7),(32,'4saisons','4saisons2.jpg',7),(33,'4saisons','4saisons3.jpg',7),(34,'premier','premier1.jpg',6),(35,'premier','premier2.jpg',6),(36,'deluxe','deluxe1.jpg',3),(37,'deluxe','deluxe2.jpg',3),(38,'superieure','superieure1.jpg',2),(39,'superieure','superieure2.jpg',2),(40,'superieure','superieure3.jpg',2);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manager` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prenom` varchar(150) NOT NULL,
  `nom` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `manager_hotel` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manager_hotel` (`manager_hotel`),
  CONSTRAINT `manager_ibfk_1` FOREIGN KEY (`manager_hotel`) REFERENCES `hotels` (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (1,'Jean-Claude','Van Damme','kickboxing@email.com','$2y$10$1AQCRDhT9uLmfrhsnnKojePc85P89Q69xrrVUR6d8K3VIr1EYgBIG',6),(2,'Takeshi','Kitano','sonatine@email.fr','$2y$10$uA3pqCn4k8i2Y8oxsP9qv.0zPoCY2.tbRw9gwz/cRmGMAW15ez4eS',3),(3,'Michelle','Pfeiffer','espritRebelle@email.fr','$2y$10$7ArYfRrPEjDkYQGfgdJ3yeFNhdzJ/yFpvkrrqMKgc7KMYoDOgHb7m',5),(4,'Uma','Thurman','pulpfiction@email.fr','$2y$10$jgeji98a7.miQyd9QGjCzODqU4jHyk80NDrMbSZorVTQTXgm0POui',4),(5,'Quentin','Tarantino','django@email.fr','$2y$10$R72brEUe2a5EOnTihizha.pIaWT6gvx50RD6Qghbt87HHLZob7U6O',7),(6,'Jean','Reno','leon@email.com','$2y$10$YdZH9mak.7TyLATZMvOE8evnctKYkIuC1P7S3JU9QBNi/j.Lkh6fe',2),(7,'Julia','Roberts','prettyWoman@email.fr','$2y$10$uuQy3POnyMx4WeJfXkhxE.eP36W229vnG7.r5EqKC0mEqphSYSWqC',14);
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurants` (
  `restaurant_id` int NOT NULL AUTO_INCREMENT,
  `restaurant_image` varchar(150) NOT NULL,
  `restaurant_description` varchar(150) NOT NULL,
  `restaurant_alt` varchar(150) NOT NULL,
  `restaurant_title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`restaurant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'bar.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','bar','Bar'),(2,'breakfast.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','breakfast','Petit déjeuner'),(3,'chef.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','chef','Chef étoilé'),(4,'lunch.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!','lunch','Repas');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suites`
--

DROP TABLE IF EXISTS `suites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suites` (
  `suite_id` int NOT NULL AUTO_INCREMENT,
  `suite_name` varchar(150) NOT NULL,
  `suite_description` text NOT NULL,
  `suite_image` varchar(150) NOT NULL,
  `suite_hotel` int NOT NULL,
  `suite_prix` float DEFAULT NULL,
  `suite_link` text,
  PRIMARY KEY (`suite_id`),
  KEY `suite_hotel` (`suite_hotel`),
  CONSTRAINT `suites_ibfk_1` FOREIGN KEY (`suite_hotel`) REFERENCES `hotels` (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suites`
--

LOCK TABLES `suites` WRITE;
/*!40000 ALTER TABLE `suites` DISABLE KEYS */;
INSERT INTO `suites` VALUES (2,'Superieure','28m2, Cette chambre dispose d\'une connexion Wi-Fi gratuite, d\'une télévision, d\'un minibar avec boissons sans alcool gratuites, d\'un plateau/bouilloire et d\'une machine à café Nespresso. Sa salle de bains est dotée d\'une douche à effet pluie ou d\'une baignoire et d\'un système audio. De plus, vous bénéficierez d\'un accès au salon.','ToulouseRoom1.jpg',7,255,'https://www.bookin.com/'),(3,'Deluxe','35m2, Cette chambre dispose d\'une connexion Wi-Fi gratuite, d\'une télévision, d\'un minibar avec boissons sans alcool gratuites, d\'un plateau/bouilloire et d\'une machine à café Nespresso. Sa salle de bains est dotée d\'une douche à effet pluie ou d\'une baignoire et d\'un système audio. De plus, vous bénéficierez d\'un accès au salon.','ToulouseRoom2.jpg',7,355,'https://www.bookin.com/'),(4,'Muse','23m2, climatisation, salon/espace détente, grand lit double','muse.jpg',14,193,'https://www.bookin.com/'),(5,'Galerie','28m2, Cette chambre dispose d\'une connexion Wi-Fi gratuite, d\'un lit king-size, de la climatisation. Le service d\'étage est disponible 24h/24, 7j/7','galerie.jpg',14,243,'https://www.bookin.com/'),(6,'Premier','55m2, extrêmement spacieuse, elle offre une vue sur la cour de marbre et les avenues des alentours. Les grandes fenêtres donnent sur l\'avenue George V, l\'élégante cour de marbre, l\'avenue Pierre 1er de Serbie et les fantastiques avenues des environs.','georgesKS.jpg',2,250,'https://www.bookin.com/'),(7,'Quatre Saison','75m2, Cette suite gracieuse dispose d\'un hall menant à un grand salon et à une chambre discrètement isolée par des portes coulissantes. Dotée de lustres étincelants ainsi que d\'un coin salon spacieux pourvu de meubles d\'époque élégants, elle comprend aussi un grand bureau ainsi que toutes les commodités modernes.','4saisons.jpg',2,350,'https://www.bookin.com/'),(8,'Classique','28m2, Offrant une vue sur la ville ou le jardin, ces chambres avec salle de bains privative sont décorées dans un style moderne et disposent d\'une télévision à écran plat, d\'un minibar, d\'une bouilloire électrique ainsi que de matériel de repassage.','classiqueMars.jpg',3,347,'https://www.bookin.com/'),(9,'Premium','35m2, Offrant une vue sur la ville ou le jardin, ces chambres avec salle de bains privative sont décorées dans un style moderne et disposent d\'une télévision à écran plat, d\'un minibar, d\'une bouilloire électrique ainsi que de matériel de repassage.','premiumMars.jpg',3,511,'https://www.bookin.com/'),(10,'Superieure','20m2,Grâce à leur belle situation et leur avancée sur la mer, les chambres supérieures vous transporteront au-dessus de l’eau. Par beau temps ou lors d’une tempête, la vue y est époustouflante.','chambreSupLeConquet.jpg',4,320,'https://www.bookin.com/'),(11,'Deluxe','38m2 + terrasse, Les chambres Deluxe avec terrasse privative seront votre havre de paix face à la mer. Très spacieuses, elles sont pourvues d’un confort inégalé et d’attentions précieuses pour rendre votre séjour agréable.','chambreLuxLeConquet.jpg',4,352,'https://www.bookin.com/'),(12,'Panoramique','58m2 - Cette suite exclusive est située en angle et offre une vue dégagée sur la vallée de la Champagne.','suitePanoramique.jpg',5,270,'https://www.bookin.com/'),(13,'Josephine','107m2 - Située au premier étage et offrant une vue sur la vallée de la Champagne, cette suite comprend un salon séparé adjacent à la chambre principale.','suiteJosephine.jpg',5,320,'https://www.bookin.com/'),(14,'Superieure','30m2 - 1 lit King-Size, vue sur le jardin, insonoris&eacute;e, TV, climatisation','chambreSupLyon.jpg',6,180,'https://www.bookin.com/'),(15,'Deluxe','35m2, 1 lit King-Size, vue sur le jardin, insonorisée, TV, climatisation','chambreLuxLyon.jpg',6,220,'https://www.bookin.com/');
/*!40000 ALTER TABLE `suites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_prenom` varchar(150) NOT NULL,
  `user_nom` varchar(150) NOT NULL,
  `user_mail` varchar(150) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (31,'Loic','Hernandez','xakaz31330@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-20 19:21:22
