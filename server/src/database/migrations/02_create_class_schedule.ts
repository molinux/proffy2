import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();
    
    table.integer('week_day').notNullable();
    table.decimal('from').notNullable();
    table.decimal('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE') // Se um professor for deletado da plataforma, todas as aulas vão junto
      .onUpdate('CASCADE'); // Se o id do usuário for alterado, atualiza também na tabela class_schedule
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}