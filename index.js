


// Menu data structure

var menuLinks = [

  { text: 'about', href: '/about' },

  {
    text: 'catalog', href: '#', subLinks: [

      { text: 'all', href: '/catalog/all' },

      { text: 'top selling', href: '/catalog/top' },

      { text: 'search', href: '/catalog/search' },

    ]
  },

  {
    text: 'orders', href: '#', subLinks: [

      { text: 'new', href: '/orders/new' },

      { text: 'pending', href: '/orders/pending' },

      { text: 'history', href: '/orders/history' },

    ]
  },

  {
    text: 'account', href: '#', subLinks: [

      { text: 'profile', href: '/account/profile' },

      { text: 'sign out', href: '/account/signout' },

    ]
  },

];

// Part 1:
//Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

//---------------------------------------------------------------------------------------------
// Part:2 Creating a Menu Bar

const topmenuEl = document.getElementById("top-menu");

topmenuEl.style.height = "100%";

topmenuEl.style.backgroundColor = "var(--top-menu-bg)"

topmenuEl.classList.add("flex-around");

//--------------------------------------------------------------------------------------

// Part 3: Adding Menu Buttons

menuLinks.forEach(function (link) {

  const a = document.createElement("a");

  a.setAttribute("href", link.href);

  a.textContent = link.text;

  topmenuEl.appendChild(a);

});

/*
Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

Set the height subMenuEl element to be "100%".

Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

Add the class of flex-around to the subMenuEl element.*/


const submenuEl = document.getElementById("sub-menu");

submenuEl.style.height = "100%";

submenuEl.style.backgroundColor = "var(--sub-menu-bg)";

submenuEl.classList.add("flex-around");


//Set the CSS position property of subMenuEl to the value of absolute.

//Set the CSS top property of subMenuEl to the value of 0.

submenuEl.style.position = "absolute";
submenuEl.style.top = "0";


  /*Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
  Attach a delegated 'click' event listener to topMenuEl.
  The first line of code of the event listener function should call the event object's preventDefault() method.
  The second line of code of the function should immediately return if the element clicked was not an <a> element.
  Log the content of the <a> to verify the handler is working.*/
  /*topmenuEl = addEventListener("click", menie(e))
  function menie(e) {
    console.log('test');
    e.preventDefault();
    if (!e.target.classList.contains("active"))
      if (!e.target.tagName === "A") return;
    console.dir(e.target);
  }
  console.log(topmenuLinks);*/
  const topMenuLinks=topmenuEl.querySelectorAll("a");
  topmenuEl.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName!=="A") return;
    
      console.log(e.target.textContent);
      const tarLink=e.target;
      if(!tarLink.classList.contains("active"))
      {
        topMenuLinks.forEach(link=> {
          link.classList.remove("active");
        });
       tarLink.classList.add("active");
       const linkObj = menuLinks.find(link=>link.text===tarLink.textContent);

      if (linkObj.subLinks) {
        submenuEl.style.top = "100%";
      }
      else {
        submenuEl.style.top = "0";
      }
       
      }
    
  }); 

  //Part-5

  /*Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  Otherwise, set the CSS top property of subMenuEl to 0.
  Hint: Caching the "link" object will come in handy for passing its subLinks array later.*/
  /*const links = document.querySelectorAll(".topmenuLinks");
  links.forEach((link, index)=> {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (!this.classList.contains("active"))
      {
      links.forEach(item => {
        item.classList.remove("active");
      });
      this.classList.add("active");
      const linkObj = menuLinks[index];

      if (linkObj.subLinks) {
        submenuEl.style.top = "100%";
      }
      else {
        submenuEl.style.top = "0";
      }
    }
  });
});
*/


part-6

/*Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.

The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:

Clear the current contents of subMenuEl.

Iterate over the subLinks array, passed as an argument, and for each "link" object:

Create an <a> element.

Add an href attribute to the <a>, with the value set by the href property of the "link" object.

Set the element's content to the value of the text property of the "link" object.

Append the new element to the subMenuEl.

Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, 
remembering to pass the array of sub-links as an argument.
The menu is almost complete! Now, we need to add interactions to the submenu items themselves:

Attach a delegated 'click' event listener to subMenuEl.

The first line of code of the event listener function should call the event object's preventDefault() method.

The second line of code within the function should immediately return if the element clicked was not an <a> element.

Log the content of the <a> to verify the handler is working.

Next, the event listener should set the CSS top property of subMenuEl to 0.

Remove the active class from each <a> element in topMenuLinks.

Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.

If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

*/