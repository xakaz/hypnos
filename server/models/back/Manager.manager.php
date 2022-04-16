<?php

require_once 'models/Model.php';

class ManagerManager extends Model
{
  public function createDBManager($prenom,$nom, $email, $password){
    $req="INSERT INTO manager (prenom, nom, email, password) 
          VALUES (:prenom,:nom, :email, :password)";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":prenom", $prenom,PDO::PARAM_STR);
    $stmt->bindValue(":nom", $nom,PDO::PARAM_STR);
    $stmt->bindValue(":email", $email,PDO::PARAM_STR);
    $stmt->bindValue(":password", $password,PDO::PARAM_STR);
    $stmt->execute();
    $stmt->closeCursor();
  }
  
  public function modifyDBManager($id, $prenom,$nom, $email, $password){
    $req="UPDATE manager 
      SET  prenom = :prenom, nom = :nom, email = :email, password = :password
      WHERE id =:id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":id", $id,PDO::PARAM_STR);
    $stmt->bindValue(":prenom", $prenom,PDO::PARAM_STR);
    $stmt->bindValue(":nom", $nom,PDO::PARAM_STR);
    $stmt->bindValue(":email", $email,PDO::PARAM_STR);
    $stmt->bindValue(":password", $password,PDO::PARAM_STR);
    $stmt->execute();
    $stmt->closeCursor();
  }
  
  public function deleteDBManager($id){
    $req = "DELETE FROM manager where id = :id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }
}