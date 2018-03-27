This is an app that will tell you the best breweries near by, ranked by average beer score. 

Data used for the app comes from Yelp, 

--DEV SETUP--

run: npm install

set up environment variables for mysql database connection
  used in:
  var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'beerby'
  });

run mysql -u[USER] < server/schema.sql
(currently not importing but copy/past info to mysql propmt works)

run: npm run react-dev

run: npm run server-dev



