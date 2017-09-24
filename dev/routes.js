import AppRoot from './index.jsx';
import Landing from './components/Landing.js';
import Form1 from './components/Form1.js';

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Landing
      },
      { path: '/form1',
        component: Form1
      }
    ]
  }
];

export default routes;