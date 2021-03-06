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

  -- USER
  /**
    Create table user (
    user_id integer not null primary key autoincrement,
    user_prenom varchar(150) not null,
    user_nom varchar(150) not null,
    user_mail varchar(150) not null
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

  -- BOOKING 
  /*
    CREATE TABLE booking (
    booking_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    booking_user INTEGER NOT NULL,
    booking_suite INTEGER NOT NULL,
    booking_start VARCHAR(250) NOT NULL,
    booking_end VARCHAR(250) NOT NULL,
    booking_date VARCHAR5(250) NOT NULL);

    
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
      "Chambre Sup??rieure",
      "25m2, 
      Wi-fi gratuit, 
      T??l??vision ?? ??cran plat de 42 pouces avec cha??nes th??matiques, 
      Machine ?? espresso, 
      minibar, 
      service en chambre 24 h/24,
      eau min??rale offerte, 
      climatisation et service de m??nage quotidien",
      "bedroom.jpg",
      7
    ),(
      "Chambre Deluxe",
      "45m2, 
      Wi-fi gratuit, 
      T??l??vision ?? ??cran plat de 42 pouces avec cha??nes th??matiques, 
      Machine ?? espresso, 
      minibar, 
      service en chambre 24 h/24,
      eau min??rale offerte, 
      climatisation, 
      chambre insonoris??e, 
      service de m??nage quotidien",
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
    "H??tel Renaissance Bordeaux",
    "Logements chaleureux dans h??tel haut de gamme avec piscine int??rieure, restaurant italien et bar ?? cocktails.",
    "16 Rue de Gironde",
    "33000",
    "Bordeaux",
    "0519800200",
    "bordeaux.jpg"
    ),(
    "Four Seasons H??tel George V",
    "H??tel haut de gamme richement d??cor??, chambres/suites ??l??gantes, restaurants r??put??s, bar chic et spa de luxe.",
    "31 Av. George V",
    "75008",
    "Paris",
    "0149527000",
    "paris.jpg"
    ),(
    "H??tel Dieu Intercontinental",
    "H??tel haut de gamme comprenant piscine int??rieure, spa, restaurant de renom et bar avec terrasse.",
    "1 Pl. Daviel",
    "13002",
    "Marseille",
    "0413424242",
    "marseille.jpg"
    ),(
    "Sainte-Barbe H??tel & Spa Le Conquet",
    "Logements chaleureux avec vue sur mer dans h??tel haut de gamme proposant restaurant, bar sur toit et spa.",
    "Pointe Sainte Barbe",
    "29217",
    "Le Conquet",
    "0298484613",
    "leConquet.jpg"
    ),(
    "Royal Champagne Hotel & Spa",
    "H??tel chic avec restaurant haut de gamme et chambres ??pur??es avec t??l??vision ?? ??cran plat et Wi-Fi.",
    "9 Rue de la R??publique - Hameau de, Rue de Bellevue",
    "51160",
    "Champillon",
    "0326528711",
    "champillon.jpg"
    ),(
    "InterContinental Lyon - Hotel Dieu",
    "Chambres et suites ??l??gantes dans h??tel majestueux avec restaurant chic, jardins et vue sur fleuve.",
    "20 Quai Jules Courmont",
    "69002",
    "Lyon",
    "0426992323",
    "lyon.jpg"
    ),(
    "La Cour des Consuls Hotel & Spa",
    "H??tel raffin?? avec restaurant, bar chic, cour, spa et hammam.",
    "46 Rue des Couteliers",
    "31000",
    "Toulouse",
    "0567161999",
    "toulouse.jpg"
    );    

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
    ("baptism.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","reception","Bapt??mes & Mariages"),
    ("business.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","breakfast","Repas d'affaires"),
    ("party.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","chef","Concerts & orchestres");
  
  --RESTAURANTS
  /**
    INSERT INTO 
    restaurants (restaurant_image, restaurant_description,restaurant_alt, restaurant_title ) 
    VALUES 
    ("bar.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","bar","Bar"),
    ("breakfast.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","breakfast","Petit d??jeuner"),
    ("chef.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","chef","Chef ??toil??"),
    ("lunch.jpg", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores veniam impedit, ipsa rem quasi delectus autem fugiat doloribus cupiditate!","lunch","Repas");
  
  --ACCUEIL
  /**
    INSERT INTO accueil (accueil_title,accueil_image,accueil_description,accueil_alt ) 
    VALUES 
    ("Reception", "reception.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.","image reception"),
    ("Evenements", "events.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.","image evenements"),
    ("Bien-??tre", "wellness.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quis eius. Vero optio natus deserunt error sint rerum corporis porro.","image massage");
  
  -- MANAGER
  /**
    INSERT INTO manager (prenom,nom,email,password ) VALUES 
    ("Jean-Claude","Van Damme","kickboxing@email.fr","$2y$10$G43I8BcL1NkSAXCJyDxjI.4NvYloD/ap5B.slme8.apVa8Tp2fnE2"),
    ("Takeshi","Kitano","sonatine@email.fr","$2y$10$mmSR1iGjRHUlyu/tv.Iay.ykyE9Vs0s5BxmPTaeyiThoZOgbh1kne"),
    ("Michelle","Pfeiffer","espritRebelle@email.fr","$2y$10$7ArYfRrPEjDkYQGfgdJ3yeFNhdzJ/yFpvkrrqMKgc7KMYoDOgHb7m"), 
    ("Uma","Thurman","pulpfiction@email.fr","$2y$10$jgeji98a7.miQyd9QGjCzODqU4jHyk80NDrMbSZorVTQTXgm0POui"),
    ("Quentin","Tarantino","django@email.fr","$2y$10$R72brEUe2a5EOnTihizha.pIaWT6gvx50RD6Qghbt87HHLZob7U6O"),
    ("Jean","Reno","leon@email.fr","$2y$10$QeLYuDcEzqQmlG.2grRXJOsh2Ke9fx2fjuEUNeiZ73oojYGeU6IPy"),
    ("Julia","Roberts","prettyWoman@email.fr","$2y$10$Hr4oWq0ZTxyCtqUhTPhpX.IRWBPIXo8OTXELO3rTmkwn7xF0.hY06");

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