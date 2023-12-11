//Presentation.tsx
import './presentation.css';
import { dataPresentation } from './dataPresentation';

const Presentation = () => {
  

  return (
    <div className='presentation-container' key='presentation'>
      {dataPresentation.map((item, indx) => {
        const { id, url, place, properties } = item;

        return (
          <div className='item-product' key={indx}>
            <img src={url} alt={`${id}_${place}`} />
            <div className='item-titles'>
              <h1 className='place'>{place}</h1>
              <h2 className='properties'>{properties}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Presentation;
