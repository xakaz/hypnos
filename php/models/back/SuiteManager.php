<?php

require_once 'models/Model.php';

class SuiteManager extends Model
{

  public function addDBSuite(string $name, string $description, string $image, int $hotel, int $prix, string $link)
  {
    $req = "INSERT INTO suites ( 
      suite_name, 
      suite_description, 
      suite_image, 
      suite_hotel, 
      suite_prix,
      suite_link ) 
          VALUES 
          (:name, 
          :description, 
          :image, 
          :hotel, 
          :prix,
          :link )";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':name', $name, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':image', $image, PDO::PARAM_STR);
    $stmt->bindValue(':hotel', $hotel, PDO::PARAM_INT);
    $stmt->bindValue(':prix', $prix, PDO::PARAM_INT);
    $stmt->bindValue(':link', $link, PDO::PARAM_STR);
    $stmt->execute();
    $stmt->closeCursor();
  }

  public function modifyDBSuite(int $id, string $name, string $description, string $image, int $prix, string $link): void
  {
    $req = "UPDATE suites SET 
    suite_name = :name, 
    suite_description = :description, 
    suite_image = :image, 
    suite_prix = :prix,
    suite_link = :link
    where suite_id = :id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':name', $name, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':image', $image, PDO::PARAM_STR);
    $stmt->bindValue(':link', $link, PDO::PARAM_STR);
    $stmt->bindValue(':prix', $prix, PDO::PARAM_INT);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }

  public function deleteDBSuite(int $id): void
  {
    $req = "DELETE FROM suites where suite_id = :id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }
}
