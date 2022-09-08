<?php
require_once 'models/Model.php';

class BookingManager extends Model
{

  public function setDBBooking($user, $suite, $start, $end, $date)
  {
    $req = "INSERT INTO 
      booking (booking_user, booking_suite, booking_start, booking_end, booking_date)
      VALUES (:user, :suite, :start, :end, :date)";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(":user", $user, PDO::PARAM_INT);
    $stmt->bindValue(":suite", $suite, PDO::PARAM_INT);
    $stmt->bindValue(":start", $start, PDO::PARAM_INT);
    $stmt->bindValue(":end", $end, PDO::PARAM_INT);
    $stmt->bindValue(":date", $date, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }


  public function modifyDBBooking($user, $suite, $start, $end, $date, $id)
  {
    $req = " UPDATE hotels set 
      booking_user = :user, 
      booking_suite  = :suite, 
      booking_start  = :start, 
      booking_end  = :end, 
      booking_date  = :date
      WHERE booking_id = :id";

    $stmt = $this->getBdd()->prepare($req);

    $stmt->bindValue(":user", $user, PDO::PARAM_INT);
    $stmt->bindValue(":suite", $suite, PDO::PARAM_INT);
    $stmt->bindValue(":start", $start, PDO::PARAM_INT);
    $stmt->bindValue(":end", $end, PDO::PARAM_INT);
    $stmt->bindValue(":date", $date, PDO::PARAM_INT);
    $stmt->bindValue(":id", $id, PDO::PARAM_INT);

    $stmt->execute();
    $stmt->closeCursor();
  }

  public function deleteDBBooking($id)
  {
    $req = "DELETE FROM booking where booking_id = :id";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
  }

  public function getDBBooking()
  {
    $req = "SELECT * FROM booking";
    $stmt = $this->getBdd()->prepare($req);
    $stmt->execute();
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $books;
  }
}
