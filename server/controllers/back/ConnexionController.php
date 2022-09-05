<?php
require_once 'models/back/ConnexionManager.php';
require_once 'models/Model.php';

class ConnexionController extends Model
{
  private $connexionManager;

  public function __construct()
  {
    $this->connexionManager = new ConnexionManager();
  }

  public function getEmailAddresses()
  {
    $emails = $this->connexionManager->getDBEmailAddresses();
    Model::sendJSON($emails);
  }

  public function setConnexion()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");
      $data = json_decode(file_get_contents('php://input'));
      if (isset($data->email) && isset($data->password)) {
        if ($this->connexionManager->verifConnexion($data->email, $data->password)) {
          $email = htmlspecialchars($data->email);
          $password = htmlspecialchars($data->password);

          $role = $this->connexionManager->getRoleUser($email);
          switch ($role) {
            case "1":
              $this->connexionManager->getAdmin($email);
              break;
            case "2":
              $this->connexionManager->getManager($email);
              break;
            case "3":
              $this->connexionManager->getUser($email);
              break;
            default:
              throw new Exception("L'utilisateur n'a pas de rôle");
          }
        } else {
          throw new Exception('Le mot de passe ne correspond pas');
        }
      } else {
        throw new Exception('Les données ne sont pas prises en compte');
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }
}
