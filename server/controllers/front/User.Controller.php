<?php

require_once "../../models/front/User.Manager.php";

class UserController {

  private $userManager;

  public function __construct(){
    $this->userManager = new UserManager();
  }

  public function getUser(){
    $this->userManager->getDBUser();
  }

}