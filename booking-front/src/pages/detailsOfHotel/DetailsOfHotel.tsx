import './detailsOfHotel.css';

import { photosHotel } from './photosHotel';
import { dataOfAHotel } from './dataOfAHotel';

import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import DetailLayout from './DetailLayout';
import FooterList from '../../components/footerList/FooterList';
import EmailSignup from '../../components/emailSignup/EmailSignup';

const DetailsOfHotel = () => {
  
  return (
    <>
      <Navbar />
      <Header modeType={'list'} />
      <div className='details-container'>
        <DetailLayout data={dataOfAHotel} photosHotel={photosHotel} />
      </div>
      <EmailSignup />
      <FooterList />
    </>
  );
};

export default DetailsOfHotel;
