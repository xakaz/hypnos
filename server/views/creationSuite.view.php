<?php ob_start() ?>

<form class="container mt-5 w-75" method="POST" , action="<?= URL ?>back/ajoutSuite">

  <div class="form-group my-4 ">
    <input type="hidden" class="form-control" id="suite_hotel" name="suite_hotel" value="<?= $manager['manager_hotel'] ?>">
  </div>
  <div class="form-group my-4">
    <label class="mb-2" for="suite_name">Nom de la suite</label>
    <input type="text" class="form-control" id="suite_name" name="suite_name">
  </div>
  <div class="form-group my-4">
    <label class="mb-2" for="suite_description">Description</label>
    <textarea class="form-control"  name="suite_description"></textarea>
  </div>
  <div class="form-group my-4">
    <label class="mb-2" for="suite_image">Nom de l'image <i>(ex : 'image.jpg')</i></label>
    <input type="text" class="form-control" id="suite_image" name="suite_image">
  </div>
  <div class="form-group my-4">
    <label class="mb-2" for="suite_prix">Prix par nuit</label>
    <input type="text" class="form-control" id="suite_prix" name="suite_prix">
  </div>
  
  <div class="form-group my-4">
    <label class="mb-2" for="suite_link" class="suite_link">Lien Booking</label>
    <textarea class="form-control" id="suite_link" name="suite_link"></textarea>
  </div>
  <div class="row mt-3 px-5">
    <button type="submit" class="btn btn-primary">Créer</button>
  </div>
</form>

<?php
$content = ob_get_clean();
$titre = "Création d'une suite";
require "views/common/template.php";