<?php
require_once 'models/front/Api.manager.php';
require_once 'models/Model.php';

class APIController extends Model
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
  public function getRestaurants(){
    $restaurants = $this->apiManager->getDBRestaurants();
    Model::sendJSON($restaurants);
  }
  public function getBienEtre(){
    $bienEtre = $this->apiManager->getDBBienEtre();
    Model::sendJSON($bienEtre);
  }
  public function getEvenements(){
   $evenements = $this->apiManager->getDBEvenements();
    Model::sendJSON($evenements);
  }
  public function getContact(){
    $contact = $this->apiManager->getDBContact();
    Model::sendJSON($contact);
  }
  public function getServices(){
    $services = $this->apiManager->getDBServices();
    Model::sendJSON($services);
  }
  public function getAccueil(){
    $accueil = $this->apiManager->getDBAccueil();
    Model::sendJSON($accueil);
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

    // traitement des infos récupérées
    // on ne le fait pas maintenant car on est en local
    $to = "loic.hernandez@sfr.fr";
    $sujet    = "Message de ".$data->prenom." ".$data->nom;
    $subject    = $data->objet;
    $content  = "Message : ".$data->message;
    $header  = "From : ".$data->email;
    mail($to, $sujet, $content, $subject, $header);

    $messageRetour = [
      'from' => $data->email,
      'to' => 'contact@test.com',
    ];

    //envoi d'un retour indiquant que l'info a été traitée
    echo json_encode($messageRetour);
  }

}
