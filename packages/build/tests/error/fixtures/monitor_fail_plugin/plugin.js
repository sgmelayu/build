'use strict'

module.exports = {
  onPreBuild({
    utils: {
      build: { failPlugin },
    },
  }) {
    failPlugin('test')
  },
}
