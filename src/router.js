import Home from '@views/Home';
import About from '@views/About';

const routes = [
    {
        name: 'main',
        path: '/',
        component: Home,
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
];

export default routes;
