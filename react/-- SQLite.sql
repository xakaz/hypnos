-- BEGIN TRANSACTION;
CREATE TABLE hotels (
	hotel_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	hotel_name	VARCHAR(150) NOT NULL,
	hotel_adresse	VARCHAR(150) NOT NULL,
	hotel_cp	VARCHAR(5) NOT NULL,
	hotel_ville	VARCHAR(100) NOT NULL,
	hotel_telephone	VARCHAR(15) NOT NULL,
	hotel_description	TEXT NOT NULL,
	hotel_image	VARCHAR(150) NOT NULL,
	hotel_plan	VARCHAR(200)
);
CREATE TABLE suites (
	suite_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	suite_name	VARCHAR(150) NOT NULL,
	suite_description	TEXT NOT NULL,
	suite_image	VARCHAR(150) NOT NULL,
	suite_hotel	INT NOT NULL,
	suite_prix	FLOAT,
	suite_link	TEXT,
	FOREIGN KEY(suite_hotel) REFERENCES hotels(hotel_id)
);
CREATE TABLE images (
	image_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	image_name	VARCHAR(150) NOT NULL,
	image_fichier	VARCHAR(150) NOT NULL,
	image_suite	INT NOT NULL,
	FOREIGN KEY(image_suite) REFERENCES suites(suite_id)
);
CREATE TABLE user (
	user_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_prenom	varchar(150) NOT NULL,
	user_nom	varchar(150) NOT NULL,
	user_mail	varchar(150) NOT NULL
);

CREATE TABLE role (
    role_id integer not null primary key AUTO_INCREMENT,
    role_nom varchar(100) not null,
    );

 CREATE TABLE service (
    service_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    service_image VARCHAR (150) NOT NULL,
    service_description VARCHAR (150) NOT NULL,
    service_titre VARCHAR (150) NOT NULL
    service_role INTEGER, 
    FOREIGN KEY (service_role)
    REFERENCES role (role_id)
    );
CREATE TABLE admin (
	login	VARCHAR(100) NOT NULL PRIMARY KEY,
	password	VARCHAR(150) NOT NULL
);
CREATE TABLE manager (
	id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	prenom	VARCHAR(150) NOT NULL ,
	nom	VARCHAR(150) NOT NULL,
	email	VARCHAR(150) NOT NULL,
	password	VARCHAR(150) NOT NULL,
	manager_hotel	INT,
	FOREIGN KEY(manager_hotel) REFERENCES hotels(hotel_id)
);
CREATE TABLE booking (
	booking_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	booking_user	INT NOT NULL,
	booking_suite	INT NOT NULL,
	booking_start	INT NOT NULL,
	booking_end	INT NOT NULL,
	booking_date	INT NOT NULL
);
INSERT INTO hotels (hotel_id,hotel_name,hotel_adresse,hotel_cp,hotel_ville,hotel_telephone,hotel_description,hotel_image) VALUES 
 (2,'Four Seasons Hotel George V','31 Avenue George V','75008','Paris','01.49.52.70.00','Hotel haut de gamme richement d&eacute;cor&eacute;, chambres/suites &eacute;l&eacute;gantes, restaurants r&eacute;put&eacute;s, bar chic et spa de luxe.','paris.jpg'),
 (3,'Hotel Dieu Intercontinental','1 Pl. Daviel','13002','Marseille','04.13.42.42.42','H&ocirc;tel haut de gamme comprenant piscine int&eacute;rieure, spa, restaurant de renom et bar avec terrasse.','marseille.jpg'),
 (4,'Sainte-Barbe Hotel et Spa Le Conquet','Pointe Sainte Barbe','29217','Le Conquet','02.98.48.46.13','Logements chaleureux avec vue sur mer dans h&ocirc;tel haut de gamme proposant restaurant, bar sur toit et spa.','leConquet.jpg'),
 (5,'Royal Champagne Hotel et Spa','9 Rue de la R&eacute;publique - Hameau de, Rue de Bellevue','51160','Champillon','03.26.52.87.11','H&ocirc;tel chic avec restaurant haut de gamme et chambres &eacute;pur&eacute;es avec t&eacute;l&eacute;vision &agrave; &eacute;cran plat et Wi-Fi.','champillon.jpg'),
 (6,'InterContinental Lyon - Hotel Dieu','20 Quai Jules Courmont','69002','Lyon','04.26.99.23.23','Chambres et suites &eacute;l&eacute;gantes dans h&ocirc;tel majestueux avec restaurant chic, jardins et vue sur fleuve.','lyon.jpg'),
 (7,'La Cour des Consuls Hotel et Spa','46 Rue des Couteliers','31000','Toulouse','05.67.16.19.99','H&ocirc;tel raffin&eacute; avec restaurant, bar chic, cour, spa et hammam.','toulouse.jpg'),
 (14,'Hotel Renaissance Bordeaux','16 Rue de Gironde','33000 ','Bordeaux','05.19.80.02.00','Renaissance Bordeaux Hotel dispose d&#039;un restaurant, d&#039;une salle de sport, d&#039;un bar et d&#039;un salon commun. Cet &eacute;tablissement propose diverses prestations, dont une r&eacute;ception ouverte 24h/24, un service d&rsquo;&eacute;tage et une connexion Wi-Fi gratuite dans l&rsquo;ensemble de ses locaux. Vous profiterez d&rsquo;un service de concierge et d&rsquo;une piscine int&eacute;rieure.','bordeaux.jpg');
