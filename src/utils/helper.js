import poster1 from '../assets/Images/poster1.jpg';
import poster2 from '../assets/Images/poster2.jpg';
import poster3 from '../assets/Images/poster3.jpg';
import poster4 from '../assets/Images/poster4.jpg';
import poster5 from '../assets/Images/poster5.jpg';
import poster6 from '../assets/Images/poster6.jpg';
import poster7 from '../assets/Images/poster7.jpg';
import poster8 from '../assets/Images/poster8.jpg';
import poster9 from '../assets/Images/poster9.jpg';

  const getImagePath = (posterImage) => {
    let imagePath;
    console.log("image", posterImage)
    switch (posterImage) {
      case 'poster1.jpg':
        imagePath = poster1
        break;
      case 'poster2.jpg':
        imagePath = poster2
        break;
      case 'poster3.jpg':
        imagePath = poster3
        break;
      case 'poster4.jpg':
        imagePath = poster4
        break;
      case 'poster5.jpg':
        imagePath = poster5
        break;
      case 'poster6.jpg':
        imagePath = poster6
        break;
      case 'poster7.jpg':
        imagePath = poster7
        break;
      case 'poster8.jpg':
        imagePath = poster8
        break;
      case 'poster9.jpg':
        imagePath = poster9
        break;
      default:
        imagePath = poster1
    }
    return imagePath
  }

  export default getImagePath;