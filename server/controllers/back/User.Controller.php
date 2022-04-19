<?php

require_once "models/back/User.Manager.php";
require_once "models/Model.php";

class UserController extends Model
{

  private $userManager;

  public function __construct()
  {
    $this->userManager = new UserManager();
  }

  public function getUser($email)
  {
        $user = $this->userManager->getDBUser($email);
        Model::sendJSON($user);
  }
  
  public function getUsers()
  {
        $users = $this->userManager->getDBUsers();
        Model::sendJSON($users);
  }

  public function getAdmin($id)
  {
    $this->userManager->getDBUser($id);
  }

  public function getManager($id)
  {
    $this->userManager->getDBUser($id);
  }

  ///////////////////////////////////////// INSCRIPTION
  public function setUser()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");

      $data = json_decode(file_get_contents('php://input'));

      if (isset($data->prenom) && isset($data->nom) && isset($data->email)) {

        $prenom = $data->prenom;
        $nom = $data->nom;
        $email = $data->email;
        
        $this->userManager->setDBUser($prenom, $nom, $email);
      } 
      else {
        throw new Exception("La création de profil a échoué");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }

  ///////////////////////////////////////// MODIFICATION
  public function modifyUser()
  {

    try {

      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");

      $data = json_decode(file_get_contents('php://input'));

      if (isset($data->prenom) && isset($data->nom) && isset($data->email) && isset($data->password) && isset($data->id)) {
        $id = $data->id;
        $prenom = $data->prenom;
        $nom = $data->nom;
        $email = $data->email;
        $pass = $data->password;
        $password = password_hash($pass, PASSWORD_BCRYPT);
        $this->userManager->modifyDBUser($prenom, $nom, $email, $password, $id);
      } else {
        throw new Exception("La modification du profil a échoué");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }

  ///////////////////////////////////////// SUPPRESSION
  public function deleteUser()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");

      $data = json_decode(file_get_contents('php://input'));

      if (isset($data->email)) {
        $email = $data->email;
        $this->userManager->deleteDBUser($email);
      } else {
        throw new Exception("La suppression du profil a échoué");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }
}
