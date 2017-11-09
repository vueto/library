function getUrl (para) {
  const paraArr = location.search.substring(1).split('&')
  for (var i = 0; i < paraArr.length; i++) {
    if (para === paraArr[i].split('=')[0]) {
      return paraArr[i].split('=')[1]
    }
  }
  return ''
}

export { getUrl }
  