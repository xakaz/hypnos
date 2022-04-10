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
         echo "La page demandée est : ".$_GET['url'];
     }
 } catch (Exception $e) {
     $msg = $e->getMessage();
     echo $msg;
 }
 