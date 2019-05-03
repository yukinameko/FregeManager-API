const express = require('express');
const router = express.Router();
const SQL = require('../SQL.js');

/* GET API listing. */
router.get('/', (req, res, next) => {
	const Group = new SQL('group');
	Group.connect();
	Group.select(req.body).run((err, result) => {
		Group.close();
		console.log(result);
		res.render('group', result);
	});
});

router.post('/new', (req, res) => {
	const body = req.body;
	console.log(body);
	if(req.body != null){
		const Group = new SQL('group');
		Group.connect();
		Group.insert(body);
		Group.close();
		res.send('ok');
	}
});

router.post('/update', (req, res) => {
	const body = req.body;
	console.log(body);
	if(req.body != null){
		const Group = new SQL('group');
		Group.connect();
		Group.update(body.params).where({id:body.id}).run((err, result) => {
			Group.close();
			res.send('update');
		});
	}
});

router.post('/delete', (req, res) => {
	const body = req.body;
	const Group = new SQL('group');
	Group.connect();
	Group.delete().where({id:body.id}).run((err, result) => {
		Group.close();
		res.send('deleted');
	});
});

module.exports = router;
