<?php

require_once "models/back/Suite.Manager.php";

class SuiteController
{

  private $suiteManager;

  public function __construct()
  {
    $this->suiteManager = new SuiteManager();
  }

  public function addSuite()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");
      $data = json_decode(file_get_contents('php://input'));
      if (isset($data->nom) && isset($data->description) && isset($data->image) && ($data->hotel) && isset($data->prix)) {
        $nom = $data->nom;
        $description = $data->description;
        $image = $data->image;
        $hotel = $data->hotel;
        $prix = $data->prix;
        $this->suiteManager->addDBSuite($nom, $description, $image, $hotel, $prix);
      }else {
        throw new Exception("La suite n'a pas pu être ajoutée.");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }


  public function modifySuite()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");
      $data = json_decode(file_get_contents('php://input'));
      if (isset($data->nom) && isset($data->description) && isset($data->image) && ($data->hotel) && isset($data->prix) && isset($data->id)) {
        $nom = $data->nom;
        $description = $data->description;
        $image = $data->image;
        $hotel = $data->hotel;
        $prix = $data->prix;
        $id = $data->id;
        $this->suiteManager->modifyDBSuite($nom, $description, $image, $hotel, $prix, $id);
      }else {
        throw new Exception("La suite n'a pas pu être modifiée.");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }

  public function deleteSuite()
  {
    try {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
      header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
      header("Content-Type: application/json");
      $data = json_decode(file_get_contents('php://input'));
      if (isset($data->id)) {
        $id = $data->id;
        $this->suiteManager->deleteDBSuite($id);
      }else {
        throw new Exception("La suite n'a pas pu être supprimée.");
      }
    } catch (Exception $e) {
      $msg = $e->getMessage();
      echo $msg;
    }
  }
}
