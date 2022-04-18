<?php
require_once './controllers/back/Securite.class.php';
require_once './models/back/admin/Admin.Manager.php';
require_once './models/front/Api.manager.php';
require_once './models/back/manager/ManagerSuite.manager.php';

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
    require_once "views/login.view.php";
  }

  public function adminConnexion()
  {
    //     echo password_hash('root', PASSWORD_DEFAULT);
    if (!empty($_POST['login']) && !empty($_POST['password'])) {

      $login = Securite::secureHTML($_POST['login']);
      $password = Securite::secureHTML($_POST['password']);
      
      try {
        if ($this->adminManager->isConnexionValid($login, $password) === true) {
          $_SESSION['access'] = "admin";
          header('location: ' . URL . '/back/admin');
        } else if ($this->managerSuite->isConnexionValid($login, $password) === true) {
          $_SESSION['access'] = "manager";
          $_SESSION['login'] = $login;
          header('location: ' . URL . '/back/manager');
        } else {
          throw new Exception('Login ou mot de passe incorrect');
          header('location: ' . URL . '/');
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
      require_once("views/accueilAdmin.view.php");
    } else {
      header('location:' . URL . 'back/login');
    }
  }

  public function deconnexion()
  {
    session_destroy();
    header('location:' . URL . '/back/login');
  }

  public function gestionHotel()
  {
    if (Securite::verifAccessSession()) {
      $hotels = $this->apiManager->getDBHotels();


      require_once("views/gestionHotel.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function gestionManager()
  {
    if (Securite::verifAccessSession()) {
      $managers = $this->apiManager->getDBManagers();
      require_once("views/gestionManager.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function ajoutManagerView()
  {

    if (Securite::verifAccessSession()) {
      require_once("views/creationManager.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }
}
