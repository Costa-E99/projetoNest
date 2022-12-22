import { Document } from 'mongoose';

export class Task extends Document {
  descricao: string;
  completa: boolean;
}
