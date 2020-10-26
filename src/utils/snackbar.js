import store from '@/store'

/**
 * 提示成功
 */
export function success (msg) {
  store.dispatch('snackbar/success', { text: msg })
}

/**
 * 提示失败
 */
export function error (msg) {
  store.dispatch('snackbar/error', { text: msg })
}
