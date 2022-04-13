<?php

require_once "../../models/front/User.Manager.php";
require_once "../../models/Model.php";

class UserController extends Model
{

  private $userManager;

  public function __construct(){
    $user=$this->userManager = new UserManager();
    Model::sendJSON($user);
  }

  public function getUser(){
    $this->userManager->getDBUser();
  }

}