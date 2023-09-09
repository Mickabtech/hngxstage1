const express = require("express");
const dotenv = require('dotenv');

//cONFIGURING EXPRESS AND DOTENV FOR USE
const app = express();
dotenv.config();

//Defining the endpoint
app.get('/api', (req, res) => {
    //query parameters
    const slack_name = 'Agboola Michael';
    const track = 'backend';
  
    //current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current_day = daysOfWeek[new Date().getDay()];
    const utc_time = new Date().toISOString();
  
    //github url of the file
    const github_file_url = 'https://github.com/YourUsername/YourRepository/blob/main/your-folder/your-file.js';
  
    //github url of the source code
    const github_repo_url = 'https://github.com/mickabtech/YourRepository';
  
    //responseJson file
    const response = {
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url,
      github_repo_url,
      status_code: '200',
    };
  
    // Send the response as JSON
    res.json(response);
  });
  
  

const PORT = process.env.PORT || 6788

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})