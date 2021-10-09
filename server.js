const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./index");
dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

 const conect = async () =>  {
   await mongoose.connect(DB, {
    
  })
  .then(() => {
    console.log("DB conection succesful");

  }).catch(err=> {
    conect();
    console.log(err);

  });
  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on mode ${process.env.NODE_ENV} on port ${port}...`);
});
}


conect();