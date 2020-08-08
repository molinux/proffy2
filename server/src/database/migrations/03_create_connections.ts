import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('users_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE') // Se um professor for deletado da plataforma, todas as aulas vão junto
      .onUpdate('CASCADE'); // Se o id do usuário for alterado, atualiza também na tabela connections

      table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}