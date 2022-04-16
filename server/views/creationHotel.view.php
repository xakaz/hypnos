<?php ob_start() ?>

<form class="container mt-5 w-75" method="post", action="<?= URL ?>back/add-hotel">
  <div class="form-group">
    <label for="nom">Nom de l'établissement</label>
    <input type="text" class="form-control" id="nom">
  </div>
  <div class="form-group">
    <label for="adresse">Adresse de l'établissement</label>
    <input type="text" class="form-control" id="adresse">
  </div>
  <div class="form-group row">
    <div class="col-6">
      <label for="cp">Code postal</label>
      <input type="text" class="form-control" id="cp">
    </div>
    <div class="col-6">
      <label for="ville">Ville</label>
      <input type="text" class="form-control" id="ville">
    </div>
  </div>
  <div class="form-group6">
    <label for="telephone">Numéro de téléphone</label>
    <input type="text" class="form-control" id="telephone">
  </div>
  <div class="form-group">
    <label for="description">Description de l'établissement</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="image">Nom de l'image <i>(ex : 'image.jpg')</i></label>
    <input type="text" class="form-control" id="image">
  </div>
  <div class="form-group">
    <label for="plan">Src de l'iframe Google Maps</label>
    <input type="text" class="form-control" id="plan">
  </div>

  <button type="submit" class="btn btn-primary">Créer</button>
</form>

<?php
$content = ob_get_clean();
$titre = "Création d'un établissement";
require "views/common/template.php";