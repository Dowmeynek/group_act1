<style>
/* Import your CSS files here */
  @import '@/assets/assets/css/styles.min.css';
  @import '@/assets/assets/images/favicon.png';
</style>

<script>
  export default {
    name: "Style",
  mounted() {
      this.loadScripts();
  },
  methods: {
      loadScripts() {
        const scriptUrls = [
        '/public/js/sidebarmenu.js',
        '/public/js/app.min.js',
        '/public/js/dashboard.js',

        ];

        const head = document.getElementsByTagName('head')[0];

        scriptUrls.forEach((scriptUrl) => {
          const script = document.createElement('script');
          script.src = scriptUrl;
          script.async = true;
          head.appendChild(script);
        });
      },
  
    },
  };
</script>
