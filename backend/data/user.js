import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
  },
  {
    name: 'Deshitha',
    email: 'deshitha@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin: false,
  },
  {
    name: 'ddthilindra',
    email: 'ddthilindra@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin: false,
  },
];

export default users
