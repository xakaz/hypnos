<?php

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "./controllers/front/Api.controller.php";
require_once "./controllers/front/User.controller.php";
require_once "./controllers/back/Connexion.controller.php";

$apiController = new APIController();
$connexionController = new ConnexionController();
$userController = new UserController();

try{
    if(empty($_GET['url'])){
         throw new Exception("La page n'existe pas") ;
     } else {
        $url = explode("/", filter_var($_GET['url'], FILTER_SANITIZE_URL));
        if( empty($url[0]) || empty($url[1]) ) throw new Exception("La page n'existe pas");
        switch($url[0]){
            case "front" :
                switch($url[1]){
                    case "hotels" : 
                        if (empty($url[2])) {
                            $apiController->getHotels();
                        } else {
                            $apiController->getSelectedHotel($url[2]);
                        } 
                    break;
                     
                    break;
                    case "suites" : $apiController->getSuites();
                    break;
                    case "restaurants" : $apiController->getRestaurants();
                    break;
                    case "bien-etre" : $apiController->getBienEtre();
                    break;
                    case "evenements" : $apiController->getEvenements();
                    break;
                    case "contact" : $apiController->getContact();
                    break;
                    case "services" : $apiController->getServices();
                    break;
                    case "accueil" : $apiController->getAccueil();
                    break;
                    case "admin" : $userController->getAdmin();
                    break;    
                    case "user" : $userController->getUser();
                    break;    
                    case "manager" : $userController->getManager();
                    break;    
                    default : throw new Exception("La page n'existe pas") ;
                }
                break;
            case "back" : 
                switch($url[1]){    
                    case "inscription" : $connexionController->setUser();
                    break;    
                    case "connexion" : $connexionController->setConnexion();
                    break;    
                    case "email" : $connexionController->getEmailAddresses();
                    break;    
                    default : throw new Exception("La page n'existe pas") ;    
                }
            break;
            default : throw new Exception("La page n'existe pas") ;
        }
     }
 } catch (Exception $e) {
     $msg = $e->getMessage();
     echo $msg;
 }
 