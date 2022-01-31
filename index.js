import express from 'express';
const port = 8000;
const app = express();

app.all('/hello', (req, res, next) => {
	console.log('All');
	next();
});

const cb = (req, res, next) => {
	console.log('CB');
	next();
}

app.get('/hello', cb, (req, res) => {
	res.send('Привет!');
});

app.route('/user')
	.get((req, res) => {
		res.send('Привет! GET');
	})
	.post((req, res) => {
		res.send('Привет! POST');
	});



app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});