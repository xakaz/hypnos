<?php ob_start() ?>

<form class="container mt-5 w-75" method="POST" , action="<?= URL ?>back/ajoutManagerDB">
  <div class="form-group">
    <label for="prenom">Prénom</label>
    <input type="text" class="form-control" id="prenom" name="prenom">
  </div>
  <div class="form-group">
    <label for="nom">Nom</label>
    <input type="text" class="form-control" id="nom" name="nom">
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="text" class="form-control" id="email" name="email">
  </div>
  <div class="form-group">
    <label for="password">Mot de passe</label>
    <input type="text" class="form-control" id="password" name="password">
  </div>
  <div class="row mt-3 px-5">
    <button type="submit" class="btn btn-primary">Créer</button>
  </div>
</form>

<?php
$content = ob_get_clean();
$titre = "Création d'un gérant d'établissement";
require "views/common/template.php";
