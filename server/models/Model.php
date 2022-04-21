<?php


// abstract class Model
// {
//   private static $pdo;


//   protected function getBdd()
//   {
//     if (getenv('JAWSDB_URL') !== false) {
//       $dbparts = parse_url(getenv('JAWSDB_URL'));
//       $hostname = $dbparts['host'];
//       $username = $dbparts['user'];
//       $password = $dbparts['pass'];
//       $database = ltrim($dbparts['path'], '/');
//     } else {
//       # code...
//       $hostname = "localhost";
//       $username = "root";
//       $password = "admin";
//       $database = "hypnos";
//     }

//     try {
//       $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
//       // set the PDO error mode to exception
//       $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//       echo "Connected successfully";
//     } catch (PDOException $e) {
//       echo "échec de la connection à la base de données: " . $e->getMessage();
//     }
//   }

//   public static function sendJSON($info)
//   {
//     header("Access-Control-Allow-Origin: *");
//     header("Content-Type: application/json");
//     echo json_encode($info);
//   }
// }


abstract class Model
{
  private static $pdo;

  protected function getBdd()
  {
    try {
        // self::$pdo = new PDO('sqlite:C:\Users\xakaz\Desktop\EvalStudi\hypnos\react\db.sqlite', '', '', array(
      self::$pdo = new PDO("mysql:host=localhost;dbname=hypnos", "root", "admin", array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
      ));
      return self::$pdo;
    } catch (Exception $e) {
      echo "Impossible d'accéder à la base de données SQLite : " . $e->getMessage();
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
