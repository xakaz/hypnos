<?php

abstract class Model
{
  private static $pdo;

  protected function getBdd()
  {
    try {
      // self::$pdo = new PDO('sqlite:C:\Users\xakaz\Desktop\EvalStudi\hypnos\react\db.sqlite', '', '', array(
      // self::$pdo = new PDO('mysql:host=mysql-hypnoshernandez.alwaysdata.net;dbname=hypnoshernandez_mysql', '266471', 'Maelys030609', array(
      self::$pdo = new PDO("mysql:host=localhost;dbname=hypnos;charset=utf8", 'root', 'root', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
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
