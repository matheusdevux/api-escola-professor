import { Controller,
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete } from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags, 
         ApiResponse, 
         ApiOperation } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')

export class AlunosController {
    constructor(private readonly alunosService: AlunosService){}

    @Post()
    @ApiOperation({
        summary: 'criar a Matricula do aluno',
    })
    @ApiResponse({
        status: 201,
        description: 'Aluno criado com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Requisição inválida ou dados de entrada incorretos/mal formatados',
    })
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }

    @Get()
    @ApiOperation({
        summary: 'Listar todos os alunos',
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Nenhum aluno encontrado',
    })
    findAll(){
        return this.alunosService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Obter detalhes de um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Detalhes do aluno retornados com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    findOne(@Param('id') id: string ){
        return this.alunosService.findOne(id);
    }
    
    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar informações de um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Informações do aluno atualizadas com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    update(@Param('id') id: string, @Body() updateAlunoDto : UpdateAlunoDto){
        return this.alunosService.update(id, updateAlunoDto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Remover um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno removido com sucesso',})
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    remove(@Param('id') id: string){
        return this.alunosService.remove(id);
    }
}