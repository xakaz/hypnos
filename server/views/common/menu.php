

  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand mx-5" href="<?= URL ?>back/admin">Hypnos</a>
    
    
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto text-center">
        <?php if (!Securite::verifAccessSession()) : ?>
          <li class="nav-item active">
          <a class="nav-link" href="<?= URL ?>back/login">Se connecter</a>
        </li>
        <?php else : ?>
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
            <a class="nav-link" href="<?= URL ?>back/ajoutManager">Ajout d'un gérant</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/gestionManager">Modification des gérants</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?= URL ?>back/deconnexion">Déconnexion</a>
          </li>
          <?php endif; ?>
        </ul>
      </div>
    </nav>
