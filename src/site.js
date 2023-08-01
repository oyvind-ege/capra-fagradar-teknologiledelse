require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./analytics.js')

const Factory = require('./util/factory')
const config = require('./config');

Factory().build()

if (!window.location.href.includes('?sheetId')) {
  window.location.replace(window.location.href + '?sheetId=' + config().sheetUrl)
}
