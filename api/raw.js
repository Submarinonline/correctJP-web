const { generate } = require('cjp')

module.exports = (req, res) => {
    let reqData
    if (req.body) {
        reqData = req.body.t
    } else if (req.query) {
        reqData = req.query.t
    } else {
        res.status(400).send('Bad API Call : Please see https://correctjp.work/about/#api')
    }
    try {
        res.status(200).send(generate(reqData))
    } catch {
        res.status(500).send('Server Error')
    }
}
