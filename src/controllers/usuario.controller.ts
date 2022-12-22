import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from 'src/classes/usuario';
import { UsuarioService } from 'src/services/usuario.service';

@Controller('/usuarios')
export class UsuarioControler {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  async getAll(): Promise<Usuario[]> {
    return this.usuarioService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.getById(id);
  }

  @Post()
  async created(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.created(usuario);
  }

  @Put(':id')
  async updated(@Param('id') id: number, @Body() usuario: Usuario) {
    return this.usuarioService.updated(id, usuario);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.usuarioService.delete(id);
  }
}
