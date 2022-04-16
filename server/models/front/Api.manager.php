<?php 
require_once 'models/Model.php';

class APIManager extends Model
{
  public function getDBHotels(){
    $req ="SELECT * FROM hotels";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $hotels;
  }
  
  public function getDBSuites(){
    $req ="SELECT * FROM suites";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $suites = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $suites;
  }

  public function getDBRestaurants(){
    $req ="SELECT * FROM restaurants";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $restaurants = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $restaurants;
  }

  public function getDBBienEtre(){
    $req ="SELECT * FROM bienEtre";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $bienEtre = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $bienEtre;
  }

  public function getDBEvenements(){
    $req ="SELECT * FROM evenements";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $evenements = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $evenements;
  }

  public function getDBContact(){
    $req ="SELECT * FROM contact";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $contact = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $contact;
  }
  
  public function getDBServices(){
    $req ="SELECT * FROM services";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $services;
  }
  
  public function getDBAccueil(){
    $req ="SELECT * FROM accueil";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $accueil = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $accueil;
  }
  
  public function getDBSelected($hotel_id){
    $req ="SELECT * FROM hotels 
          WHERE hotel_id = :hotel_id";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->bindValue(":hotel_id", $hotel_id, PDO::PARAM_INT);
    $stmt->execute();
    $selectedHotel = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $selectedHotel;
  }
  
  public function getDBManagers(){
    $req ="SELECT * FROM manager";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->execute();
    $managers = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $managers;
  }
  

}