import * as yup from 'yup';

// const REGEX = {
//     capitalLetters: /[A-Z]+/,
//     minimum8Characters: /^[a-zA-Z0-9-+_!@#$%^&*.,?]{8,}$/,
//     number: /\d+/i,
//     smallLetters: /[a-z]+/,
//     specialSymbol: /[-+_!@#$%^&*.,?]+/,
// };

const loginSchema = yup.object({
    email: yup.string().email().required().label('Email Address'),
    password: yup.string().label('Password').required(),
});

const schema = {
    loginSchema,
};

export default schema;
