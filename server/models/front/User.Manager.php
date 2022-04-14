<?php

require_once 'models/Model.php';

class UserManager extends Model
{
 public function getDBUser(){
  $req ="SELECT * FROM user";
  $stmt= $this->getBdd()->prepare($req);
  $stmt->execute();
  $user = $stmt->fetch(PDO::FETCH_ASSOC);
  $stmt->closeCursor();
  return $user;
 }
}