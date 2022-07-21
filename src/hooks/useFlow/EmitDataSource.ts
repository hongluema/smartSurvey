function EmitDataSource() {
  console.log('>>>>发送请求')
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({
        name: '张三',
        age: 16
      })
    }, 1000);
  })
}

export default EmitDataSource;