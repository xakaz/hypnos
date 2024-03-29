<?php
require_once 'models/Model.php';

class ConnexionManager extends Model
{
  public function getDBEmailAddresses()
  {
    $req = 'SELECT user_mail FROM user';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $mails = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $mails;
  }

  private function getpasswordUser( $email)
  {
    $req = 'SELECT * FROM user WHERE user_mail = :email';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $user['user_password'];
  }

  public function verifConnexion( $email,  $password)
  {
    $passwordBD = $this->getPasswordUser($email);
    return password_verify($password, $passwordBD);
  }

  public function getRoleUser( $email)
  {
    $req = 'SELECT * FROM user WHERE user_mail = :email';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $user['user_role'];
  }

  public function getAdmin( $email)
  {
    $req = "SELECT user_id, user_prenom, user_nom, user_mail, user_role 
            FROM user where user_mail = :email";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    Model::sendJSON($user);
  }
  public function getManager( $email)
  {
    $req = "SELECT user_id, user_prenom, user_nom, user_mail, user_role 
            FROM user where user_mail = :email";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    Model::sendJSON($user);
  }
  public function getUser($email)
  {
    $req = "SELECT user_id, user_prenom, user_nom, user_mail, user_role 
            FROM user where user_mail = :email";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    Model::sendJSON($user);
  }
}
