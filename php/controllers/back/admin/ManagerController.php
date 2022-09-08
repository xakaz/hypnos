<?php

require_once "models/back/admin/ManagerManager.php";
require_once './controllers/back/Securite.php';

class ManagerController
{
  private $managerManager;

  public function __construct()
  {
    $this->managerManager = new ManagerManager();
  }


  public function addManager()
  {

    if (Securite::verifAccessSession()) {
      $prenom = Securite::secureHTML($_POST['prenom']);
      $nom = Securite::secureHTML($_POST['nom']);
      $email = Securite::secureHTML($_POST['email']);
      $pass = Securite::secureHTML($_POST['password']);
      $password = password_hash($pass, PASSWORD_BCRYPT);
      $this->managerManager->createDBManager($prenom, $nom, $email, $password);
      $_SESSION['alert'] = [
        'message' => $prenom . " " . $nom . " a été ajouté",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionManager');
    } else {
      throw new Exception("Vous n'avez pas le droit d'être là");
    }
  }
  public function modifyManager()
  {
    if (Securite::verifAccessSession()) {
      $id = Securite::secureHTML($_POST['id']);
      $nom = Securite::secureHTML($_POST['nom']);
      $prenom = Securite::secureHTML($_POST['prenom']);
      $email = Securite::secureHTML($_POST['email']);
      $managerHotel = Securite::secureHTML($_POST['manager_hotel']);
      $pass = Securite::secureHTML($_POST['password']);
      $password = password_hash($pass, PASSWORD_BCRYPT);
      $this->managerManager->modifyDBManager($id, $prenom, $nom, $email, $password, $managerHotel);
      $_SESSION['alert'] = [
        'message' => $prenom . " " . $nom . " a été modifié",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionManager');
    } else {
      throw new Exception("Vous n'avez pas le droit d'être là");
    }
  }

  public function deleteManager()
  {
    if (Securite::verifAccessSession()) {
      $this->managerManager->deleteDBManager((int)Securite::secureHTML($_POST['id']));
      $_SESSION['alert'] = [
        'message' => "Le gérant a été supprimé",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionManager');
    } else {
      throw new exception("Vous n'avez pas le droit d'être là");
    }
  }
}
