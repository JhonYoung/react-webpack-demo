let Interface = {
  contentType: "application/json",

  /*****登录接口********/
  dologin: { 
    url: "/manager/login/dologin",
    type: "POST",
    params: {
      "loginName": 'loginName',
      "password": "password" 
    }
  },

  /*****登出接口********/
  logout: { 
    url: "/manager/login/logout",
    type: "POST"
  },

  /*****获取权限接口********/
  getOperateResources: { 
    url: "/manager/login/getOperateResources",
    type: "POST"
  }
  
}

export default Interface;

