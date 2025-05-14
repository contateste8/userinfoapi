import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), 'database/db.json');
    const raw = fs.readFileSync(dbPath);
    const db = JSON.parse(raw);

    const nome = req.query.nome?.toLowerCase();
    if (!nome) return res.status(400).json({ erro: 'Nome não fornecido' });

    const jogador = db.usuarios.find(u => u.nome.toLowerCase() === nome);
    if (!jogador) return res.status(404).json({ erro: 'Jogador não encontrado' });

    return res.status(200).json(jogador);
  } catch (e) {
    return res.status(500).json({ erro: 'Erro interno', detalhe: e.message });
  }
}
