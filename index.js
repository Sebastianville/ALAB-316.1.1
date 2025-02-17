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
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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



//! part TWO 3.1//
const subMenuEl = document.getElementById('sub-menu');

//set the height 
subMenuEl.style.height = '100%';

//set the background color of subMenuEl to the value stored in the sub menu bg 
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Add the class flex around 
subMenuEl.classList.add('flex-around');

//set the position property of subMenuEl to the value of absolute 
subMenuEl.style.position = "absolute"; 

//set the top property to the value of 0
subMenuEl.style.top = "0px"; 

//! part 2.4//
const topMenuLinks = document.querySelectorAll('a');
console.log(topMenuLinks)

topMenuEl.addEventListener('click', function(e) { 
  if (!e.target.matches('a')) {
    return 
  } 

  e.preventDefault()
  // console.log(e.target.textContent);
  
//remove the "active" class from all links
  topMenuLinks.forEach(link => {
    console.log(`Removing active from: ${link.textContent}`);
    link.classList.remove('active');
  });
  // Toggle "active" class on the clicked link
  // e.target.classList.toggle('active');

  const isActive = e.target.classList.contains('active')

  if(!isActive){
    e.target.classList.add('active')

    const linkobject = menuLinks.find(link => link.text === e.target.textContent)
   
    if (linkobject && linkobject.subLinks) {
      helperSubMenu(linkobject.subLinks)
      subMenuEl.style.top = '100%'; 
    } else {
      subMenuEl.style.top = '0'; 
    }
  } else {
    subMenuEl.style.top = '0'; 
  }
});

function helperSubMenu (subLinks) {
  subMenuEl.innerHTML = '';

  
  subLinks.forEach(link => {
    // Create <a> element
    const subLinkEl = document.createElement('a'); 
    // Set href attribute
    subLinkEl.setAttribute('href', link.href); 
    // Set text content
    subLinkEl.textContent = link.text; 
    // Append to subMenuEl
    subMenuEl.appendChild(subLinkEl); 
  });
}

subMenuEl.addEventListener('click', function (e) {
  e.preventDefault(); 
  
   // Exit if the clicked element is not an <a>
  if (!e.target.matches('a')) {
    return;
  }
  
  // Verify click event
  // console.log(`Submenu item clicked: ${e.target.textContent}`); 

  // Hide submenu
  subMenuEl.style.top = '0';

  // Remove 'active' class from all top menu links
  topMenuLinks.forEach(link => link.classList.remove('active'));

  // Update mainEl content inside an <h1>
  mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
});
