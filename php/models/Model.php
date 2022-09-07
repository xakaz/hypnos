<?php


abstract class Model
{
  private static $pdo;

  protected function getBdd()
  {
    try {
      if( $_SERVER['HTTP_HOST'] === "localhost"){
        self::$pdo = new PDO(PDO_LOCALHOST_CONNEXION, USER_LOCALHOST, PASSWORD_LOCALHOST, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
      } else {
        self::$pdo = new PDO(PDO_SERVER_CONNEXION, USER_SERVER, PASSWORD_SERVER, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
      }

      return self::$pdo;
    } catch (Exception $e) {
      echo "Impossible d'accéder à la base de données : " . $e->getMessage();
      die();
    }
  }

  public static function sendJSON($info)
  {
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    echo json_encode($info);
  }
}
