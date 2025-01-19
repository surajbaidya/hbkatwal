// banner---------------------------------------------------------------------
class Banner extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var bannerLabel=document.querySelector('.banner').getAttribute('data-label');
        this.innerHTML = `
        <section class="hero-section text-center d-flex justify-content-center flex-column "
            style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0.4%, rgba(111, 111, 111, 0) 29.82%),url(./images/nae-4-img.png); height:383px;">
            <div class="page-label">
                <span>
                    ${bannerLabel}
                </span>
            </div>
        </section>`;
    }
}
customElements.define("banner-component", Banner);


// footer---------------------------------------------------------------------
class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        
        this.innerHTML = `
            <section class="footer">
                <div class="wrapper">
                    <div class="footer__upper">
                        <div class="footer__company-description">
                            <img src="./images/logo.png" alt="hbk publick speaking compy
                            logo" title="hbk publick speaking compy logo">
                            <p>
                                Be sure to take a look at our Terms of Use and Privacy Policy
                            </p>
                        </div>
                       
                        <ul class="footer__navigation">
                            <li class="title">
                                About
                            </li>
                            <li>
                                <a href="">
                                    
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Career
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul class="footer__navigation">
                            <li class="title">
                                Company
                            </li>
                            <li>
                                <a href="">
                                    Privacy</a>
                            </li>
                            <li>
                                <a href="">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Help Desk
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <div class="footer__newsletter">
                            <h2>
                                Subscribe our Newsletters
                            </h2>
                            
                            <div class="footer__newsletter__form">
                                <form action="">
                                    <input type="text" placeholder="Your email">
                                    <a href="" class="btn__subscribe">
                                        <span>
                                            subscribe
                                        </span>
                                    </a>
                                </form>
                                <ul class="sociial-media-icons">
                                    <a href="">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa-brands fa-facebook-square"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa-brands fa-google-plus-g"></i>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__copyright wrapper">
                    <div>
                        Copyright 2022 HBKatwal. All Right Reserved.
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("footer-component", Footer);


// navbar---------------------------------------------------------------------
class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
     
        this.innerHTML = `<nav class="navbar">
        <div class="container-fluid wrapper">
          <a class="navbar-brand" href="index.html"><img src="./images/logo.png" alt="hb katwal logo"></a>
          <div class="nav-hamburger"  href="javascript:void(0)" onclick="w3_open()" >
            <i class="fa-solid fa-bars"></i>
          </div>
          <ul class="navbar-nav">
            <li class="nav-close-item">  
              <a href="javascript:void(0)" onclick="w3_close()" 
            class="navbar-close-btn">X</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about-us.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="programme.html">Programs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="news-and-events.html">News / Events </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="shop.html">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="backdrop-overlay" onclick="w3_close()" style="cursor:pointer"></div>
      `;
    }
}
customElements.define("navbar-component", Navbar);

