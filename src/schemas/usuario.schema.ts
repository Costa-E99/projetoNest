import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  dataNascimento: Date,
});
