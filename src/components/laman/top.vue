<template>
<div>
  		<!-- Start Header/Navigation -->
  		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark contain" arial-label="Furni navigation bar">

  			<div class="container">
  				<a class="navbar-brand" href="/">Furni<span>.</span></a>

  				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
  					<span class="navbar-toggler-icon"></span>
  				</button>

				<!--Modified by Rivera-->
				<a id='hamburger' @click="menubar"><img class="menu-icon" :src="require('@/assets/img/icons/menu.png')" ></a>
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
	  <div>
  	
		<div class="hero">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-5">
						<div class="intro-excerpt">
							<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
							<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
						</div>
					</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								<img :src="require('@/assets/img/icons/couch.png')" class="img-fluid">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

</div>
</template>
<script>
//Modified by Rivera
  export default {
    name: "Top",
  data() {
      return{
      open: false,
      }
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
      }
    },
  };
  //Ends
</script>

