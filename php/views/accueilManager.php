<?php ob_start() ?>


<div class=" text-center">
  <div class="">
    <h2 class="mt-5">Gestion des suites de l'hôtel</h2>
    <hr>
    <div class="my-3">
      <a href="<?= URL ?>back/gestionSuite">Modifier ou Supprimer une suite</a>
    </div>
    <div class="my-3">
      <a href="<?= URL ?>back/ajoutSuiteView">Ajouter une suite</a>
    </div>
  </div>

</div>


<?php
$content = ob_get_clean();
$titre = "Manager";
require "views/common/template.php";
