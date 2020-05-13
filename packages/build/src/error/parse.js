const { getErrorInfo } = require('./info')
const { getLocationInfo } = require('./location')
const { getPluginInfo } = require('./plugin')
const { getErrorProps } = require('./properties')
const { getStackInfo } = require('./stack')
const { getTypeInfo } = require('./type')

// Parse all error information into a normalized sets of properties
const parseError = function(error) {
  const {
    message,
    stack,
    errorProps,
    errorInfo,
    errorInfo: { location = {}, plugin = {} },
    title,
    isSuccess,
    stackType,
    getLocation,
    showErrorProps,
    rawStack,
  } = parseErrorInfo(error)

  const titleA = getTitle(title, errorInfo)

  const { message: messageA, stack: stackA } = getStackInfo({ message, stack, stackType, rawStack, isSuccess })

  const pluginInfo = getPluginInfo(plugin, location)
  const locationInfo = getLocationInfo({ stack: stackA, location, getLocation })
  const errorPropsA = getErrorProps(errorProps, showErrorProps)
  return { title: titleA, message: messageA, pluginInfo, locationInfo, errorProps: errorPropsA, isSuccess }
}

// Parse error instance into all the basic properties containing information
const parseErrorInfo = function(error) {
  const { message, stack, ...errorProps } = normalizeError(error)
  const { title, isSuccess, stackType, getLocation, showErrorProps, rawStack } = getTypeInfo(errorProps)
  const errorInfo = getErrorInfo(errorProps)
  return {
    message,
    stack,
    errorProps,
    errorInfo,
    title,
    isSuccess,
    stackType,
    getLocation,
    showErrorProps,
    rawStack,
  }
}

const normalizeError = function(error) {
  if (error instanceof Error) {
    return error
  }

  return new Error(String(error))
}

// Retrieve title to print in logs
const getTitle = function(title, errorInfo) {
  if (typeof title !== 'function') {
    return title
  }

  return title(errorInfo)
}

module.exports = { parseError }
