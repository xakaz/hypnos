<?php
require_once 'models/Model.php';

class APIManager extends Model
{
  public function getDBHotels(): array|false
  {
    $req = "SELECT * FROM hotels";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $hotels;
  }

  public function getDBSuites(): array|false
  {
    $req = "SELECT * FROM suites";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $suites = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $suites;
  }

  public function getDBContact(): array|false
  {
    $req = "SELECT * FROM contact";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $contact = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $contact;
  }

  public function getDBServices(): array|false
  {
    $req = "SELECT * FROM service";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $services;
  }

  public function getDBSelected(int $hotel_id): array|false
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

  public function getDBManagers(): array|false
  {
    $req = "SELECT * FROM manager";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $managers = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $managers;
  }

  public function getDBManager(string $email): array|false
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
