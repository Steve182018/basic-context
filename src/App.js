
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppContext from './context/appContext';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

const Header = () => {
  return (
    <div>
          <ul className='header'>
            <li>
              <Link className='' to={'/'}>
                Home
              </Link>
            </li>
            <li>
             <Link to={'/about'}>
          
                About
              </Link>
            </li>
            <li>
              <Link to={'/user'}>

              User
              </Link>
            </li>
          </ul>
        </div>
  )
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Home />
    </>
  },
  {
    path: '/about',
    element: <>
    <Header />
    <About />
    </>
  },
  {
    path: '/user',
    element: <>
    <Header />
    <User />
    </>
  }
])

const App = () => {

  return (
    <AppContext>
      <RouterProvider router={routes} >
        <Outlet />
      </RouterProvider>
      
    </AppContext>
  );
}

export default App;
