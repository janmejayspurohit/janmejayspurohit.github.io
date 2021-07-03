(function() {
  var b, a = function(c, d) {
    return function() {
      return c.apply(d, arguments)
    }
  };
  b = (function() {
    function c() {}
    c.prototype.extend = function(f, g) {
      var d, e;
      for (d in f) {
        e = f[d];
        if (e != null) {
          g[d] = e
        }
      }
      return g
    };
    c.prototype.isMobile = function(d) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d)
    };
    return c
  })();
  this.WOW = (function() {
    c.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true
    };

    function c(d) {
      if (d == null) {
        d = {}
      }
      this.scrollCallback = a(this.scrollCallback, this);
      this.scrollHandler = a(this.scrollHandler, this);
      this.start = a(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(d, this.defaults)
    }
    c.prototype.init = function() {
      var d;
      this.element = window.document.documentElement;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle()
        } else {
          if ((d = document.readyState) === "interactive" || d === "complete") {
            return this.start()
          } else {
            return document.addEventListener("DOMContentLoaded", this.start)
          }
        }
      }
    };
    c.prototype.start = function() {
      var e, g, d, f;
      f = this.boxes;
      for (g = 0, d = f.length; g < d; g++) {
        e = f[g];
        this.applyStyle(e, true)
      }
      window.addEventListener("scroll", this.scrollHandler, false);
      window.addEventListener("resize", this.scrollHandler, false);
      return this.interval = setInterval(this.scrollCallback, 50)
    };
    c.prototype.stop = function() {
      window.removeEventListener("scroll", this.scrollHandler, false);
      window.removeEventListener("resize", this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval)
      }
    };
    c.prototype.show = function(d) {
      this.applyStyle(d);
      return d.className = "" + d.className + " " + this.config.animateClass
    };
    c.prototype.applyStyle = function(f, g) {
      var d, h, e;
      h = f.getAttribute("data-wow-duration");
      d = f.getAttribute("data-wow-delay");
      e = f.getAttribute("data-wow-iteration");
      return f.setAttribute("style", this.customStyle(g, h, d, e))
    };
    c.prototype.resetStyle = function() {
      var f, h, e, g, d;
      g = this.boxes;
      d = [];
      for (h = 0, e = g.length; h < e; h++) {
        f = g[h];
        d.push(f.setAttribute("style", "visibility: visible;"))
      }
      return d
    };
    c.prototype.customStyle = function(g, h, d, f) {
      var e;
      e = g ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (h) {
        e += "-webkit-animation-duration: " + h + "; -moz-animation-duration: " + h + "; animation-duration: " + h + ";"
      }
      if (d) {
        e += "-webkit-animation-delay: " + d + "; -moz-animation-delay: " + d + "; animation-delay: " + d + ";"
      }
      if (f) {
        e += "-webkit-animation-iteration-count: " + f + "; -moz-animation-iteration-count: " + f + "; animation-iteration-count: " + f + ";"
      }
      return e
    };
    c.prototype.scrollHandler = function() {
      return this.scrolled = true
    };
    c.prototype.scrollCallback = function() {
      var d;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var h, f, g, e;
          g = this.boxes;
          e = [];
          for (h = 0, f = g.length; h < f; h++) {
            d = g[h];
            if (!(d)) {
              continue
            }
            if (this.isVisible(d)) {
              this.show(d);
              continue
            }
            e.push(d)
          }
          return e
        }).call(this);
        if (!this.boxes.length) {
          return this.stop()
        }
      }
    };
    c.prototype.offsetTop = function(d) {
      var e;
      e = d.offsetTop;
      while (d = d.offsetParent) {
        e += d.offsetTop
      }
      return e
    };
    c.prototype.isVisible = function(g) {
      var e, i, h, f, d;
      i = g.getAttribute("data-wow-offset") || this.config.offset;
      d = window.pageYOffset;
      f = d + this.element.clientHeight - i;
      h = this.offsetTop(g);
      e = h + g.clientHeight;
      return h <= f && e >= d
    };
    c.prototype.util = function() {
      return this._util || (this._util = new b())
    };
    c.prototype.disabled = function() {
      return this.config.mobile === false && this.util().isMobile(navigator.userAgent)
    };
    return c
  })()
}).call(this);
