<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="<?php (!Securite::verifAccessSessionManager()) ? URL ."back/admin" : URL ."back/manager" ?>">Hypnos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto text-center">
        <?php if (!Securite::verifAccessSession() && !Securite::verifAccessSessionManager()) { ?>
          <li class="nav-item active">
            <a class="nav-link" href="<?= URL ?>back/login">Se connecter</a>
          </li>
        <?php } else if (Securite::verifAccessSession()) { ?>
          <li class="nav-item active">
            <a class="nav-link" href="<?= URL ?>back/admin">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/form-add-hotel">Ajout établissements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/gestionHotel">Modification établissements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/ajoutManagerView">Ajout d'un gérant</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/gestionManager">Modification des gérants</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="<?= URL ?>back/deconnexion">Déconnexion</a>
          </li>
        <?php } else { ?>
          <li class="nav-item active">
            <a class="nav-link" href="<?= URL ?>back/manager">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/ajoutSuiteView">Ajout suite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/gestionSuite">Modification Suite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="<?= URL ?>back/deconnexion">Déconnexion</a>
          </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</nav>