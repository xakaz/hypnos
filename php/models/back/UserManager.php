<?php

use function PHPSTORM_META\sql_injection_subst;

require_once 'models/Model.php';

class UserManager extends Model
{
   public function setDBUser( $prenom,  $nom,  $email)
   {
      $req = "INSERT INTO user (user_prenom, user_nom, user_mail)
                VALUES (:prenom, :nom, :email)";
      $prenom = addslashes($prenom);
      $nom = addslashes($nom);
      $email = addslashes($email);
      $stmt = $this->getBdd()->prepare($req);
      $stmt->bindValue(":prenom", $prenom, PDO::PARAM_STR);
      $stmt->bindValue(":nom", $nom, PDO::PARAM_STR);
      $stmt->bindValue(":email", $email, PDO::PARAM_STR);
      $stmt->execute();
      $stmt->closeCursor();
   }

   public function getDBUser( $email)
   {
      $req = "SELECT * FROM user where user_mail = :email";
      $stmt = $this->getBdd()->prepare($req);
      $stmt->bindValue(':email', $email, PDO::PARAM_INT);
      $stmt->execute();
      $user = $stmt->fetch(PDO::FETCH_ASSOC);
      $stmt->closeCursor();
      return $user;
   }

   public function getDBUsers()
   {
      $req = "SELECT * FROM user";
      $stmt = $this->getBdd()->prepare($req);
      $stmt->execute();
      $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
      $stmt->closeCursor();
      return $users;
   }

   public function modifyDBUser( $id,  $prenom,  $nom,  $email,  $password)
   {
      $req = "UPDATE user SET 
            user_nom = :nom, 
            user_prenom = :prenom, 
            user_mail = :email, 
            user_password = :password, 
            where user_id = :id";
      $stmt = $this->getBdd()->prepare($req);
      $stmt->bindValue(':id', $id, PDO::PARAM_STR);
      $stmt->bindValue(':nom', $nom, PDO::PARAM_STR);
      $stmt->bindValue(':prenom', $prenom, PDO::PARAM_STR);
      $stmt->bindValue(':email', $email, PDO::PARAM_STR);
      $stmt->bindValue(':password', $password, PDO::PARAM_STR);
      $stmt->execute();
      $stmt->closeCursor();
   }

   public function deleteDBUser( $id)
   {
      $req = "DELETE FROM user where user_id = :id";
      $stmt = $this->getBdd()->prepare($req);
      $stmt->bindValue(':id', $id, PDO::PARAM_STR);
      $stmt->execute();
      $stmt->closeCursor();
   }
}
