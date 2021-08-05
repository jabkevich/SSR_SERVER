import Home from "./client/pages/Home/Home";
import About from "./client/pages/About/About";
import NotFound from "./client/pages/NotFound/NotFound";


const Routers = [
    {
        url: "/",
        exact: true,
        component: Home
    },
    {
        url: "/about",
        exact: false,
        component: About
    },
    {
        url: "*",
        exact: true,
        component: NotFound
    }
]


export const MenuLinks = [
    {
        url: "/",
        menuText: "Home"
    },
    {
        url: "/about",
        menuText: "About"
    }
];

export default Routers;