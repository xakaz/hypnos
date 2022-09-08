<?php ob_start(); ?>

<form method="POST" action="<?= URL ?>/back/adminConnexion">
  <div class="form-group">
    <label for="login">Login</label>
    <input type="text" class="form-control" id="login" name="login">
  </div>

  <div class="form-group mt-3">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" name="password">
  </div>

  <button type="submit" class="btn btn-primary mt-3">Se connecter</button>
  <?php if (isset($_SESSION['access']) && $_SESSION['access'] === "error") { ?>
    <p class="text-center text-danger">Login ou mot de passe incorrect</p>
  <?php } ?>
  <?php if (isset($_SESSION['access']) && $_SESSION['access'] === "empty") { ?>
    <p class="text-center text-danger">Veuillez renseigner vos identifiants</p>
  <?php } ?>

</form>


<?php
$content = ob_get_clean();
$titre = "Connexion";
require "views/common/template.php";
