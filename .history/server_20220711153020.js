const express = require('express')
const app = express() 
const cors = require('cors')
require('dotenv').config() 



app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on port') 
}) 
