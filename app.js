let express = require('express');
let app = express();
let port = process.env.PORT || 3000;


app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

let indexRouter = require('./src/routes/indexRoutes.js')();
app.use('/', indexRouter);

app.listen(port, function () {
    console.log('started on port : ' + port);
});