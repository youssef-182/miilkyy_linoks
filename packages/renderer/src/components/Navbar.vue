<template>
  <nav class="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <label
            class="nav-link"
            for="add-game"
            style="cursor: pointer;"
          >
            Add game
            <input
              id="add-game"
              class="visually-hidden"
              type="file"
              name="add-game"
            >
          </label>
          <!-- <a class="nav-link" aria-current="page" href="#">Add game</a> -->
        </li>
        <li class="nav-item">
          <label class="nav-link">Link</label>
        </li>
        <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        <!-- <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
      </ul>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        >
        <button
          class="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
      <!-- </div> -->
    </div>
  </nav>
</template>

<style>
.list-group-menu-1 > li {
  list-style-type: none;
}

.list-group-menu-1 > li:hover {
  cursor: pointer;
}
</style>