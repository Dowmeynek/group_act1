<template>
<top/>
  <div>
        <!-- Start Hero Section -->
        <div class="hero">
      <div class="container">
        <div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Shop</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="/" class="btn btn-secondary me-2">Back to Home</a></p>
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
    <!-- End Hero Section -->
  <div class="product-section">
      <div class="container">
          <div class="row">
                 <!-- Start Sofa -->
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/product-6.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">2 Seats Sofa</h3>
                      <strong class="product-price">$110.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div> 
             <!-- End Sofa -->
                       <!-- Start Sofa -->
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/sofa.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Single Sofa</h3>
                      <strong class="product-price">$100.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div> 
             <!-- End Sofa -->
                        <!-- Start Sofa -->
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/couch.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Couch</h3>
                      <strong class="product-price">$150.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div> 
             <!-- End Sofa -->
                <!-- Start Column 2 -->
                <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/product-5.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Elegant</h3>
                      <strong class="product-price">$80.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div> 
              <!-- End Column 2 -->



              <!-- Start Column 2 -->
              <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/product-1.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Nordic Chair</h3>
                      <strong class="product-price">$50.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div> 
              <!-- End Column 2 -->

              <!-- Start Column 3 -->
              <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/product-2.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Kruzo Aero Chair</h3>
                      <strong class="product-price">$78.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div>
              <!-- End Column 3 -->

              <!-- Start Column 4 -->
              <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/product-3.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Ergonomic Chair</h3>
                      <strong class="product-price">$43.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div>
              <!-- End Column 4 -->
                   <!-- Start Column 5 -->
                   <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item" href="cart.html">
                      <img :src="require('@/assets/img/icons/product-4.png')" class="img-fluid product-thumbnail">
                      <h3 class="product-title">Gaming Chair</h3>
                      <strong class="product-price">$60.00</strong>

                      <span class="icon-cross">
                          <img :src="require('@/assets/img/icons/cross.svg')" class="img-fluid">
                      </span>
                  </a>
              </div>
              <!-- End Column 5 -->

          </div>
      </div>
  </div>
  <!-- End Product Section -->
</div>
</template>

<script>
import top from"@/components/Homepage/top.vue";
export default {
  components: {
    top
  }
};
</script>