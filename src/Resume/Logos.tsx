import dsmaxLogo from '../assets/images/logos/3dsmax.jpg';
import angularLogo from '../assets/images/logos/angular.png';
import bootstrapLogo from '../assets/images/logos/bootstrap.png';
import cssLogo from '../assets/images/logos/css.png';
import reactLogo from '../assets/images/logos/react192.png';

const dsmax = {image: dsmaxLogo, alt: '3DSMax'};
const angular = {image: angularLogo, alt: 'Angular'};
const bootstrap = {image: bootstrapLogo, alt: 'Bootstrap'};
const css = {image: cssLogo, alt: 'CSS'};
const react = {image: reactLogo, alt: 'React'};

export const getLogos = () => {
  return [react, angular, dsmax, bootstrap, css];
}
