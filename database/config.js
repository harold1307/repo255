const  mongoose  = require('mongoose');

const dbConnection = ()=>{
  
     mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser:true,
        useUnifiedTopology: true             
     }).then( 
      console.log('Base de dato conectada..')
     ).catch((error) => {
      console.log(error);
      throw new Error('Error al iniciar la base de dato..')
     })     

  }

module.exports = {
    dbConnection
}