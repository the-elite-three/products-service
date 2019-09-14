
module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.string('name');
    table.string('slogan');
    table.string('description');
    table.string('category');
    table.integer('default_price');
  })
  .createTable('styles', (table) => {
    table.increments('id');
    table.integer('productId').references('id').inTable('products');
    table.string('name');
    table.integer('sale_price');
    table.integer('origonal_price');
    table.integer('default_style');
  })
  .createTable('photos', (table) => {
    table.increments('id');
    table.integer('styleId').references('id').inTable('styles');
    table.string('url');
    table.string('thumbnail_url');
  })
  .createTable('skus', (table) => {
    table.increments('id');
    table.integer('styleId').references('id').inTable('styles');
    table.string('size');
    table.integer('quantity');
  })
  .createTable('related', (table) => {
    table.increments('id');
    table.integer('current_product_id').references('id').inTable('products');
    table.integer('related_product_id').references('id').inTable('products');
  })
  .createTable('features', (table) => {
    table.increments('id');
    table.integer('product_id').references('id').inTable('products');
    table.string('feature');
    table.string('value');
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('products')
    .dropTable('styles')
    .dropTable('photos')
    .dropTable('skus')
    .dropTable('related')
    .dropTable('features');
};
