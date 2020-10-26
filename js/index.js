const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// let logo = document.getElementById("logo-img");
// logo.setAttribute("src", "img/logo.png")

let navItem1 = document.querySelector(".container nav a");
navItem1.textContent = siteContent["nav"]["nav-item-1"];

let navItem2 = navItem1.nextElementSibling;
navItem2.textContent = siteContent["nav"]["nav-item-2"];

let navItem3 = navItem2.nextElementSibling;
navItem3.textContent = siteContent["nav"]["nav-item-3"];

let navItem4 = navItem3.nextElementSibling;
navItem4.textContent = siteContent["nav"]["nav-item-4"];

let navItem5 = navItem4.nextElementSibling;
navItem5.textContent = siteContent["nav"]["nav-item-5"];

let ctaText = document.querySelector(".cta-text h1");
// ctaText.textContent = siteContent["cta"]["h1"];
ctaText.innerHTML = "DOM<br> Is<br> Awesome";

let ctaButtom = document.querySelector(".cta-text button");
ctaButtom.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let features = document.querySelector(".text-content h4");
features.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector(".text-content p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

let about = document.querySelector(".text-content:nth-of-type(2) h4");
about.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = about.nextElementSibling;
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let services = document.querySelector(".bottom-content .text-content h4");
services.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = services.nextElementSibling;
servicesContent.textContent = siteContent["main-content"]["services-content"];

let product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
product.textContent = siteContent["main-content"]["product-h4"];

let productContent = product.nextElementSibling;
productContent.textContent = siteContent["main-content"]["product-content"];

let vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
vision.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = vision.nextElementSibling;
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelector(".contact p");
// address.textContent = siteContent["contact"]["address"];
address.innerHTML = "123 Way 456 Street<br>Somewhere, USA";

let phone = address.nextElementSibling;
phone.textContent = siteContent["contact"]["phone"];

let email = phone.nextElementSibling;
email.textContent = siteContent["contact"]["email"];

let copyrights = document.querySelector("footer p");
copyrights.textContent = siteContent["footer"]["copyright"];

let title = document.querySelector("title");
title.textContent = "Great Idea!";