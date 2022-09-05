<?php ob_start() ?>

<form class="container mt-5 w-75" method="POST" , action="<?= URL ?>back/add-hotel">
  <div class="form-group">
    <label for="nom">Nom de l'établissement</label>
    <input type="text" class="form-control" id="nom" name="nom">
  </div>
  <div class="form-group">
    <label for="adresse">Adresse de l'établissement</label>
    <input type="text" class="form-control" id="adresse" name="adresse">
  </div>
  <div class="form-group row">
    <div class="col-6">
      <label for="cp">Code postal</label>
      <input type="text" class="form-control" id="cp" name="cp">
    </div>
    <div class="col-6">
      <label for="ville">Ville</label>
      <input type="text" class="form-control" id="ville" name="ville">
    </div>
  </div>
  <div class="form-group6">
    <label for="telephone">Numéro de téléphone</label>
    <input type="text" class="form-control" id="telephone" name="telephone">
  </div>
  <div class="form-group">
    <label for="description">Description de l'établissement</label>
    <textarea class="form-control" id="description" rows="3" name="description"></textarea>
  </div>
  <div class="form-group">
    <label for="image">Nom de l'image <i>(ex : 'image.jpg')</i></label>
    <input type="text" class="form-control" id="image" name="image">
  </div>
  <div class="row mt-3 px-5">
    <button type="submit" class="btn btn-primary">Créer</button>
  </div>
</form>

<?php
$content = ob_get_clean();
$titre = "Création d'un établissement";
require "views/common/template.php";
