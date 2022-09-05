<?php ob_start() ?>

<div class="row text-center">
  <div class="col-12 col-lg-6">
    <h2 class="mt-5">Gestion des établissements</h2>
    <hr>
    <div class="my-3">
      <a href="<?= URL ?>back/gestionHotel">Modifier ou Supprimer un établissement</a>
    </div>
    <div class="my-3">
      <a href="<?= URL ?>back/form-add-hotel">Ajouter un établissement</a>
    </div>
  </div>
  <div class="col-12 col-lg-6">
  <h2 class="mt-5">Gestion des gérants</h2>
    <hr>
    <div class="my-3">
      <a href="<?= URL ?>back/gestionManager">Modifier ou Supprimer un gérant</a>
    </div>
    <div class="my-3">
      <a href="<?= URL ?>back/ajoutManagerView">Ajouter un gérant</a>
    </div>
  </div>
</div>


<?php
$content = ob_get_clean();
$titre = "Page d'administration";
require "views/common/template.php";
