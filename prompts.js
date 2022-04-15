module.exports = [
  {
    type: 'list', // 类型为 输入项
    name: 'adaptationScheme',
    message: '请选择适配方案',
    choices: [
      { name: 'rem', value: 'rem' },
      { name: 'vw', value: 'vw' },
    ],
  },
  {
    type: 'checkbox',
    name: 'bestPractices',
    message: '请选择要添加的最佳实践/兼容性代码:',
    choices: [
      {
        name: 'Safari兼容100vh',
        value: '1',
        checked: true
      },
      {
        name: '0.5px的线',
        value: '2',
        checked: true
      },
      {
        name: '小于12px的字',
        value: '3',
        checked: true
      },
      {
        name: '吸底组件',
        value: '4',
        checked: true
      }
    ]
  }
]
