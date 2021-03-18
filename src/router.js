import Home from '@views/Home';
import Talks from '@views/Talks';

const routes = [
    {
        name: 'home',
        path: '/',
        label: "Home",
        Component: Home,
    },
    {
        name: 'talks',
        path: '/talks',
        label: 'Talks',
        Component: Talks
    },
];

export default routes;
