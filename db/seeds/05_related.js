const path = require('path');
 
const seedFile = require('knex-seed-file');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('related').del()
    .then(function () {
      // Inserts seed entries
      return knex('related').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
