import * as yup from 'yup';

const passwordRules = /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{8,}$/;
export const Schema = yup.object().shape({
    contactName:yup.string().min(3).required('Required'),
    contactEmail:yup.string().email('Please enter a valid email').required('Required'),
    // contactPhone:yup.number().required('Required'),
    contactMessage:yup.string().min(3).required('Required')
    
    // confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Required')
});