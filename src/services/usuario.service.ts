import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/classes/usuario';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>,
  ) {}

  async getAll() {
    return await this.usuarioModel.find().exec();
  }

  async getById(id: number) {
    return await this.usuarioModel.findById(id).exec();
  }

  async created(usuario: Usuario) {
    const createdUsuario = new this.usuarioModel(usuario);
    return await createdUsuario.save();
  }
  async updated(id: number, usuario: Usuario) {
    await this.usuarioModel.updateOne({ _id: id }, usuario).exec();
    return this.getById(id);
  }

  async delete(id: number) {
    return await this.usuarioModel.deleteOne({ _id: id }).exec();
  }
}
