const router = require("express").Router();
const user = require("../services/user");

router.get('/login', user.loginHandler);
router.get('/register', user.registerHandler);
router.get('/', user.fetchUsersHandler);

module.exports = router;