INSERT INTO suites (suite_id,suite_name,suite_description,suite_image,suite_hotel,suite_prix,suite_link) VALUES (2,'Superieure','28m2, Cette chambre dispose d''une connexion Wi-Fi gratuite, d''une télévision, d''un minibar avec boissons sans alcool gratuites, d''un plateau/bouilloire et d''une machine à café Nespresso. Sa salle de bains est dotée d''une douche à effet pluie ou d''une baignoire et d''un système audio. De plus, vous bénéficierez d''un accès au salon.','ToulouseRoom1.jpg',7,255.0,'https://www.bookin.com/'),
 (3,'Deluxe','35m2, Cette chambre dispose d''une connexion Wi-Fi gratuite, d''une télévision, d''un minibar avec boissons sans alcool gratuites, d''un plateau/bouilloire et d''une machine à café Nespresso. Sa salle de bains est dotée d''une douche à effet pluie ou d''une baignoire et d''un système audio. De plus, vous bénéficierez d''un accès au salon.','ToulouseRoom2.jpg',7,355.0,'https://www.bookin.com/'),
 (4,'Muse','23m2, climatisation, salon/espace détente, grand lit double','muse.jpg',14,193.0,'https://www.bookin.com/'),
 (5,'Galerie','28m2, Cette chambre dispose d''une connexion Wi-Fi gratuite, d''un lit king-size, de la climatisation. Le service d''étage est disponible 24h/24, 7j/7','galerie.jpg',14,243.0,'https://www.bookin.com/'),
 (6,'Premier','55m2, extrêmement spacieuse, elle offre une vue sur la cour de marbre et les avenues des alentours. Les grandes fenêtres donnent sur l''avenue George V, l''élégante cour de marbre, l''avenue Pierre 1er de Serbie et les fantastiques avenues des environs.','georgesKS.jpg',2,250.0,'https://www.bookin.com/'),
 (7,'Quatre Saison','75m2, Cette suite gracieuse dispose d''un hall menant à un grand salon et à une chambre discrètement isolée par des portes coulissantes. Dotée de lustres étincelants ainsi que d''un coin salon spacieux pourvu de meubles d''époque élégants, elle comprend aussi un grand bureau ainsi que toutes les commodités modernes.','4saisons.jpg',2,350.0,'https://www.bookin.com/'),
 (8,'Classique','28m2, Offrant une vue sur la ville ou le jardin, ces chambres avec salle de bains privative sont décorées dans un style moderne et disposent d''une télévision à écran plat, d''un minibar, d''une bouilloire électrique ainsi que de matériel de repassage.','classiqueMars.jpg',3,347.0,'https://www.bookin.com/'),
 (9,'Premium','35m2, Offrant une vue sur la ville ou le jardin, ces chambres avec salle de bains privative sont décorées dans un style moderne et disposent d''une télévision à écran plat, d''un minibar, d''une bouilloire électrique ainsi que de matériel de repassage.','premiumMars.jpg',3,511.0,'https://www.bookin.com/'),
 (10,'Superieure','20m2,Grâce à leur belle situation et leur avancée sur la mer, les chambres supérieures vous transporteront au-dessus de l’eau. Par beau temps ou lors d’une tempête, la vue y est époustouflante.','chambreSupLeConquet.jpg',4,320.0,'https://www.bookin.com/'),
 (11,'Deluxe','38m2 + terrasse, Les chambres Deluxe avec terrasse privative seront votre havre de paix face à la mer. Très spacieuses, elles sont pourvues d’un confort inégalé et d’attentions précieuses pour rendre votre séjour agréable.','chambreLuxLeConquet.jpg',4,352.0,'https://www.bookin.com/'),
 (12,'Panoramique','58m2 - Cette suite exclusive est située en angle et offre une vue dégagée sur la vallée de la Champagne.','suitePanoramique.jpg',5,270.0,'https://www.bookin.com/'),
 (13,'Josephine','107m2 - Située au premier étage et offrant une vue sur la vallée de la Champagne, cette suite comprend un salon séparé adjacent à la chambre principale.','suiteJosephine.jpg',5,320.0,'https://www.bookin.com/'),
 (14,'Superieure','30m2 - 1 lit King-Size, vue sur le jardin, insonoris&eacute;e, TV, climatisation','chambreSupLyon.jpg',6,180.0,'https://www.bookin.com/'),
 (15,'Deluxe','35m2, 1 lit King-Size, vue sur le jardin, insonorisée, TV, climatisation','chambreLuxLyon.jpg',6,220.0,'https://www.bookin.com/');
