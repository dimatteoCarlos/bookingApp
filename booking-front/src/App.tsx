import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import ErrorPage from './pages/errorPage/ErrorPage';

import ListOfHotels from './pages/listOfHotels/ListOfHotels';
import DetailsOfHotel from './pages/detailsOfHotel/DetailsOfHotel';

function App(): JSX.Element {
  const router = createBrowserRouter([
    //'perch'= {path, element, errorElement, children[]}

    { path: '/', element: <Home />, errorElement: <ErrorPage /> },
    { path: '/hotels', element: <ListOfHotels /> },
    { path: '/hotels/:hotel', element: <DetailsOfHotel /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//time stamp: 1:18:55
