<?php session_start(); 

define("URL", str_replace("index.php", "", (isset($_SERVER['HTTPS']) ? "https" : "http") .
    "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "./controllers/front/Api.controller.php";
require_once "./controllers/back/User.Controller.php";
require_once "./controllers/back/Connexion.controller.php";
require_once './controllers/back/Suite.Controller.php';
require_once './controllers/back/Booking.Controller.php';
require_once './controllers/back/Hotel.Controller.php';
require_once './controllers/back/admin/Admin.Controller.php';
require_once './controllers/back/admin/Manager.Controller.php';
require_once './controllers/back/manager/ManagerSuite.controller.php';

$apiController = new APIController();
$connexionController = new ConnexionController();
$userController = new UserController();
$suiteController = new SuiteController();
$bookingController = new BookingController();
$adminController = new AdminController();
$hotelController = new HotelController();
$managerController = new ManagerController();
$managerSuiteController = new ManagerSuiteController();

try {
    if (empty($_GET['url'])) {
        $adminController->getPageLogin();
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
                            $userController->getUsers();
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
                        ////////////////////////////////////////// UTILISATEURS    
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
                        ////////////////////////////////////////// RESERVATIONS    
                    case "setBooking":
                        $bookingController->setBooking();
                        break;
                    case "getBooking":
                        $bookingController->getBooking();
                        break;
                    case "modifyBooking":
                        $bookingController->modifyBooking();
                        break;
                    case "deleteBooking":
                        $bookingController->deleteBooking();
                        break;
                        ////////////////////////////////////////// HOTELS
                    case "form-add-hotel":
                        $hotelController->formHotel();
                        break;
                    case "add-hotel":
                        $hotelController->setHotel();
                        break;
                    case "modify-hotel":
                        $hotelController->modifyHotel();
                        break;
                    case "delete-hotel":
                        $hotelController->deleteHotel();
                        break;
                        ////////////////////////////////////////// CONNEXION
                    case "deconnexion":
                        $adminController->deconnexion();
                        break;
                        ////////////////////////////////////////// ADMINISTRATEUR
                    case "adminConnexion":
                        $adminController->adminConnexion();
                        break;
                    case "admin":
                        $adminController->accueilAdmin();
                        break;
                    case "gestionHotel":
                        $adminController->gestionHotel();
                        break;
                    case "gestionManager":
                        $adminController->gestionManager();
                        break;
                    case "modifManager":
                        $managerController->modifyManager();
                        break;
                    case "ajoutManagerView":
                        $adminController->ajoutManagerView();
                        break;
                    case "ajoutManagerDB":
                        $managerController->addManager();
                        break;
                    case "deleteManagerDB":
                        $managerController->deleteManager();
                        break;
                        ////////////////////////////////////////// MANAGER
                    case "manager":
                        $managerSuiteController->accueilManager();
                        break;
                    case "gestionSuite":
                        $managerSuiteController->gestionSuite();
                        break;
                    case "modifSuite":
                        $managerSuiteController->modifSuite();
                        break;
                    case "ajoutSuiteView":
                        $managerSuiteController->ajoutSuiteView();
                        break;
                    case "ajoutSuite":
                        $managerSuiteController->ajoutSuite();
                        break;
                    case "deleteSuite":
                        $managerSuiteController->deleteDBSuite();
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

