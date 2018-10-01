# 设计 todo 的表结构

1. 主表
   含有 title，description，due-time，repeatable，location，substask/suptask, status
   其他表
   操作历史记录：
   action，type，payload？

2. 支持功能：

- 增删改查
- 完成任务
- 子任务
- 分步骤任务，模板？
- 唤起上次失败场景。 （我懒得寄球拍，就没寄的话，路上会很难受）
- 临时便利贴？

---

分步实现

1. 基础功能，增删改查 + 状态更改

```
node_modules/.bin/sequelize init
node_modules/.bin/sequelize migration:create --name all-todo
```
