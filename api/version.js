const p = require('../node_modules/cjp/package.json')

module.exports = (req, res) => {
    res.status(200).send(p.version)
}
