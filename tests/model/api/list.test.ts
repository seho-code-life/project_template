import ListController from '../../../src/controller/list'

describe('addList', () => {
  const controller = new ListController()
  it('添加参数测试-1', async () => {
    await controller.createList({
      title: 'test',
      content: 'nihao'
    })
  })
  it('添加参数测试-2', async () => {
    const result = await controller.createList({
      title: 'test2',
      content: 'hello?'
    })
    console.log(result.id)
  })
})
