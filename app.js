const menu = [
  {
    id: 1,
    title: "Cheese stick",
    category: "breakfast",
    price: 15.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/03/d3/9c/e8/wtf-what-tasty-food.jpg",
    desc: `Cheese sticks are deep-fried snacks composed of sliced cheeses wrapped in spring roll wrapper. This is totally different from Mozzarella sticks, but both have something in common: cheese sticks and mozzarella sticks are crispy in the outside and soft in the inside. `,
  },
  {
    id: 2,
    title: "pasta",
    category: "lunch",
    price: 13.99,
    img:
      "https://1.bp.blogspot.com/-WEsEJNokkV4/XTtxjutwGEI/AAAAAAAAKDE/Be5KhV4thLs6oEMlncH9jJhkn0rPXr2ggCLcBGAs/s1600/IMG_20190726_214101.jpg",
    desc: `Pasta is  traditionally a Italian dish and one of  world's most accessible food. Nearly every country has its own popular version of this inexpensive staple.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img:
      "https://d3hkrbfxf7jd3r.cloudfront.net/article/lead_image/6371095/0_DSC_5334-copy-1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img:
      "data:image/jpeg;base64,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",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img:
      "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/2014/04/22/99fe973e5cc7e3b4e809defc9bb06990.jpg?itok=odtzk667",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sns-fb-ig-ad-oreo-1080x1080-14-1-1566573506.png",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://i.insider.com/5d2f87ef36e03c0b031b8675?width=700",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img:
      "https://previews.123rf.com/images/dimasobko/dimasobko1711/dimasobko171100009/89130763-american-classic-lunch-eggs-burger-and-french-fries-at-plate-isolated-on-white.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://i.ytimg.com/vi/CJN1n3fId_A/maxresdefault.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img:
      "https://i.pinimg.com/originals/b7/15/90/b71590a84d6ba92d4597011577294885.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const conatiner = document.querySelector(".btn-container");

//load Items
window.addEventListener("DOMContentLoaded", function () {
  //loading the page
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category); //pushing all the categories dynamically
      }
      return values;
    },
    ["all"] //initial value
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button"
          data-id=${category}>${category}</button>`;
    })
    .join("");
  conatiner.innerHTML = categoryBtns; //changing the innerHTML

  //filter Items
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id; //getting the data-id for reference
      const manuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(manuCategory);
      }
    });
  });
};

//display the menu using map

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img}
         class="photo" alt="${item.title}">
         <div class="item-info">
             <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
             </header>
             <p>${item.desc}</p>
             </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};
