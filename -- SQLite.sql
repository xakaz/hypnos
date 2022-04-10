-- SQLite
----------------------------CREATION TABLE 

-- HOTELS
/*
  CREATE TABLE "hotels" (
  "hotel_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "hotel_name" VARCHAR (150) NOT NULL,
  "hotel_adresse" VARCHAR (150) NOT NULL,
  "hotel_cp" VARCHAR (5) NOT NULL,
  "hotel_ville" VARCHAR (100) NOT NULL,
  "hotel_telephone" VARCHAR (15) NOT NULL,
  "hotel_description" TEXT NOT NULL,
  "hotel_image" VARCHAR (150) NOT NULL);
*/

-- SUITES
/*
  CREATE TABLE "suites" (
  "suite_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "suite_name" VARCHAR (150) NOT NULL,
  "suite_description" TEXT NOT NULL,
  "suite_image" VARCHAR (150) NOT NULL,
  "suite_hotel" INTEGER NOT NULL,
  FOREIGN KEY (suite_hotel) 
  REFERENCES hotels (hotel_id));
*/

-- IMAGES
/*
  CREATE TABLE "images" (
  "image_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "image_name" VARCHAR (150) NOT NULL,
  "image_fichier" VARCHAR (150) NOT NULL,
  "image_suite" INTEGER NOT NULL,
  FOREIGN KEY (image_suite) 
  REFERENCES suites (suite_id));
*/


----------------------------INSERTION DANS TABLE 
-- SUITES
/*
  INSERT INTO suites (
    suite_name,
    suite_description,
    suite_image,
    suite_hotel
  ) VALUES (
    "Chambre Supérieure",
    "25m2, 
    Wi-fi gratuit, 
    Télévision à écran plat de 42 pouces avec chaînes thématiques, 
    Machine à espresso, 
    minibar, 
    service en chambre 24 h/24,
    eau minérale offerte, 
    climatisation et service de ménage quotidien",
    "bedroom.jpg",
    7
  ),(
    "Chambre Deluxe",
    "45m2, 
    Wi-fi gratuit, 
    Télévision à écran plat de 42 pouces avec chaînes thématiques, 
    Machine à espresso, 
    minibar, 
    service en chambre 24 h/24,
    eau minérale offerte, 
    climatisation, 
    chambre insonorisée, 
    service de ménage quotidien",
    "bedroom2.jpg",
    7
  );
*/

-- HOTELS
/*
  INSERT INTO hotels (
    hotel_name,
    hotel_description,
    hotel_adresse,
    hotel_cp,
    hotel_ville,
    hotel_telephone,
    hotel_image
  ) VALUES (
  "Hôtel Renaissance Bordeaux",
  "Logements chaleureux dans hôtel haut de gamme avec piscine intérieure, restaurant italien et bar à cocktails.",
  "16 Rue de Gironde",
  "33000",
  "Bordeaux",
  "0519800200",
  "bordeaux.jpg"
  ),(
  "Four Seasons Hôtel George V",
  "Hôtel haut de gamme richement décoré, chambres/suites élégantes, restaurants réputés, bar chic et spa de luxe.",
  "31 Av. George V",
  "75008",
  "Paris",
  "0149527000",
  "paris.jpg"
  ),(
  "Hôtel Dieu Intercontinental",
  "Hôtel haut de gamme comprenant piscine intérieure, spa, restaurant de renom et bar avec terrasse.",
  "1 Pl. Daviel",
  "13002",
  "Marseille",
  "0413424242",
  "marseille.jpg"
  ),(
  "Sainte-Barbe Hôtel & Spa Le Conquet",
  "Logements chaleureux avec vue sur mer dans hôtel haut de gamme proposant restaurant, bar sur toit et spa.",
  "Pointe Sainte Barbe",
  "29217",
  "Le Conquet",
  "0298484613",
  "leConquet.jpg"
  ),(
  "Royal Champagne Hotel & Spa",
  "Hôtel chic avec restaurant haut de gamme et chambres épurées avec télévision à écran plat et Wi-Fi.",
  "9 Rue de la République - Hameau de, Rue de Bellevue",
  "51160",
  "Champillon",
  "0326528711",
  "champillon.jpg"
  ),(
  "InterContinental Lyon - Hotel Dieu",
  "Chambres et suites élégantes dans hôtel majestueux avec restaurant chic, jardins et vue sur fleuve.",
  "20 Quai Jules Courmont",
  "69002",
  "Lyon",
  "0426992323",
  "lyon.jpg"
  ),(
  "La Cour des Consuls Hotel & Spa",
  "Hôtel raffiné avec restaurant, bar chic, cour, spa et hammam.",
  "46 Rue des Couteliers",
  "31000",
  "Toulouse",
  "0567161999",
  "toulouse.jpg"
  );
*/


----------------------------SUPPRESSION DANS TABLE 

-- DELETE FROM suites where suite_id = 1;


----------------------------MODIFICATION DANS TABLE
-- AJOUT D'UNE COLONNE
-- ALTER TABLE suites ADD suite_prix FLOAT;

-- MODIFICATION DONNEES DANS TABLE
-- UPDATE suites set suite_prix = 355 where suite_id = 3;