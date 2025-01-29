//! part 1//
//select anad cache the main element
const mainEl = document.querySelector('main');

//set the background color to the value of main bg CSS custom property 
mainEl.style.backgroundColor = 'var(--main-bg)';

//set the content mainEl to h1
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add the class "flex-ctr" to mainEl
mainEl.classList.add('flex-ctr');


//! part 2//
//select and chace the nav elemen 
const topMenuEl = document.getElementById('top-menu');
// console.log(topMenuEl)

//set the height 
topMenuEl.style.height = '100%';

//set the background color to the value in css custom property 
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add the class flex around 
topMenuEl.classList.add('flex-around');


//! part 3//
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  menuLinks.forEach(link => {
    // Create an a element
    const linkEl = document.createElement('a');

  // Set the href attribute
  linkEl.setAttribute('href', link.href);
  
  // Set the text content
  linkEl.textContent = link.text;
  
  // Append the a element to topMenuEl
  topMenuEl.appendChild(linkEl);
});