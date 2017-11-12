/*数字处理js*/

const CLUrl = {
  getParamAsObject: function ( url ) {
      let pStr = location.hash.split('?')[1];
      let params = {};
      if (!pStr) {
        return params;
      }
      pStr.split("&").map( function (doc) {
        params[doc.split("=")[0]] = doc.split("=")[1]
      })
      return params;
  }
}

export default CLUrl;