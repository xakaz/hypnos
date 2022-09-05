<?php
require_once './controllers/back/Securite.php';
require_once './models/back/admin/AdminManager.php';
require_once './models/front/ApiManager.php';
require_once './models/back/manager/ManagerSuiteManager.php';

class AdminController
{

  private $adminManager;
  private $apiManager;
  private $managerSuite;

  public function __construct()
  {
    $this->adminManager = new AdminManager();
    $this->apiManager = new ApiManager();
    $this->managerSuite = new ManagerSuite();
  }

  public function getPageLogin()
  {
    require_once "views/login.php";
  }

  public function adminConnexion()
  {
    if (!empty($_POST['login']) && !empty($_POST['password'])) {

      $login = Securite::secureHTML($_POST['login']);
      $password = Securite::secureHTML($_POST['password']);
      
      try {
        if ($this->adminManager->isConnexionValid($login, $password) === true) {
          $_SESSION['access'] = "admin";
          header('location: ' . URL . 'back/admin');
        } else if ($this->managerSuite->isConnexionValid($login, $password) === true) {
          $_SESSION['access'] = "manager";
          $_SESSION['login'] = $login;
          header('location: ' . URL . 'back/manager');
        } else {
          throw new Exception('Login ou mot de passe incorrect');
          header('location: ' . URL );
        }
      } catch (Exception $e) {
        $msg = $e->getMessage();
        echo $msg;
      }
    }
  }

  public function accueilAdmin()
  {
    if (Securite::verifAccessSession()) {
      require_once("views/accueilAdmin.php");
    } else {
      header('location:' . URL );
    }
  }

  public function deconnexion()
  {
    session_destroy();
    header('location:' . URL );
  }

  public function gestionHotel()
  {
    if (Securite::verifAccessSession()) {
      $hotels = $this->apiManager->getDBHotels();


      require_once("views/gestionHotel.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function gestionManager()
  {
    if (Securite::verifAccessSession()) {
      $managers = $this->apiManager->getDBManagers();
      require_once("views/gestionManager.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function ajoutManagerView()
  {

    if (Securite::verifAccessSession()) {
      require_once("views/creationManager.php");
    } else {
      throw new exception("Accès refusé");
    }
  }
}
