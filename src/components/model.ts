const pageModel = {
  'legal-survey': {
    vendorMember: {
      'accountType': 'faren',
      'name': 'zhangsan',
      'mobile': '128192819281',
      'email': '128912819@qq.com',
      'position': 'manager'
    }
  }
}

const functionModel = {
  'function_EVVzyddXuh7b': (params) => {
    console.log('>>>请求参数:', params);
    return new Promise((resolve) => { 
      resolve({
        name: '张三',
        address: 'us'
      })
    })
  }
}

export { pageModel, functionModel };
