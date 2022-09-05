<?php
require_once 'models/front/ApiManager.php';

class APIController 
{
  private $apiManager;

  public function __construct()
  {
    $this->apiManager = new APIManager();
  }

  public function getHotels(){
    $hotels = $this->apiManager->getDBHotels();
    Model::sendJSON($hotels);
  }
  public function getSuites(){
    $suites = $this->apiManager->getDBSuites();
    Model::sendJSON($suites);
  }
  public function getContact(){
    $contact = $this->apiManager->getDBContact();
    Model::sendJSON($contact);
  }
  public function getServices(){
    $services = $this->apiManager->getDBServices();
    Model::sendJSON($services);
  }
  
  public function getSelectedHotel($hotelId){
    $selected = $this->apiManager->getDBSelected($hotelId);
    Model::sendJSON($selected);
  }

  public function sendMail(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
    header("Content-Type: application/json");

    // décodage de l'info récupérée de la partie front
    $data = json_decode(file_get_contents('php://input'));

    $prenom = htmlspecialchars($data->prenom);
    $nom = htmlspecialchars($data->nom);
    $objet = htmlspecialchars($data->objet);
    $message = htmlspecialchars($data->message);
    $email = htmlspecialchars($data->email);

    // traitement des infos récupérées
    $to = "loic.hernandez@sfr.fr";
    $sujet    = "Message de ".$prenom." ".$nom;
    $subject    = $objet;
    $content  = "Message : ".$message;
    $header  = "From : ".$email;
    mail($to, $sujet, $content, $subject, $header);

    $messageRetour = [
      'from' => $data->email,
      'to' => 'contact@test.com',
    ];

    //envoi d'un retour indiquant que l'info a été traitée
    echo json_encode($messageRetour);
  }
}
