$(document).ready(function() {
  $("a").on("click", function(a) {
    if (this.hash !== "") {
      var b = this.hash;
      window.location.hash = b
    }
  })
});
