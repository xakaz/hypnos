<?php

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

// try{
//     $pdo = new PDO('sqlite:../react/db.sqlite');
//     $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // ERRMODE_WARNING | ERRMODE_EXCEPTION | ERRMODE_SILENT
//     echo "connexion réussie";
// } catch(Exception $e) {
//     echo "Impossible d'accéder à la base de données SQLite : ".$e->getMessage();
//     die();
// }

try{
    if(empty($_GET['url'])){
         throw new Exception("La page n'existe pas") ;
     } else {
        $url = explode("/", filter_var($_GET['url'], FILTER_SANITIZE_URL));
        if( empty($url[0]) || empty($url[1]) ) throw new Exception("La page n'existe pas");
        switch($url[0]){
            case "front" :
                switch($url[1]){
                    case "hotels" : echo "la page des hotels";
                    break;
                    case "suites" : echo "la page des suites";
                    break;
                    case "restaurants" : echo "la page des restaurants";
                    break;
                    case "bien-etre" : echo "la page bien-être";
                    break;
                    case "evenements" : echo "la page des évènements";
                    break;
                    case "contact" : echo "la page des contacts";
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
 