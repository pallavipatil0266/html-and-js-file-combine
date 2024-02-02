import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(5000, function (res, req) {
        console.log("port is running 5000");
})

app.get('/abc', function (req, res) {
        console.log(__dirname);
        res.render("html.ejs", {});

});