INSERT INTO images (image_id,image_name,image_fichier,image_suite) VALUES (1,'galerie','galerie.jpg',5),
 (2,'galerie','lagalerie1.jpg',5),
 (3,'galerie','lagalerie2.jpg',5),
 (4,'lamuse','muse.jpg',5),
 (5,'lamuse','lamuse1.jpg',5),
 (6,'lamuse','lamuse2.jpg',5),
 (7,'josephine','josephine1.jpg',13),
 (8,'josephine','josephine2.jpg',13),
 (9,'josephine','josephine3.jpg',13),
 (10,'panoramique','panoramique1.jpg',12),
 (11,'panoramique','panoramique2.jpg',12),
 (12,'panoramique','panoramique3.jpg',12),
 (13,'deluxe','deluxe1.jpg',11),
 (14,'deluxe','deluxe2.jpg',11),
 (15,'deluxe','deluxe3.jpg',11),
 (16,'superieure','superieure1.jpg',10),
 (17,'superieure','superieure2.jpg',10),
 (18,'superieure','superieure3.jpg',10),
 (19,'deluxe','deluxe1.jpg',15),
 (20,'deluxe','deluxe2.jpg',15),
 (21,'deluxe','deluxe3.jpg',15),
 (22,'superieure','superieure1.jpg',14),
 (23,'superieure','superieure2.jpg',14),
 (24,'superieure','superieure3.jpg',14),
 (25,'classique','classique1.jpg',8),
 (26,'classique','classique2.jpg',8),
 (27,'classique','classique3.jpg',8),
 (28,'premium','premium1.jpg',9),
 (29,'premium','premium2.jpg',9),
 (30,'premium','premium3.jpg',9),
 (31,'4saisons','4saisons1.jpg',7),
 (32,'4saisons','4saisons2.jpg',7),
 (33,'4saisons','4saisons3.jpg',7),
 (34,'premier','premier1.jpg',6),
 (35,'premier','premier2.jpg',6),
 (36,'deluxe','deluxe1.jpg',3),
 (37,'deluxe','deluxe2.jpg',3),
 (38,'superieure','superieure1.jpg',2),
 (39,'superieure','superieure2.jpg',2),
 (40,'superieure','superieure3.jpg',2);


INSERT INTO role (role_nom) VALUES (accueil, restaurants, bienEtre, events);

INSERT INTO service (service_image, service_decription, service_titre, service_role) VALUES 
(
	'bar.jpg',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
	'Bar',
	'2'),
 (
	'breakfast.jpg',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
	'Petit déjeuner',
	'2'),
 (
	'chef.jpg',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
	'Chef étoilé',
	'2'),
 (
	'lunch.jpg',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
	'Repas',
	'2'), (
 'massage.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Massage',
 '3'
 ),(
 'pool.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Piscine',
 '3'
 ),(
 'spaPrivatif.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Spa',
 '3'
 ),(
 'sport.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Salle de sport',
 '3'
 ),
 ('baptism.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Baptèmes & Mariages',
 '4'),
 ('business.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Repas d''affaires',
 '4'),
 ('party.jpg',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!',
 'Concerts & orchestres',
 '4'),
 (
 'reception.jpg',
 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.',
 'Reception',
 '1'),
 (
 'events.jpg',
 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.',
 'Evenements',
 '1'),
 (
 'wellness.jpg',
 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.',
 'Bien-être',
 '1');
COMMIT;
