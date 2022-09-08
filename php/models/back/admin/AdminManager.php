<?php
require_once './models/Model.php';

class AdminManager extends Model
{
  private function getPasswordUser(string $login)
  {
    $req = 'SELECT * FROM admin WHERE login = :login';
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':login', $login, PDO::PARAM_STR);
    $stmt->execute();
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $admin['password'] ?? null;
  }

  public function isConnexionValid($login, $password)
  {
    if ($this->getPasswordUser($login) === null) {
      return false;
    }
    $passwordBD = $this->getPasswordUser($login);
    return password_verify($password, $passwordBD);
  }
}
