function EmitDataSource() {
  console.log('>>>>发送请求')
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log('>>>拿到结果');
      resolve({
        name: '张三',
        age: 16
      })
    }, 1000);
  })
}

export default EmitDataSource;