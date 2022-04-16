<?php

define("URL", str_replace("index.php", "", (isset($_SERVER['HTTPS']) ? "https" : "http") .
    "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "./controllers/front/Api.controller.php";
require_once "./controllers/back/User.Controller.php";
require_once "./controllers/back/Connexion.controller.php";
require_once './controllers/back/Suite.Controller.php';
require_once './controllers/back/Booking.Controller.php';

$apiController = new APIController();
$connexionController = new ConnexionController();
$userController = new UserController();
$suiteController = new SuiteController();
$bookingController = new BookingController();

try {
    if (empty($_GET['url'])) {
        throw new Exception("La page n'existe pas");
    } else {
        $url = explode("/", filter_var($_GET['url'], FILTER_SANITIZE_URL));
        if (empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas");
        switch ($url[0]) {
            case "front":
                switch ($url[1]) {
                    case "hotels":
                        if (empty($url[2])) {
                            $apiController->getHotels();
                        } else {
                            $apiController->getSelectedHotel($url[2]);
                        }
                        break;

                        break;
                    case "suites":
                        $apiController->getSuites();
                        break;
                    case "restaurants":
                        $apiController->getRestaurants();
                        break;
                    case "bien-etre":
                        $apiController->getBienEtre();
                        break;
                    case "evenements":
                        $apiController->getEvenements();
                        break;
                    case "contact":
                        $apiController->getContact();
                        break;
                    case "services":
                        $apiController->getServices();
                        break;
                    case "accueil":
                        $apiController->getAccueil();
                        break;
                    case "user":
                        if (empty($url[3])) {
                            throw new Exception("La page n'existe pas");
                        } else {
                            $userController->getUser($url[3]);
                        }
                        break;
                    default:
                        throw new Exception("La page n'existe pas");
                }
                break;
            case "back":
                switch ($url[1]) {
                    case "envoiMail":
                        $apiController->sendMail();
                        break;
                    case "inscription":
                        $userController->setUser();
                        break;
                    case "connexion":
                        $connexionController->setConnexion();
                        break;
                    case "email":
                        $connexionController->getEmailAddresses();
                        break;
                    case "modify-user":
                        $userController->modifyUser();
                        break;
                    case "delete-user":
                        $userController->deleteUser();
                        break;
                    case "modify-suite":
                        $suiteController->modifySuite();
                        break;
                    case "delete-suite":
                        $suiteController->deleteSuite();
                        break;
                    case "modify-booking":
                        $bookingController->modifyBooking();
                        break;
                    case "delete-booking":
                        $bookingController->deleteBooking();
                        break;
                    default:
                        throw new Exception("La page n'existe pas");
                }
                break;
            default:
                throw new Exception("La page n'existe pas");
        }
    }
} catch (Exception $e) {
    $msg = $e->getMessage();
    echo $msg;
}
