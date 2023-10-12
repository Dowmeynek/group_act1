<template>
	<div id="app">
<dec/>
<top/>
<front/>
<prod/>

  
	</div>
  </template>
  <script>
import dec from"@/components/Homepage/dec.vue";
import top from"@/components/Homepage/top.vue";
import front from"@/components/Homepage/front.vue";
import prod from"@/components/Homepage/prod.vue";
export default {
  components: {
    front,dec,top,prod
  }
};
</script>