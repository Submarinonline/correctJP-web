const p = require('../node_modules/cjp/package.json')

console.log(p.version)
module.exports = (req, res) => {
            res.status(200).send(p.version)
}