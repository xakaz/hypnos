<?php
require_once 'models/Model.php';

class APIManager extends Model
{
  public function getDBHotels()
  {
    $req = "SELECT * FROM hotels";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $hotels;
  }

  public function getDBSuites()
  {
    $req = "SELECT * FROM suites";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $suites = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $suites;
  }
  public function getDBServices()
  {
    $req = "SELECT * FROM service";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $services;
  }

  public function getDBSelected($hotel_id)
  {
    $req = "SELECT * FROM hotels 
          WHERE hotel_id = :hotel_id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":hotel_id", $hotel_id, PDO::PARAM_INT);
    $stmt->execute();
    $selectedHotel = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $selectedHotel;
  }

  public function getDBManagers()
  {
    $req = "SELECT * FROM manager";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $managers = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $managers;
  }

  public function getDBManager($email)
  {
    $req = "SELECT * FROM manager WHERE email = :email";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":email", $email, PDO::PARAM_STR);
    $stmt->execute();
    $manager = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $manager;
  }
}
