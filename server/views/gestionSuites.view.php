<?php ob_start() ?>

<table class="table table-striped my-5">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nom</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Prix</th>
      <th scope="col">Liens Booking</th>
      <th scope="col" colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($suites as $suite) : ?>
      <?php
      if ($suite['suite_hotel'] === $manager['manager_hotel']) {
        if (empty($_POST['suite_id']) || $_POST['suite_id'] != $suite['suite_id']) {
      ?>
          <tr>
            <th scope="row"><?= $suite['suite_id'] ?></th>
            <td><?= $suite["suite_name"] ?></td>
            <td><?= $suite["suite_description"] ?></td>
            <td><?= $suite["suite_image"] ?></td>
            <td><?= $suite["suite_prix"] ?></td>
            <td><?= $suite["suite_link"] ?></td>
            <td>
              <form method="post" action="">
                <input type="hidden" name="suite_id" value="<?= $suite['suite_id'] ?>">
                <button class="btn btn-warning" type="submit">Modifier</button>
              </form>

            </td>
            <td>
              <form method="post" action="<?= URL ?>back/deleteSuite">
                <input type="hidden" name="suite_id" value="<?= $suite['suite_id'] ?>">
                <button class="btn btn-danger" type="submit">Supprimer</button>
              </form>
            </td>
          </tr>

        <?php } else { ?>

          <form method="post" action="<?= URL ?>back/modifSuite">
            <tr>
              <td><?= $suite['suite_id'] ?></td>
              <td><input type="text" name="suite_name" value="<?= $suite['suite_name'] ?>" class="form-control"></td>
              <td><input type="text" name="suite_description" value="<?= $suite['suite_description'] ?>" class="form-control"></td>
              <td><input type="text" name="suite_image" value="<?= $suite['suite_image'] ?>" class="form-control"></td>
              <td><input type="text" name="suite_prix" value="<?= $suite['suite_prix'] ?>" class="form-control"></td>
              <td><input type="text" name="suite_link" value="<?= $suite['suite_link'] ?>" class="form-control"></td>
             
              <td colspan="2">
                <input type="hidden" name="suite_id" value="<?= $suite['suite_id'] ?>">
                <button class="btn btn-primary" type="submit">Valider</button>
              </td>
            </tr>
          </form>

      <?php }
      } ?>

    <?php endforeach ?>
  </tbody>
</table>

<?php
$content = ob_get_clean();
$titre = "Gestion des suites";
require "views/common/template.php";
