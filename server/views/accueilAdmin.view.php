<?php ob_start() ?>

<h1>accueil admin</h1>


<?php
$content = ob_get_clean();
$titre = "admin";
require "views/common/template.php";
