<?php

require_once "./models/back/HotelManager.php";
require_once './controllers/back/Securite.php';

class HotelController
{

  private $hotelManager;

  public function __construct()
  {
    $this->hotelManager = new HotelManager();
  }

  public function formHotel()
  {
    if (Securite::verifAccessSession()) {
      require_once 'views/creationHotel.php';
    } else {
      throw new Exception("Vous n'avez pas le droit d'être là");
    }
  }


  public function setHotel()
  {
    if (Securite::verifAccessSession()) {
      $nom = Securite::secureHTML($_POST['nom']);
      $adresse = Securite::secureHTML($_POST['adresse']);
      $cp = Securite::secureHTML($_POST['cp']);
      $ville = Securite::secureHTML($_POST['ville']);
      $telephone = Securite::secureHTML($_POST['telephone']);
      $description = Securite::secureHTML($_POST['description']);
      $image = Securite::secureHTML($_POST['image']);
      $this->hotelManager->setDBHotel($nom, $adresse, $cp, $ville, $telephone, $description, $image);
      $_SESSION['alert'] = [
        'message' => "L'établissement " . $nom . " a été créé.",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionHotel');
    } else {
      throw new Exception("L'établissement n'a pas pu être créé.");
    }
  }

  public function modifyHotel()
  {
    if (Securite::verifAccessSession()) {
      $id = (int)Securite::secureHTML($_POST['id']);
      $nom = Securite::secureHTML($_POST['nom']);
      $adresse = Securite::secureHTML($_POST['adresse']);
      $cp = Securite::secureHTML($_POST['cp']);
      $ville = Securite::secureHTML($_POST['ville']);
      $telephone = Securite::secureHTML($_POST['telephone']);
      $description = Securite::secureHTML($_POST['description']);
      $image = Securite::secureHTML($_POST['image']);
      $this->hotelManager->modifyDBhotel($id, $nom, $adresse, $cp, $ville, $telephone, $description, $image);
      $_SESSION['alert'] = [
        'message' => "L'établissement a été modifié",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionHotel');
    } else {
      throw new Exception("L'établissement n'a pas pu être modifié.");
    }
  }

  public function deleteHotel()
  {
    if (Securite::verifAccessSession()) {
      $this->hotelManager->deleteDBHotel((int)Securite::secureHTML($_POST['hotel_id']));
      $_SESSION['alert'] = [
        'message' => "L'établissement a été supprimé",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionHotel');
    } else {
      throw new exception("L'établissement n'a pas pu être supprimé.");
    }
  }
}
