<template>
  <header>
    <div class="container">
      <div class="navbar navbar-expand">
        <a href="#" class="link navbar-brand mr-auto">
          <img
            src="./../assets/logo.svg"
            alt="Hcode treinamentos"
            class="img d-inline-block align-top"
            id="logo"
          />Futebol clube
        </a>
        <div class="links mr-2">
          <router-link class="btn mr-5" to="/">Início</router-link>
          <router-link class="btn mr-5" to="news">Notícias</router-link>
          <router-link class="btn mr-5" to="classicicacoes"
            >Classificações</router-link
          >

          <select
            name="championship"
            id="select-championship"
            class="form-control"
            @change="$emit('select-championship', $event.target.value)"
          >
            <option value="">Selecione um campeonato</option>
            <option value="Campeonato Brasileiro" selected>
              Campeonato Brasileiro
            </option>
            <option value="Campeonato Espanhol">Campeonato Espanhol</option>
            <option value="Campeonato Inglês">Campeonato Inglês</option>
            <option value="Campeonato Italiano">Campeonato Italiano</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #000;
}

#logo {
  width: 150px;
  height: 100%;
}

.links {
  display: inline-flex;
}

.links a {
  color: #fff;
}

.links a:focus {
  outline: none !important;
  box-shadow: none !important;
}

.link {
  color: #d48e23;
  font-size: 30px;
  font-family: "Rajdhani";
}

.link-active {
  background-color: #fff;
  color: #333 !important;
}
</style>