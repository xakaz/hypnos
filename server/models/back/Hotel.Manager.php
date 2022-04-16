<?php
require_once 'models/Model.php';

class HotelManager extends Model
{

  public function setDBHotel($nom, $adresse, $cp, $ville, $telephone, $description, $image, $plan)
  {
    $req = " INSERT INTO hotels (hotel_name, hotel_adresse, hotel_cp, hotel_ville, hotel_telephone, hotel_description, hotel_image, hotel_plan ) Values 
                VALUES (:nom, :adresse, :cp, :ville, :telephone, :description, :image, :plan)";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":nom", $nom, PDO::PARAM_INT);
    $stmt->bindValue(":adresse", $adresse, PDO::PARAM_INT);
    $stmt->bindValue(":cp", $cp, PDO::PARAM_STR);
    $stmt->bindValue(":ville", $ville, PDO::PARAM_STR);
    $stmt->bindValue(":telephone", $telephone, PDO::PARAM_STR);
    $stmt->bindValue(":description", $description, PDO::PARAM_STR);
    $stmt->bindValue(":image", $image, PDO::PARAM_STR);
    $stmt->bindValue(":plan", $plan, PDO::PARAM_STR);
    $stmt->execute();
    $stmt->closeCursor();
  }

  public function modifyDBHotel($id, $nom, $adresse, $cp, $ville, $telephone, $description, $image, $plan)
  {
    $req = " UPDATE hotels SET 
      hotel_name = :nom, 
      hotel_adresse = :adresse, 
      hotel_cp = :cp, 
      hotel_ville = :ville, 
      hotel_telephone = :telephone, 
      hotel_description = :description, 
      hotel_image = :image, 
      hotel_plan = :plan
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
    $stmt->bindValue(":plan", $plan, PDO::PARAM_STR);

    $stmt->execute();
    $stmt->closeCursor();
  }

  public function deleteDBHotel($id)
  {
    $req = "DELETE FROM hotels where hotel_id = :id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }
}
