<?php

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once ("./controllers/front/Api.controller.php");
$apiController = new APIController();

try{
    if(empty($_GET['url'])){
         throw new Exception("La page n'existe pas") ;
     } else {
        $url = explode("/", filter_var($_GET['url'], FILTER_SANITIZE_URL));
        if( empty($url[0]) || empty($url[1]) ) throw new Exception("La page n'existe pas");
        switch($url[0]){
            case "front" :
                switch($url[1]){
                    case "hotels" : $apiController->getHotels();
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
                    default : throw new Exception("La page n'existe pas") ;
                }
            break;
            case "back" : echo "backend de mon application";
            break;
            default : throw new Exception("La page n'existe pas") ;
        }
     }
 } catch (Exception $e) {
     $msg = $e->getMessage();
     echo $msg;
 }
 