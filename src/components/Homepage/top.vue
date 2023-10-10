<template>
	<!--Installer-->
	<div v-if="iopen">
		<v-banner
				v-if="deferredPrompt"
				color="#f9bf29"
				dark
				class="text-left"
				style="background-color: #2b443b;"
				>

				<h5 id="banner">Install our app</h5> 
				
				<template v-slot:actions>
					<v-btn text @click="install">Install</v-btn>
				</template>
		</v-banner>
	</div>
	<!--End-->
<div>
  		<!-- Start Header/Navigation -->
  		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark contain" arial-label="Furni navigation bar">

  			<div class="container">
  				<a class="navbar-brand" href="/">Furni<span>.</span></a>

				<!--Modified by Rivera-->
				<!--<div> Icons made by <a href="https://www.flaticon.com/authors/kosonicon" title="kosonicon"> kosonicon </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>-->
				<div>
				<a class='pointer' @click="menubar"><img class="menu-icon" :src="require('@/assets/img/icons/menu.png')" ></a>
				<a class='pointer' @click="installerbanner"><img class="installer-icon" :src="require('@/assets/img/icons/download.png')" ></a>
				</div>
				<!--Ends-->
			</div>
  		</nav>

		<!--Hamburger Modified by Rivera-->
		<Transition>
		<div class='menu' v-if="open">
			<center>
			<ul id="links">
				<router-link to="/" tag="li" class="link" exact>Home</router-link><hr>
				<router-link to="/about" tag="li" class="link" exact>About</router-link><hr>
				<router-link to="/manage" tag="li" class="link" exact>Manage</router-link>
			</ul>
			</center>
		</div>
		</Transition>
  		<!-- End Header/Navigation -->
</div>
</template>
<script>
//Modified by Rivera
import Cookies from "js-cookie";
  export default {
    name: "Top",
  data() {
      return{
      open: false,
	  iopen: false,
	  deferredPrompt: null
      }
    },
	created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      if (Cookies.get("add-to-home-screen") === undefined) {
    this.deferredPrompt = e;
    }
    });
  window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {

      menubar: function() {
        if(this.open){
          this.open = false;
          return this.open;
        }else{
          this.open = true;
          return this.open;
        }
      },
	  installerbanner: function() {
		if(this.iopen){
          this.iopen = false;
          return this.iopen;
        }else{
          this.iopen = true;
          return this.iopen;
        }
	  },

	  /*async dismiss() {
      Cookies.set("add-to-home-screen", null, { expires: 15 });
      this.deferredPrompt = null;
      this.deferredPrompt = null;
		},*/
	  async install() {
	  this.deferredPrompt.prompt();
		}

    },
  };
  //Ends
</script>

