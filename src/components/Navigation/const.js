export const navRoutes = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Services",
    link: "/services",
    subRoutes: [
      {
        name: "Web Development",
        link: "/services/web-development",
      },
      {
        name: "App Development",
        link: "/services/app-development",
      },
      {
        name: "UI/UX Development",
        link: "/services/ui/ux-design",
      },
    ],
  },
  {
    name: "Products",
    link: "/products",
    subRoutes: [
        {
          name: "Products",
          link: "/services/web-development",
        },
        {
          name: "App Development",
          link: "/services/app-development",
        },
        {
          name: "UI/UX Development",
          link: "/services/ui/ux-design",
        },
      ],
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
