<?php
require_once 'models/Model.php';

class ConnexionManager extends Model
{

  public function setDBUser($prenom, $nom, $email, $password)
  {
      $req = "INSERT INTO user (user_prenom, user_nom, user_mail, user_password, user_role)
                VALUES (:prenom, :nom, :email, :password, 3)";
      $stmt = $this->getBdd()->prepare($req);
      $stmt->bindValue(":prenom", $prenom, PDO::PARAM_STR);
      $stmt->bindValue(":nom", $nom, PDO::PARAM_STR);
      $stmt->bindValue(":email", $email, PDO::PARAM_STR);
      $stmt->bindValue(":password", $password, PDO::PARAM_STR);
      $stmt->execute();
      $stmt->closeCursor();
  }

  public function getDBEmailAddresses()
  {
    $req = 'SELECT user_mail FROM user';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $mails = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $mails;
  }

  private function getpasswordUser($email)
  {
    $req = 'SELECT * FROM user WHERE email = :email';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $user['user_password'];
  }

  public function verifConnexion($email, $password)
  {
    $passwordBD = $this->getPasswordUser($email);
    return password_verify($password, $passwordBD);
  }

  public function getRoleUser($email)
  {
    $req = 'SELECT * FROM user WHERE email = :email';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $user['user_role'];
  }
}
