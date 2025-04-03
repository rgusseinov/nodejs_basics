const express = require('express');

const app = express();

const PORT = 5000;

app.listen(PORT, (err) => {
	error ? console.log(error) : console.log(`Listening port ${PORT}`);
});