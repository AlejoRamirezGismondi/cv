import reactLogo from '../assets/images/logos/react192.png';
import angularLogo from '../assets/images/logos/angular.png';

const react = {image: reactLogo, alt: 'React'};
const angular = {image: angularLogo, alt: 'Angular'};

export const getLogos = () => {
  return [react, angular];
}
