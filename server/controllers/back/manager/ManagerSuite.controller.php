<?php
require_once './models/back/admin/Admin.Manager.php';
require_once './controllers/back/Securite.class.php';
require_once './models/front/Api.manager.php';
require_once './models/back/Suite.Manager.php';

class ManagerSuiteController
{

  private $apiManager;
  private $suiteManager;

  public function __construct()
  {
    $this->apiManager = new APIManager();
    $this->suiteManager = new SuiteManager();
  }


  public function accueilManager()
  {
    if (Securite::verifAccessSessionManager()) {
      require_once("views/accueilManager.view.php");
    } else {
      header('location:' . URL );
    }
  }

  public function deconnexion()
  {
    session_destroy();
    header('location:' . URL );
  }

  public function gestionSuite()
  {
    if (Securite::verifAccessSessionManager()) {
      $suites = $this->apiManager->getDBSuites();
      $manager = $this->apiManager->getDBManager($_SESSION['login']);
      require_once("views/gestionSuites.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function modifSuite()
  {
    if (Securite::verifAccessSessionManager()) {

      $id = Securite::secureHTML($_POST['suite_id']);
      $name = Securite::secureHTML($_POST['suite_name']);
      $description = Securite::secureHTML($_POST['suite_description']);
      $image = Securite::secureHTML($_POST['suite_image']);
      $prix = Securite::secureHTML($_POST['suite_prix']);
      $link = Securite::secureHTML($_POST['suite_link']);

      $this->suiteManager->modifyDBSuite($id, $name, $description, $image, $prix, $link);

      $_SESSION['alert'] = [
        'message' => "La suite a été modifié",
        'type' => "alert-success"
      ];

      header('Location: ' . URL . 'back/gestionSuite');
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function ajoutSuiteView()
  {
    if (Securite::verifAccessSessionManager()) {
      $manager = $this->apiManager->getDBManager($_SESSION['login']);
      require_once("views/creationSuite.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function ajoutSuite()
  {

    if (Securite::verifAccessSessionManager()) {
      $name = Securite::secureHTML($_POST['suite_name']);
      $description = Securite::secureHTML($_POST['suite_description']);
      $image = Securite::secureHTML($_POST['suite_image']);
      $hotel = Securite::secureHTML($_POST['suite_hotel']);
      $prix = Securite::secureHTML($_POST['suite_prix']);
      $link = Securite::secureHTML($_POST['suite_link']);

      $this->suiteManager->addDBSuite($name, $description, $image, $hotel, $prix, $link);

      $_SESSION['alert'] = [
        'message' => "La suite " . $name . " a été ajouté",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionSuite');
    } else {
      throw new Exception("Vous n'avez pas le droit d'être là");
    }
  }

  public function deleteDBSuite()
  {
    if (Securite::verifAccessSessionManager()) {
      $this->suiteManager->deleteDBSuite((int)Securite::secureHTML($_POST['suite_id']));
      $_SESSION['alert'] = [
        'message' => "La suite a été supprimée",
        'type' => "alert-success"
      ];
      header('Location: ' . URL . 'back/gestionSuite');
    } else {
      throw new exception("Vous n'avez pas le droit d'être là");
    }
  }
}
