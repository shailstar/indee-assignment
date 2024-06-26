import banner1 from "../assets/banners/banner1.webp";
import banner2 from "../assets/banners/banner2.webp";
import banner3 from "../assets/banners/banner3.webp";
import banner4 from "../assets/banners/banner4.webp";
import banner5 from "../assets/banners/banner5.webp";
import banner6 from "../assets/banners/banner6.webp";
import poster1 from "../assets/posters/poster1.png";
import poster2 from "../assets/posters/poster2.png";
import poster3 from "../assets/posters/poster3.png";
import poster4 from "../assets/posters/poster4.png";
import poster5 from "../assets/posters/poster5.png";
import poster6 from "../assets/posters/poster6.png";
import poster7 from "../assets/posters/poster7.png";
import poster8 from "../assets/posters/poster8.png";
import poster9 from "../assets/posters/poster9.png";
import poster10 from "../assets/posters/poster10.png";
import poster11 from "../assets/posters/poster11.png";
import poster12 from "../assets/posters/poster12.png";
import poster13 from "../assets/posters/poster13.png";

export const getCarouselData = () => [
  {
    id: "1000",
    image: banner1,
  },
  {
    id: "1001",
    image: banner2,
  },
  {
    id: "1002",
    image: banner3,
  },
  {
    id: "1003",
    image: banner4,
  },
  {
    id: "1004",
    image: banner5,
  },
];

export const getCategoryData = () => [
  {
    name: "Trending",
    posters: [
      {
        name: "About My Father",
        image: poster1,
      },
    ],
  },
  {
    name: "Best in Horror",
    posters: [
      {
        name: "Barbie",
        image: poster2,
      },
      {
        name: "It Lives Inside",
        image: poster3,
      },
      {
        name: "Infinity Pool",
        image: poster4,
      },
      {
        name: "Killers of the Flower Moon",
        image: poster5,
      },
    ],
  },
  {
    name: "Most-watched period films",
    posters: [
      {
        name: "Oppenhimer",
        image: poster6,
      },
      {
        name: "Past Lives",
        image: poster7,
      },
      {
        name: "Polite Society",
        image: poster8,
      },
    ],
  },
  {
    name: "All Titles",
    posters: [
      {
        name: "Oppenhimer",
        image: poster9,
      },
      {
        name: "Past Lives",
        image: poster10,
      },
      {
        name: "Polite Society",
        image: poster11,
      },
      {
        name: "Barbie",
        image: poster12,
      },
      {
        name: "It Lives Inside",
        image: poster13,
      },
      {
        name: "Infinity Pool",
        image: poster1,
      },
      {
        name: "Killers of the Flower Moon",
        image: poster2,
      },
      {
        name: "Barbie",
        image: poster12,
      },
      {
        name: "It Lives Inside",
        image: poster13,
      },
      {
        name: "Infinity Pool",
        image: poster1,
      },
      {
        name: "Killers of the Flower Moon",
        image: poster2,
      },
    ],
  },
];
