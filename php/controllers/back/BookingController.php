<?php
require_once 'models/back/BookingManager.php';
require_once 'models/Model.php';

class BookingController
{
  private $bookingManager;

  public function __construct()
  {
    $this->bookingManager = new BookingManager();
  }

  public function setBooking()
  {

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
    header("Content-Type: application/json");

    $data = json_decode(file_get_contents('php://input'));

    if (
      isset($data->user)
      && isset($data->suite)
      && isset($data->start)
      && isset($data->end)
      && isset($data->date)
    ) {

      $user = $data->user;
      $suite = $data->suite;
      $start = $data->start;
      $end = $data->end;
      $date = $data->date;
      $this->bookingManager->setDBBooking($user, $suite, $start, $end, $date);
      var_dump($data);
    }
  }

  public function getBooking()
  {
    $booking = $this->bookingManager->getDBBooking();
    Model::sendJSON($booking);
  }

  public function modifyBooking()
  {

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
    header("Content-Type: application/json");

    $data = json_decode(file_get_contents('php://input'));

    if (isset($data->user) && isset($data->suite) && isset($data->start) && isset($data->end) && isset($data->date) && isset($data->id)) {

      $user = $data->user;
      $suite = $data->suite;
      $start = $data->start;
      $end = $data->end;
      $date = $data->date;
      $id = $data->id;
      $this->bookingManager->modifyDBBooking($user, $suite, $start, $end, $date, $id);
    }
  }

  public function deleteBooking()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Accept, Content-type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Method: POST, GET, OPTIONS, PUT, DELETE");
    header("Content-Type: application/json");

    $id = json_decode(file_get_contents('php://input'));

    if (isset($id)) {
      $this->bookingManager->deleteDBbooking($id);
    }
  }
}
