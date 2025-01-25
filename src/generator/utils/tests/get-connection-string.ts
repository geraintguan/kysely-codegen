export function getConnectionString(
  db: 'libsql' | 'mysql' | 'postgres',
): string {
  const compose = process.env.DEV_CONTAINER?.toLowerCase();

  switch (db) {
    case 'libsql':
      return `libsql://${compose === 'y' ? 'kysely_codegen_libsql' : 'localhost'}:8080?tls=0`;
    case 'mysql':
      return `mysql://user:password@${compose === 'y' ? 'kysely_codegen_mysql' : 'localhost'}/database`;
    case 'postgres':
      return `postgres://user:password@${compose === 'y' ? 'kysely_codegen_postgres' : 'localhost'}:5432/database`;
    default:
      throw new Error(`Unknown db: ${db}`);
  }
}

export default getConnectionString;
