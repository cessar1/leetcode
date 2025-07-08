/**
 * @param {String} s
 * @return {boolean}
 */
function validPalindrome(s) {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) {
      l++
    }

    while (r > l && !isAlphaNum(s[r])) {
      r--
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false
    }
    l++
    r--
  }
  return true
}

function isAlphaNum(c) {
  return (
    (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
  )
}
module.exports = validPalindrome
