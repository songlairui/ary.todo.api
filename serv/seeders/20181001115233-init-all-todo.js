'use strict'

const timeStamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'all_todo',
      [{ id: 1, title: '红掌拨清波', ...timeStamps }],
      {}
    ),
  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize
    return queryInterface.bulkDelete(
      'all_todo',
      { id: { [Op.in]: [1, 2, 3, 4] } },
      {}
    )
  }
}
