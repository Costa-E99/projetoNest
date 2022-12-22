import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario.service';
import { UsuarioControler } from 'src/controllers/usuario.controller';
import { UsuarioSchema } from 'src/schemas/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }]),
  ],
  controllers: [UsuarioControler],
  providers: [UsuarioService],
})
export class UsuarioModules {}
