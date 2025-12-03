import { User } from './models/User.js';
import {changePrincipalTitle} from './modules/changePrincipalTitle.js';
import { changeDecorationImage } from './modules/changeImage.js';

changePrincipalTitle('title')
changeDecorationImage('dino.jpg')

const juan = new User('Juan', 'Martinez', 28, 'ejemplo@correo.com')
console.log(juan.greet())