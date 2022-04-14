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

  -- EVENEMENTS
  /**
    CREATE TABLE "evenements" (
    "evenements_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "evenements_image" VARCHAR (150) NOT NULL,
    "evenements_description" VARCHAR (150) NOT NULL,
    "evenements_alt" VARCHAR (150) NOT NULL
    );

  -- RESTAURANTS
  /**
    CREATE TABLE "restaurants" (
    "restaurant_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "restaurant_image" VARCHAR (150) NOT NULL,
    "restaurant_description" VARCHAR (150) NOT NULL,
    "restaurant_alt" VARCHAR (150) NOT NULL
    );

  -- BIEN-ETRE
  /**
    CREATE TABLE "bienEtre" (
    "bienEtre_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bienEtre_image" VARCHAR (150) NOT NULL,
    "bienEtre_description" VARCHAR (150) NOT NULL,
    "bienEtre_alt" VARCHAR (150) NOT NULL
    );
  
  -- ACCUEIL
  /**
    CREATE TABLE accueil (
    accueil_id integer not null primary key AUTOINCREMENT,
    accueil_title varchar(100) not null,
    accueil_image varchar(100) not null,
    accueil_description text not null,
    accueil_alt varchar(30) not null);

  -- HISTORIQUE
  /**
    CREATE TABLE historique (
    historique_suite INTEGER NOT NULL,
    historique_user INTEGER NOT NULL,
    FOREIGN KEY (historique_suite) 
    REFERENCES suites (suite_id),
    FOREIGN KEY (historique_user) 
    REFERENCES user (user_id));

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

    UPDATE hotels 
    set hotel_plan ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.3358416769215!2d1.4410893881666411!3d43.599391798688856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb7d323e0b13%3A0xbe57d88accb1456f!2s46%20Rue%20des%20Couteliers%2C%2031000%20Toulouse!5e0!3m2!1sfr!2sfr!4v1649939925184!5m2!1sfr!2sfr"
    where hotel_id = 7
    
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

  --BIEN-ETRE
  /**
    INSERT INTO 
    bienEtre (bienEtre_image, bienEtre_description,bienEtre_alt ) 
    VALUES 
    ("massage.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","massage"),
    ("pool.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","piscine"),
    ("spaPrivatif.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","spa"),
    ("sport.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","salle de sport");
  
  --EVENEMENTS
  /**
    INSERT INTO 
    evenements (evenements_image, evenements_description,evenements_alt, evenements_title ) 
    VALUES 
    ("baptism.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","reception","Baptèmes & Mariages"),
    ("business.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","breakfast","Repas d'affaires"),
    ("party.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","chef","Concerts & orchestres");
  
  --RESTAURANTS
  /**
    INSERT INTO 
    restaurants (restaurant_image, restaurant_description,restaurant_alt, restaurant_title ) 
    VALUES 
    ("bar.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","bar","Bar"),
    ("breakfast.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","breakfast","Petit déjeuner"),
    ("chef.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","chef","Chef étoilé"),
    ("lunch.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","lunch","Repas");
  
  --ACCUEIL
  /**
    INSERT INTO accueil (accueil_title,accueil_image,accueil_description,accueil_alt ) 
    VALUES 
    ("Reception", "reception.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.","image reception"),
    ("Evenements", "events.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.","image evenements"),
    ("Bien-être", "wellness.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.","image massage");
  
  -- SUITE_SERVICES
  /**
    INSERT INTO suite_services VALUES 
    (2,1),(2,2),(2,3),(2,5),(2,7),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(2,13),(2,14),
    (3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11),(3,12),(3,13),(3,14);

  
----------------------------SUPPRESSIONS DANS TABLES 
/**
  -- DELETE FROM suites where suite_id = 1;

----------------------------MODIFICATIONS DANS TABLES
/**
  -- AJOUT D'UNE COLONNE
    /**
      --SUITES
        /*
          -- ALTER TABLE suites ADD suite_prix FLOAT;
      
      --BIENETRE
        /*
          -- ALTER TABLE bienEtre ADD bienEtre_title VARCHAR(100);

      --RESTAURANTS
        /*
          -- ALTER TABLE restaurants ADD restaurant_title VARCHAR(100);

      --EVENEMENTS
        /*
          -- ALTER TABLE evenements ADD evenements_title VARCHAR(100);


  -- MODIFICATION DONNEES DANS TABLE
    /**
      --SUITES
        /**
        UPDATE suites set suite_prix = 355 where suite_id = 3;
      -- BIEN-ETRE
        /**
        UPDATE bienEtre set bienEtre_title = "Massage" where bienEtre_id = 1;
        UPDATE bienEtre set bienEtre_title = "Piscine" where bienEtre_id = 2;
        UPDATE bienEtre set bienEtre_title = "Spa" where bienEtre_id = 3;
        UPDATE bienEtre set bienEtre_title = "Salle de sport" where bienEtre_id = 4;
    
  -- AJOUT COLONNE + FOREIG_KEY
    /**
    ALTER TABLE user
    ADD user_role INTEGER NOT NULL  
    REFERENCES role (role_id);