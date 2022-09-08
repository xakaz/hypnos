<?php session_start();

define("URL", str_replace("index.php", "", (isset($_SERVER['HTTPS']) ? "https" : "http") .
    "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "./controllers/front/ApiController.php";
require_once "./controllers/back/UserController.php";
require_once "./controllers/back/ConnexionController.php";
require_once './controllers/back/BookingController.php';
require_once './controllers/back/HotelController.php';
require_once './controllers/back/admin/AdminController.php';
require_once './controllers/back/admin/ManagerController.php';
require_once './controllers/back/manager/ManagerSuiteController.php';
require_once './credentials.php';

try {
    if (empty($_GET['url'])) {
        $adminController = new AdminController();
        $adminController->getPageLogin();
    } else {
        $url = explode("/", filter_var($_GET['url'], FILTER_SANITIZE_URL));
        if (empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas");
        switch ($url[0]) {
            case "front":
                switch ($url[1]) {
                    case "hotels":
                        if (empty($url[2])) {
                            $apiController = new APIController();
                            $apiController->getHotels();
                        } else {
                            $apiController = new APIController();
                            $apiController->getSelectedHotel($url[2]);
                        }
                        break;
                    case "suites":
                        $apiController = new APIController();
                        $apiController->getSuites();
                        break;
                    case "services":
                        $apiController = new APIController();
                        $apiController->getServices();
                        break;
                    case "user":
                        if (empty($url[3])) {
                            $userController = new UserController();
                            $userController->getUsers();
                        } else {
                            $userController = new UserController();
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
                        $apiController = new APIController();
                        $apiController->sendMail();
                        break;
                        ////////////////////////////////////////// UTILISATEURS    
                    case "inscription":
                        $userController = new UserController();
                        $userController->setUser();
                        break;
                    case "connexion":
                        $connexionController = new ConnexionController();
                        $connexionController->setConnexion();
                        break;
                    case "email":
                        $connexionController = new ConnexionController();
                        $connexionController->getEmailAddresses();
                        break;
                    case "modify-user":
                        $userController = new UserController();
                        $userController->modifyUser();
                        break;
                    case "delete-user":
                        $userController = new UserController();
                        $userController->deleteUser();
                        break;
                        ////////////////////////////////////////// RESERVATIONS    
                    case "setBooking":
                        $bookingController = new BookingController();
                        $bookingController->setBooking();
                        break;
                    case "getBooking":
                        $bookingController = new BookingController();
                        $bookingController->getBooking();
                        break;
                    case "modifyBooking":
                        $bookingController = new BookingController();
                        $bookingController->modifyBooking();
                        break;
                    case "deleteBooking":
                        $bookingController = new BookingController();
                        $bookingController->deleteBooking();
                        break;
                        ////////////////////////////////////////// HOTELS
                    case "form-add-hotel":
                        $hotelController = new HotelController();
                        $hotelController->formHotel();
                        break;
                    case "add-hotel":
                        $hotelController = new HotelController();
                        $hotelController->setHotel();
                        break;
                    case "modify-hotel":
                        $hotelController = new HotelController();
                        $hotelController->modifyHotel();
                        break;
                    case "delete-hotel":
                        $hotelController = new HotelController();
                        $hotelController->deleteHotel();
                        break;
                        ////////////////////////////////////////// CONNEXION
                    case "deconnexion":
                        $adminController = new AdminController();
                        $adminController->deconnexion();
                        break;
                    case "login":
                        $adminController = new AdminController();
                        $adminController->getPageLogin();
                        break;
                        ////////////////////////////////////////// ADMINISTRATEUR
                    case "adminConnexion":
                        $adminController = new AdminController();
                        $adminController->adminConnexion();
                        break;
                    case "admin":
                        $adminController = new AdminController();
                        $adminController->accueilAdmin();
                        break;
                    case "gestionHotel":
                        $adminController = new AdminController();
                        $adminController->gestionHotel();
                        break;
                    case "gestionManager":
                        $adminController = new AdminController();
                        $adminController->gestionManager();
                        break;
                    case "ajoutManagerView":
                        $adminController = new AdminController();
                        $adminController->ajoutManagerView();
                        break;
                    case "modifManager":
                        $managerController = new ManagerController();
                        $managerController->modifyManager();
                        break;
                    case "ajoutManagerDB":
                        $managerController = new ManagerController();
                        $managerController->addManager();
                        break;
                    case "deleteManagerDB":
                        $managerController = new ManagerController();
                        $managerController->deleteManager();
                        break;
                        ////////////////////////////////////////// MANAGER
                    case "manager":
                        $managerSuiteController = new ManagerSuiteController();
                        $managerSuiteController->accueilManager();
                        break;
                    case "gestionSuite":
                        $managerSuiteController = new ManagerSuiteController();
                        $managerSuiteController->gestionSuite();
                        break;
                    case "modifSuite":
                        $managerSuiteController = new ManagerSuiteController();
                        $managerSuiteController->modifSuite();
                        break;
                    case "ajoutSuiteView":
                        $managerSuiteController = new ManagerSuiteController();
                        $managerSuiteController->ajoutSuiteView();
                        break;
                    case "ajoutSuite":
                        $managerSuiteController = new ManagerSuiteController();
                        $managerSuiteController->ajoutSuite();
                        break;
                    case "deleteSuite":
                        $managerSuiteController = new ManagerSuiteController();
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
