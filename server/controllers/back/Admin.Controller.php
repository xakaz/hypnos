<?php
require_once './controllers/back/Securite.class.php';
require_once './models/back/Admin.Manager.php';
require_once './models/front/Api.manager.php';

class AdminController
{

  private $adminManager;
  private $apiManager;

  public function __construct()
  {
    $this->adminManager = new AdminManager();
    $this->apiManager = new ApiManager();
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
      if ($this->adminManager->isConnexionValid($login, $password)) {
        $_SESSION['access'] = "admin";
        header('location: ' . URL . '/back/admin');
      } else {
        header('location: ' . URL . '/');
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

  public function gestionHotel(){
    if (Securite::verifAccessSession()) {
      $hotels=$this->apiManager->getDBHotels();

      
      require_once("views/gestionHotel.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }
  
  public function gestionManager(){
    if (Securite::verifAccessSession()) {
      $managers = $this->apiManager->getDBManagers();
      require_once("views/gestionManager.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }

  public function ajoutManager(){
 
    if (Securite::verifAccessSession()) {
      require_once("views/creationManager.view.php");
    } else {
      throw new exception("Accès refusé");
    }
  }
}
