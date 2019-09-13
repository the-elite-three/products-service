const path = require('path');
 
const seedFile = require('knex-seed-file');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('styles').del()
    .then(function () {
      // Inserts seed entries
      return knex('styles').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
