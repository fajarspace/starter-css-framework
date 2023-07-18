"use strict";

(function () {
  'use strict';

  var Navbar = function Navbar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  var Modal = {
    element: document.getElementById("myModal"),
    btn: document.getElementById("myBtn"),
    span: document.getElementsByClassName("close")[0],
    open: function open() {
      this.element.style.display = "block";
    },
    close: function close() {
      this.element.style.display = "none";
    },
    closeOutside: function closeOutside(event) {
      if (event.target === this.element) {
        this.element.style.display = "none";
      }
    }
  };
  Navbar.init();
  Modal.init();
})();