const express = require('express')
const app = express();
const cors = require('cors')


const mongoose = require('mongoose');
const { mongoUrl } = require('./secrets/keys')

// Middleware to enable CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://insta-clone-pi-rosy.vercel.app'); // Allow requests from any origin
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });


app.use(cors(
  // {
  //   origin: ["https://insta-clone-pi-rosy.vercel.app"],
  //   methods: ["POST", "GET"],
  //   credentials: true
  // }
))

/* user models import */
require('./models/model')
require('./models/post')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/createpost'))
app.use(require('./routes/user'))


/* db connection  */
mongoose.connect(mongoUrl)
.then(() => {
  console.log("Yeah! DB Connected Succesfully...");
})
.catch((err) => {
  console.log(err);
})




/* server running on port 3000 */
app.listen(5000, () => {
  console.log('server is running on port 5000');
})




