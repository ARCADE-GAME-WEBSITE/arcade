'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', [
      {
        Email:"tuankietnk2001@gmail.com",
        Password: "admin01",
        Full_name: "Nguyễn Đặng Tuấn Kiệt",
        Gender: 1,
        DayOfBirth: "2001-04-09",
        Avatar: null
      },
      {
        Email:"oppahd96@gmail.com",
        Password: "admin02",
        Full_name: "Hồ Minh Hiếu",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      },
      {
        Email:"bduyphuong12@gmail.com",
        Password: "admin03",
        Full_name: "Bùi Duy Phương",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      },
      {
        Email:"nghia567123@gmail.com",
        Password: "admin04",
        Full_name: "Lê Trung Nghĩa",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      },
      {
        Email:"19521953@gm.uit.edu.vn",
        Password: "admin05",
        Full_name: "Mã Hải Nhật",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', {}, null)
  }
};
