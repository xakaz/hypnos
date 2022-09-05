<?php ob_start() ?>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Mot de passe</th>
      <th scope="col">Id hotel</th>
      <th scope="col" colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($managers as $manager) : ?>
      <?php if(empty($_POST['id']) || $_POST['id'] != $manager['id']) : ?>
      <tr>
        <th scope="row"><?= $manager['id'] ?></th>
        <td><?= $manager["prenom"] ?></td>
        <td><?= $manager["nom"] ?></td>
        <td><?= $manager["email"] ?></td>
        <td><?= $manager["password"] ?></td>
        <td><?= $manager["manager_hotel"] ?></td>
        <td>
        <form method="post" action="" >
        <input type="hidden" name="id" value="<?= $manager['id'] ?>">
          <button class="btn btn-warning" type="submit">Modifier</button>
          </form>

        </td>
        <td>
          <form method="post" action="<?= URL ?>back/deleteManagerDB" >
            <input type="hidden" name="id" value="<?= $manager['id'] ?>">
            <button class="btn btn-danger" type="submit">Supprimer</button>
          </form>
        </td>
      </tr>

      <?php else : ?>

        <form method="post" action="<?= URL ?>back/modifManager">
          <tr>
            <td ><?= $manager['id']?></td>
            <td><input type="text" name="prenom" value="<?= $manager['prenom'] ?>"class="form-control" ></td>
            <td><input type="text" name="nom" value="<?= $manager['nom'] ?>"class="form-control" ></td>
            <td><input type="text" name="email" value="<?= $manager['email'] ?>"class="form-control" ></td>
            <td><input type="text" name="password" value="<?= $manager['password'] ?>"class="form-control" ></td>
            <td><input type="text" name="manager_hotel" value="<?= $manager['manager_hotel'] ?>"class="form-control" ></td>
         
            <td colspan="2">
              <input type="hidden" 
              name="id" 
              value="<?= $manager['id']?>">
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
$titre = "Gestion des managers";
require "views/common/template.php";
