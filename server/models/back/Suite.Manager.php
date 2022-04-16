<?php

require_once 'models/Model.php';

class SuiteManager extends Model
{

  public function addDBSuite( $nom, $description, $image, $hotel, $prix){
    $req="INSERT INTO suites ( suite_nom, suite_description, suite_image, suite_hotel, suite_prix ) 
          VALUES :nom, :description, :image, :hotel, :prix ";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->bindValue(':nom', $nom, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':image', $image, PDO::PARAM_STR);
    $stmt->bindValue(':hotel', $hotel, PDO::PARAM_INT);
    $stmt->bindValue(':prix', $prix, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }

  public function modifyDBSuite( $nom, $description, $image, $hotel, $prix, $id){
    $req ="UPDATE suites SET 
    suite_nom = :nom, 
    suite_description = :description, 
    suite_image = :image, 
    suite_hotel = :hotel, 
    suite_prix = :prix
    where suite_id = :id";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->bindValue(':nom', $nom, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':image', $image, PDO::PARAM_STR);
    $stmt->bindValue(':hotel', $hotel, PDO::PARAM_INT);
    $stmt->bindValue(':prix', $prix, PDO::PARAM_INT);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
   }

   public function deleteDBSuite($id){
    $req ="DELETE FROM suites where suite_id = :id";
    $stmt= $this->getBdd()->prepare($req);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
 }
}