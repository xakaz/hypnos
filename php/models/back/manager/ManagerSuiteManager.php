<?php
require_once './models/Model.php';

class ManagerSuite extends Model
{
  private function getPasswordUser($login)
  {
    $req = 'SELECT * FROM manager WHERE email = :login';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':login', $login, PDO::PARAM_STR);
    $stmt->execute();
    $manager = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $manager['password'] ?? null;
  }

  public function isConnexionValid($login, $password)
  {
    if (!$this->getPasswordUser($login)) {
      $passwordBD = $this->getPasswordUser($login);
      return password_verify($password, $passwordBD);
    }
    return false;
  }
}
