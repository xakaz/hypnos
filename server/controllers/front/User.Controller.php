<?php

require_once "models/front/User.Manager.php";
require_once "models/Model.php";

class UserController extends Model
{

  private $userManager;

  public function __construct(){
    $this->userManager = new UserManager();
  }
  
  public function getUser(){
    $user = $this->userManager->getDBUser();
    Model::sendJSON($user);
  }
  
  public function getAdmin(){
    $this->userManager->getDBUser();
  }
  
  public function getManager(){
    $this->userManager->getDBUser();
  }

  

}