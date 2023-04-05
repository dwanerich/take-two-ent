import MyWrapper from './MyWrapper';
import './nav.css';
import { advertisingAssets } from '../img';
import { deriveImageArrayFromCategory } from '../helpers';

const Advertising = () => {
  const images = deriveImageArrayFromCategory(advertisingAssets);
  return (
    <div>
      <MyWrapper imageData={images} />
    </div>
  );
};

export default Advertising;
