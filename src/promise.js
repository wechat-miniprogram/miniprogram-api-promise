import { asyncMethods } from './method'

function hasCallback(args) {
  if (!args || typeof args !== 'object') return false

  const callback = ['success', 'fail', 'complete']
  for (const m of callback) {
    if (typeof args[m] === 'function') return true
  }
  return false
}

export function promisify(func) {
  if (typeof func !== 'function') return fn
  return (args = {}) =>
    new Promise((resolve, reject) => {
      func(
        Object.assign(args, {
          success: resolve,
          fail: reject
        })
      )
    })
}

export function promisifyAll(wx = {}, wxp = {}) {
  Object.keys(wx).forEach(key => {
    const fn = wx[key]
    if (typeof fn === 'function' && asyncMethods.indexOf(key) >= 0) {
      wxp[key] = args => {
        if (hasCallback(args)) {
          fn(args)
        } else {
          return promisify(fn)(args)
        }
      }
    } else {
      wxp[key] = fn
    }
  })
}
