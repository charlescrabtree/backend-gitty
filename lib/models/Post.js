const pool = require('../utils/pool');

module.exports = class Posts {
  id;
  title;
  content;
  user_id;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.content = row.content;
    this.user_id = row.user_id;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM posts`);
    return rows.map((row) => new Posts(row));
  }
  static async insert({ title, content }) {
    const { rows } = await pool.query(
      `
      INSERT INTO posts (title, content)
      VALUES ($1, $2)
      RETURNING *
      `,
      [title, content]
    );
    return new Posts(rows[0]);
  }
};
