<?php
require_once 'models/front/Api.manager.php';
require_once 'models/Model.php';

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

}
