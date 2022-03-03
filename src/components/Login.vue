<template>
  <div class="container">
    <div class="google-icon center">
     <a href="https://observatorio.planestic.udistrital.edu.co/api/google" class="white--text sinLine">
       <!--<a href="http://192.168.0.6:3025/google" class="white--text sinLine">-->
        <button class="btn btn-light">
          <img
            class="google-icon center"
            src="../assets/images/img_cuenta.png"
            
            title="Iniciar Sesión"
          />
          Sesión
        </button>
        <!--href="https://apirepository.planestic.udistrital.edu.co/api/google"-->
      </a>
    </div>
  </div>
</template>

<script >
//import golbal from "../golba";

export default {
  name: "file",
  data() {
    return {
      currentFile: null,
      message: "",
    };
  },
  methods: {

  },

  mounted() {
    if (this.$route.query.token) {
      const { token, name, url_image, rol, email } = this.$route.query;
      if (!localStorage.token) {
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("url_image", url_image);
        localStorage.setItem("rol", rol);
        localStorage.setItem("email", email);
        localStorage.setItem("mesa", true);
       /*
        let cifrado = golbal.encrypt("Hola Mundo AES");
        localStorage.setItem("sol", cifrado);
        let desci = golbal.decrypt(cifrado);
        localStorage.setItem("luna", desci); 
        */
   
      }
      this.$router.push({ name: "home", query: { reload: "OK" } });
    }
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
.google-icon {
  width: 40px;
  height: 40px;
}
.center {
  margin: auto;
  padding: 1px;
}
.text-access {
  max-width: 300px;
  margin: auto;
}
.sinLine {
  text-decoration: none;
  text-size-adjust: 2px;
}
</style>
