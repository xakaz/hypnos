<?php ob_start() ?>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nom</th>
      <th scope="col">Adresse</th>
      <th scope="col">Code Postal</th>
      <th scope="col">Ville</th>
      <th scope="col">Téléphone</th>
      <th scope="col">Description</th>
      <th scope="col">Nom image</th>
      <th scope="col" colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($hotels as $hotel) : ?>
      <?php if (empty($_POST['hotel_id']) || $_POST['hotel_id'] != $hotel['hotel_id']) : ?>
        <tr>
          <th scope="row"><?= $hotel['hotel_id'] ?></th>
          <td><?= $hotel["hotel_name"] ?></td>
          <td><?= $hotel["hotel_adresse"] ?></td>
          <td><?= $hotel["hotel_cp"] ?></td>
          <td><?= $hotel["hotel_ville"] ?></td>
          <td><?= $hotel["hotel_telephone"] ?></td>
          <td><?= substr($hotel["hotel_description"], 0, 20) . "..." ?></td>
          <td><?= $hotel["hotel_image"] ?></td>
          <td>
            <form method="post" action="">
              <input type="hidden" name="hotel_id" value="<?= $hotel['hotel_id'] ?>">
              <button class="btn btn-warning" type="submit">Modifier</button>
            </form>

          </td>
          <td>
            <form method="post" action="<?= URL ?>back/delete-hotel">
              <input type="hidden" name="hotel_id" value="<?= $hotel['hotel_id'] ?>">
              <button class="btn btn-danger" type="submit">Supprimer</button>
            </form>
          </td>
        </tr>

      <?php else : ?>

        <form method="POST" action="<?= URL ?>back/modify-hotel">
          <tr>
            <td><?= $hotel['hotel_id'] ?></td>
            <td>
              <input type="text" name="nom" value="<?= $hotel["hotel_name"] ?>" class="form-control">
            </td>
            <td>
              <input type="text" name="adresse" value="<?= $hotel["hotel_adresse"] ?>" class="form-control">
            </td>
            <td>
              <input type="text" name="cp" value="<?= $hotel["hotel_cp"] ?>" class="form-control">
            </td>
            <td>
              <input type="text" name="ville" value="<?= $hotel["hotel_ville"] ?>" class="form-control">
            </td>
            <td>
              <input type="text" name="telephone" value="<?= $hotel["hotel_telephone"] ?>" class="form-control">
            </td>
            <td>
              <textarea name="description" rows="3" class="form-control"><?= $hotel['hotel_description'] ?></textarea>
            </td>
            <td>
              <input type="text" name="image" value="<?= $hotel["hotel_image"] ?>" class="form-control">
            </td>
            <td colspan="2">
              <input type="hidden" name="id" value="<?= $hotel['hotel_id'] ?>">
              <button class="btn btn-primary" type="submit">Valider</button>
            </td>
          </tr>
        </form>

      <?php endif; ?>

    <?php endforeach ?>
  </tbody>
</table>

<?php
$content = ob_get_clean();
$titre = "Gestion des hôtels";
require "views/common/template.php";
