const express = require('express')
const PORT = 3005;
const app = express() 
const cors = require('cors')
require('dotenv').config() 



app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on port') 
}) 
