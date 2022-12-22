import { Document } from 'mongoose';

export class Usuario extends Document {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
}
