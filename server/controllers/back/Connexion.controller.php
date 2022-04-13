<?php
require_once 'models/back/Connexion.manager.php';
require_once 'models/Model.php';

class ConnexionController extends Model
{
  private $connexionManager;

  public function __construct()
  {
    $this->connexionManager = new ConnexionManager();
  }

  public function setUser(){

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
    header("Content-Type: application/json");

    $data = json_decode(file_get_contents('php://input'));

    if(isset($data->prenom) && isset($data->nom) && isset($data->email) && isset($data->password)){

      $prenom = $data->prenom;
      $nom = $data->nom;
      $email = $data->email;
      $pass = $data->password;
      $password = password_hash($pass,PASSWORD_BCRYPT);
      $this->connexionManager->setDBUser($prenom, $nom,$email,$password);
 
    }
  } 

  public function getEmailAddresses(){
    $emails = $this->connexionManager->getDBEmailAddresses();
    Model::sendJSON($emails);
  }

  public function setConnexion(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
    header("Content-Type: application/json");
    $data = json_decode(file_get_contents('php://input'));
    if(isset($data->email) && isset($data->password))
    {
      $email = $data->email;
      $password = $data->password;
      if($this->connexionManager->verifConnexion($email, $password)){
        $role = $this->connexionManager->getRoleUser($email); 
        switch($role){
          case 1 : $this->userManager->getAdmin(); 
          break;
          case 2 : $this->userManager->getManager(); 
          break;
          case 3 : $this->userManager->getUser(); 
          break;
          default : $this->userManager->getUser();  ;
        }
      }
    }
  }
}