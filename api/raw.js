const { translate } = require('cjp')

module.exports = (req, res) => {
    try {
        let reqData
        if (req.body) {
            reqData = req.body.t
        } else if (req.query) {
            reqData = req.query.t
        } else {
            throw 'No target text found'
        }
        try {
            res.status(200).send(translate(reqData))
        } catch (err) {
            res.status(500).send('Server Error')
        }
    } catch (err) {
        res.status(400).send('Bad API Call')
    }
}
