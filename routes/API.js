const express = require('express');
const router = express.Router();
const SQL = require('../SQL.js');

/* GET API listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/User', (req, res) => {
	const params = req.params;
	console.log(req.body);
	if(req.body != null){
		const Users = new SQL('users');
		Users.connect();
		Users.insert(req.body);
		Users.close();
		res.send('ok');
	}
});

module.exports = router;
