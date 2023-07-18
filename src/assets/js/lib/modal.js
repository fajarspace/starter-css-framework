export const Modal = {
  element: document.getElementById("myModal"),
  btn: document.getElementById("myBtn"),
  span: document.getElementsByClassName("close")[0],
  open: function () {
    this.element.style.display = "block";
  },
  close: function () {
    this.element.style.display = "none";
  },
  closeOutside: function (event) {
    if (event.target === this.element) {
      this.element.style.display = "none";
    }
  },
};
export default Modal;
