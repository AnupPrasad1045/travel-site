class MobileMenu {
    constructor() {
      this.menuIcon = document.querySelector(".site-header__menu-icon")  /* document.querySelecetor is used to refer the DOM element. It will select the element matching the paramter given*/
      this.menuContent = document.querySelector(".site-header__menu-content")
      this.siteHeader = document.querySelector(".site-header")
      this.events()
    }
  
    events() {
      this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }
  
    toggleTheMenu() {
      this.menuContent.classList.toggle("site-header__menu-content--is-visible")
      this.siteHeader.classList.toggle("site-header--is-expanded")
      this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }
  }
  
  export default MobileMenu