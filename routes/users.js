const express = require('express');
const router = express.Router();
const SQL = require('../SQL.js');

/* GET API listing. */
router.get('/', (req, res, next) => {
	const Users = new SQL('user');
	Users.connect();
	Users.select(req.body).run((err, result) => {
		Users.close();
		console.log(result);
		res.render('user', result);
	});
});

router.post('/new', (req, res) => {
	const params = req.params;
	console.log(req.body);
	if(req.body != null){
		const Users = new SQL('user');
		Users.connect();
		Users.insert(req.body);
		Users.close();
		res.send('ok');
	}
});

router.post('/update', (req, res) => {
	const body = req.body;
	console.log(body);
	if(req.body != null){
		const Users = new SQL('user');
		Users.connect();
		Users.update(body.params).where({id:body.id}).run((err, result) => {
			Users.close();
			res.send('update');
		});
	}
});

router.post('/delete', (req, res) => {
	const body = req.body;
	const Users = new SQL('user');
	Users.connect();
	Users.delete().where({id:body.id}).run((err, result) => {
		Users.close();
		res.send('deleted');
	});
});

module.exports = router;
