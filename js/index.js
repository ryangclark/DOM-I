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

// ––– nav.a ––– //
// store nav text in an array
const navList = [];
for (let item in siteContent.nav) {
  if (item.toString().includes('nav')) {
    navList.push(siteContent.nav[item]);
  }
}
// get 'nav a' elements
const navLinks = document.querySelectorAll('nav a');
// set the text for each nav link
for (let i = 0; i < navList.length; i++) {
  navLinks[i].textContent = navList[i];
}

// ––– CTA ––– //
// h1
document.querySelector('.cta-text').children['0'].textContent = siteContent.cta['h1'];
// button
document.querySelector('.cta-text').children['1'].textContent = siteContent.cta['button'];
//  img
document.getElementById('cta-img').src = siteContent.cta['img-src'];

// ––– Main Content Section ––– //
const mainContent = document.querySelector('.main-content');

// div.top-content
const topContent = mainContent.children['0']; // Features and About divs
const features = topContent.children['0'];
const about = topContent.children['1'];
// set features content
features.children['0'].textContent = siteContent['main-content']['features-h4'];
features.children['1'].textContent = siteContent['main-content']['features-content'];
// set about content
about.children['0'].textContent = siteContent['main-content']['about-h4'];
about.children['1'].textContent = siteContent['main-content']['about-content'];

// img#middle-img
mainContent.children['1'].src = siteContent['main-content']['middle-img-src'];

// div.bottom-content
const bottomContent = mainContent.children['2']; // Services, Product, Vision
// set services content
bottomContent.children['0'].children['0'].textContent = siteContent['main-content']['services-h4'];
bottomContent.children['0'].children['1'].textContent = siteContent['main-content']['services-content'];
// set product content
bottomContent.children['1'].children['0'].textContent = siteContent['main-content']['product-h4'];
bottomContent.children['1'].children['1'].textContent = siteContent['main-content']['product-content'];
// set vision content
bottomContent.children['2'].children['0'].textContent = siteContent['main-content']['vision-h4'];
bottomContent.children['2'].children['1'].textContent = siteContent['main-content']['vision-content'];

// ––– Contact Section ––– //
const contact = document.querySelector('.contact');
contact.children['0'].textContent = siteContent.contact['contact-h4'];
contact.children['1'].textContent = siteContent.contact['address'];
contact.children['2'].textContent = siteContent.contact['phone'];
contact.children['3'].textContent = siteContent.contact['email'];

// ––– Footer ––– //
document.getElementsByTagName('footer')['0'].children['0'].textContent = siteContent.footer.copyright;
