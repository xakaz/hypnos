<?php
require_once 'models/Model.php';

class HotelManager extends Model
{

  public function setDBHotel(string $nom, string $adresse, string $cp, string $ville, string $telephone, string $description, string $image): void
  {
    $req = " INSERT INTO hotels 
    (hotel_name, hotel_adresse, hotel_cp, hotel_ville, hotel_telephone, hotel_description, hotel_image ) 
    VALUES (:nom, :adresse, :cp, :ville, :telephone, :description, :image)";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":nom", $nom, PDO::PARAM_STR);
    $stmt->bindValue(":adresse", $adresse, PDO::PARAM_STR);
    $stmt->bindValue(":cp", $cp, PDO::PARAM_STR);
    $stmt->bindValue(":ville", $ville, PDO::PARAM_STR);
    $stmt->bindValue(":telephone", $telephone, PDO::PARAM_STR);
    $stmt->bindValue(":description", $description, PDO::PARAM_STR);
    $stmt->bindValue(":image", $image, PDO::PARAM_STR);
    $stmt->execute();
    $stmt->closeCursor();
  }

  public function modifyDBHotel(int $id, string $nom, string $adresse, string $cp, string $ville, string $telephone, string $description, string $image): void
  {
    $req = " UPDATE hotels SET 
      hotel_name = :nom, 
      hotel_adresse = :adresse, 
      hotel_cp = :cp, 
      hotel_ville = :ville, 
      hotel_telephone = :telephone, 
      hotel_description = :description, 
      hotel_image = :image
      WHERE hotel_id = :id";

    $stmt = $this->getBdd()->prepare($req);

    $stmt->bindValue(":id", $id, PDO::PARAM_INT);
    $stmt->bindValue(":nom", $nom, PDO::PARAM_STR);
    $stmt->bindValue(":adresse", $adresse, PDO::PARAM_STR);
    $stmt->bindValue(":cp", $cp, PDO::PARAM_STR);
    $stmt->bindValue(":ville", $ville, PDO::PARAM_STR);
    $stmt->bindValue(":telephone", $telephone, PDO::PARAM_STR);
    $stmt->bindValue(":description", $description, PDO::PARAM_STR);
    $stmt->bindValue(":image", $image, PDO::PARAM_STR);

    $stmt->execute();
    $stmt->closeCursor();
  }

  public function deleteDBHotel(int $id): void
  {
    $req = "DELETE FROM hotels where hotel_id = :id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }
}
