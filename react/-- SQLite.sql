-- SQLite
----------------------------CREATIONS DE TABLES 
/**
  -- HOTELS
  /**
    CREATE TABLE "hotels" (
    "hotel_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hotel_name" VARCHAR (150) NOT NULL,
    "hotel_adresse" VARCHAR (150) NOT NULL,
    "hotel_cp" VARCHAR (5) NOT NULL,
    "hotel_ville" VARCHAR (100) NOT NULL,
    "hotel_telephone" VARCHAR (15) NOT NULL,
    "hotel_description" TEXT NOT NULL,
    "hotel_image" VARCHAR (150) NOT NULL
    );

  -- SUITES
  /**
    CREATE TABLE "suites" (
    "suite_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "suite_name" VARCHAR (150) NOT NULL,
    "suite_description" TEXT NOT NULL,
    "suite_image" VARCHAR (150) NOT NULL,
    "suite_hotel" INTEGER NOT NULL,
    "suite_prix" FLOAT NOT NULL,
    FOREIGN KEY (suite_hotel) 
    REFERENCES hotels (hotel_id)
    );
  
  -- IMAGES
  /**
    CREATE TABLE "images" (
    "image_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image_name" VARCHAR (150) NOT NULL,
    "image_fichier" VARCHAR (150) NOT NULL,
    "image_suite" INTEGER NOT NULL,
    FOREIGN KEY (image_suite) 
    REFERENCES suites (suite_id)
    );

  -- USERS
  /**
    Create table user (
    user_id integer not null primary key autoincrement,
    user_prenom varchar(150) not null,
    user_nom varchar(150) not null,
    user_mail varchar(150) not null,
    user_password varchar(150) not null,
    user_role integer not null
    );

  -- ROLE
  /**
    Create table role (
    role_id integer not null primary key autoincrement,
    role_name varchar(20) not null
    );

  -- SERVICES
  /**
    Create table services (
    service_id integer not null primary key autoincrement,
    service_libelle varchar(50) not null
    );

  -- SUITE/SERVICES
  /**
    Create table suite_services (
    suite_id integer not null,
    service_id integer not null,
    FOREIGN KEY (suite_id) REFERENCES suites (suite_id),
    FOREIGN KEY (service_id) REFERENCES services (service_id)
    );

----------------------------INSERTIONS DANS TABLES
/**
  -- SUITES
  /**
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

  -- HOTELS
  /**
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

  -- ROLES
  /**
    insert into role (role_name) values ("ADMIN"),("MANAGER"),("USER");

  --SERVICES
  /**
    INSERT INTO services (service_libelle) VALUES (
    "Chambre insonorisée"),("Lit King Size"),("Tv"),("Bureau"),
    ("Salle de bain privée (peignoirs & pantoufles)"),("Terrasse"),
    ("Mini-bar"),("Machine à expresso"),("Bouteille d'eau gratuite"),
    ("Ménage quotidien"),("Service d'étage (24h/24)"),("Wifi gratuit"),
    ("Climatisation"),("Non-fumeurs");
  
----------------------------SUPPRESSIONS DANS TABLES 
/**
  -- DELETE FROM suites where suite_id = 1;

----------------------------MODIFICATIONS DANS TABLES
/**
  -- AJOUT D'UNE COLONNE
  -- ALTER TABLE suites ADD suite_prix FLOAT;

  -- MODIFICATION DONNEES DANS TABLE
  -- UPDATE suites set suite_prix = 355 where suite_id = 3;

  --AJOUT COLONNE + FOREIG_KEY
  /**
    ALTER TABLE user
    ADD user_role INTEGER NOT NULL  
    REFERENCES role (role_id);