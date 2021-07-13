const { User } = require('./db.js');
// const axios = require('axios');

async function setUser(){
  let user = [
    {
      email: 'test@gmail.com',
      password: 'test',
      isadmin: true,
      firstname: 'Juan',
      lastname: 'perez',

    },
    {
      email: 'test1@gmail.com',
      password: 'test',
      isadmin: false,
      shippingcost: 24.5,
      shippingaddres: 'siemprevivas23',
      shippingzip: 'N3300',
      shippingcity: 'eldorado',
      shippingstate: 'Misiones',
      firstname: 'Juan',
      lastname: 'perez',
      comments: 'Sarasa sarasa',
      paymentdetails: 'Efectivo'
    },
    {
      email: 'test2@gmail.com',
      password: 'test',
      isadmin: true,
      shippingcost: 24.5,
      shippingaddres: 'siemprevivas 222',
      shippingzip: 'N3300',
      shippingcity: 'CABA',
      shippingstate: 'Buenos Aires',
      firstname: 'Juan',
      lastname: 'perez',
      comments: 'Sarasa sarasa',
      paymentdetails: 'Efectivo'
    },
    {
      email: 'test3@gmail.com',
      password: 'test',
      isadmin: false,
      shippingcost: 24.5,
      shippingaddres: 'siemprevivas 222',
      shippingzip: 'N3300',
      shippingcity: 'another',
      shippingstate: 'Another State',
      firstname: 'Juan',
      lastname: 'perez',
      comments: 'Sarasa sarasa',
      paymentdetails: 'Tarjeta'
    }

  ]

  let newuser = await User.bulkCreate(user);
  console.log(newuser.length+" User Created to Test");
}

module.exports = async () => { await setUser()};
