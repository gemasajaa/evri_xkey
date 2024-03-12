const genId1 = require('adps_xid');
const genId2 = require('cvyz_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|Jb0JhwLKU8|' + genId2()).digest('base64');
}


module.exports = generateKey;
