<?php

require_once "./models/back/Manager.Manager.php";
require_once './controllers/back/Securite.class.php';

class ManagerController
{
  private $managerManager;

  public function __construct()
  {
    $this-> managerManager = new ManagerManager();
  }


  public function addManager(){

    if(Securite::verifAccessSession()){
      $prenom = Securite::secureHTML($_POST['prenom']);
      $nom = Securite::secureHTML($_POST['nom']);
      $email = Securite::secureHTML($_POST['email']);
      $password = Securite::secureHTML($_POST['password']);
      $this->managerManager->createDBManager($prenom,$nom, $email, $password);
      $_SESSION['alert'] = [
        'message' => $prenom." ".$nom." a été ajouté",
        'type' => "alert-success"
      ];
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
        $password = Securite::secureHTML($_POST['password']);

        $this->managerManager->modifyDBManager($id, $nom,$prenom,$email,$password);
        $_SESSION['alert'] = [
          'message' => "L'établissement a été modifié",
          'type' => "alert-success"
        ];
        header('Location: ' . URL . 'back/gestionManager');
      } else {
        throw new Exception("L'établissement n'a pas pu être modifié.");
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
      throw new exception("L'établissement n'a pas pu être supprimé.");
    }
  }
}













