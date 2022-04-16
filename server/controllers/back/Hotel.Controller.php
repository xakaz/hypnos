<?php

require_once "../../models/back/Hotel.Manager.php";
require_once "../Securite.class.php";

class HotelController
{

  private $hotelManager;

  private function __construct()
  {
    $this->hotelManager = new HotelManager();
  }


  public function setHotel()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");
      $data = json_decode(file_get_contents('php://input'));
      if (isset($data->nom) && isset($data->adresse) && isset($data->cp) && isset($data->ville) && isset($data->telephone) && isset($data->description) && isset($data->image) && isset($data->plan)) {
        $nom = $data->nom;
        $adresse = $data->adresse;
        $cp = $data->cp;
        $ville = $data->ville;
        $telephone = $data->telephone;
        $description = $data->description;
        $image = $data->image;
        $plan = $data->plan;
        $this->hotelManager->setDBHotel($nom, $adresse, $cp, $ville, $telephone, $description, $image, $plan);
      } else {
        throw new Exception("L'établissement n'a pas pu être créé.");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }

  public function modifyHotel()
  {

    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");

      $data = json_decode(file_get_contents('php://input'));

      if (isset($data->id) && isset($data->nom) && isset($data->adresse) && isset($data->cp) && isset($data->ville) && isset($data->telephone) && isset($data->description) && isset($data->image) && isset($data->plan)) {
        $id = $data->id;
        $nom = $data->nom;
        $adresse = $data->adresse;
        $cp = $data->cp;
        $ville = $data->ville;
        $telephone = $data->telephone;
        $description = $data->description;
        $image = $data->image;
        $plan = $data->plan;
        $this->hotelManager->modifyDBhotel($id, $nom, $adresse, $cp, $ville, $telephone, $description, $image, $plan);
      }else {
        throw new Exception("L'établissement n'a pas pu être modifié.");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }

  public function deleteHotel()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");

      $data = json_decode(file_get_contents('php://input'));

      if (isset($data->id)) {
        $id = $data->id;
        $this->hotelManager->deleteDBHotel($id);
      }else {
        throw new Exception("L'établissement n'a pas pu être supprimé.");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }
}
