import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE') // Se um professor for deletado da plataforma, todas as aulas vão junto
      .onUpdate('CASCADE'); // Se o id do usuário for alterado, atualiza também na tabela classes
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}