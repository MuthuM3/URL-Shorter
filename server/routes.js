
const urlShorter = require('./api/url')

module.exports = (app) => {
    app.use('/short', urlShorter)
}
