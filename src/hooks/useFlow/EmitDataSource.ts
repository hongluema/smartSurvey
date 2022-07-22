function EmitDataSource(field) {
  console.log('>>>>发送请求', field);
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({
        name: '张三',
        age: 16,
        ...field.value
      })
    }, 1000);
  })
}

export default EmitDataSource;