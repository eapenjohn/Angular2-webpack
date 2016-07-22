var testsContext;

require('phantomjs-polyfill/bind-polyfill.js')
// require('angular')
// require('angular-mocks')

testsContext = require.context('./app', true, /spec\.(t|j)s$/)
testsContext.keys().forEach(testsContext)

//  testsContext = require.context('./tt.spec', false, /spec\.(t|j)s$/)
// testsContext.keys().forEach(testsContext)
