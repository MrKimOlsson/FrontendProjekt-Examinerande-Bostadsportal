import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import './App.scss';
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from './routes/ProtectedRoute';


// Pages
import Home from './routes/Home';
import Residential from './routes/Residential';
import AddApartment from './routes/AddApartment';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Applications from './routes/Applications';
import AcceptOffer from './routes/AcceptOffer';
import Payment from './routes/Payment';
import MyPages from './routes/MyPages';
import Application from './routes/Application';
import About from './routes/About';
import Terms from './routes/Terms';
import RentOut from './routes/RentOut';
import Confirmed from './routes/Confirmed';
import NotFound from './routes/NotFound';

// Function to handle successful logins
const handleLoginSuccessful = (user: TUser) => {
  // Handle the successful login here, e.g., set user in app state
  console.log('Logged in user:', user);
};

// Function to handle successful sign-ups
const handleSignUpSuccessful = (user: TUser) => {
  // Handle the successful sign-up here, e.g., set user in app state
  console.log('Signed up user:', user);
};

const App = () => {
  // Create a BrowserRouter using the createBrowserRouter function
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        // Route for the home page
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'residential/:unitType/:id',
          element: <Residential />,
        },
        {
          path: 'myPages',
          element: <ProtectedRoute><MyPages/></ProtectedRoute>
        },
        {
          path: 'addApartment',
          element: <AddApartment />,
        },
        {
          path: 'signup',
          element: <Signup onSignUpSuccessful={handleSignUpSuccessful} />, // Pass the onSignUpSuccessful prop
        },
        {
          path: 'login',
          element: <Login onLoginSuccessful={handleLoginSuccessful} />, // Pass the onLoginSuccessful prop 
        },
        {
          path: 'application',
          element: <ProtectedRoute><Application /></ProtectedRoute>
        },
        {
          path: 'applications',
          element: <Applications />
        },
        {
          path: 'accept/:unitType/:unitId',
          element: <ProtectedRoute><AcceptOffer /></ProtectedRoute>
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'terms',
          element: <Terms />,
        },
        {
          path: 'rentOut',
          element: <RentOut />,
        },
        {
          path: 'confirmed',
          element: <ProtectedRoute><Confirmed /></ProtectedRoute>,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  // Render the RouterProvider component with the created router if authIsReady is true
  return (
    <div className='app'>
        <AuthProvider>
                  <RouterProvider router={router} />
        </AuthProvider>

    </div>
  );
};

export default App;
