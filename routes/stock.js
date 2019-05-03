const express = require('express');
const router = express.Router();
const SQL = require('../SQL.js');

/* GET API listing. */
router.get('/', (req, res, next) => {
	const Stock = new SQL('stock');
	Stock.connect();
	Stock.select(req.body).run((err, result) => {
		Stock.close();
		console.log(result);
		res.render('stock', result);
	});
});

router.post('/', (req, res) => {
	const body = req.body;
	console.log(body);
	if(req.body != null){
		const Stock = new SQL('stock');
		Stock.connect();
		Stock.insert(body);
		Stock.close();
		res.send('ok');
	}
});

router.post('/update', (req, res) => {
	const body = req.body;
	console.log(body);
	if(req.body != null){
		const Stock = new SQL('stock');
		Stock.connect();
		Stock.update(body.params).where({id:body.id}).run((err, result) => {
			Stock.close();
			res.send('update');
		});
	}
});

router.post('/delete', (req, res) => {
	const body = req.body;
	const Stock = new SQL('stock');
	Stock.connect();
	Stock.delete().where({id:body.id}).run((err, result) => {
		Stock.close();
		res.send('deleted');
	});
});

module.exports = router;
