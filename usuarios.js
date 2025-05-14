import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), 'database/db.json');
  const raw = fs.readFileSync(dbPath);
  const db = JSON.parse(raw);
  res.status(200).json(db.usuarios);
}
