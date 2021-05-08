//Task 3.0
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];


//task 1.0
const mainEl = document.querySelector('main');
//task 2.0
const topMenuEl = document.querySelector('#top-menu');

//task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//task 1.2
mainEl.innerHTML = '<h1> SEI ROCKS! </h1>'
//task 1.3
mainEl.classList.add('flex-ctr')
//task 2.1
topMenuEl.style.height = '100%';
//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//task 2.3
topMenuEl.classList.add('flex-around');

//Task 3.1

// for in loop: for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }



for(let menulink of menuLinks){

  const link = document.createElement('a');
  link.textContent = menulink.text
  link.setAttribute('href', menulink.href)
  topMenuEl.appendChild(link)
  // console.log(topMenuEl)
}
