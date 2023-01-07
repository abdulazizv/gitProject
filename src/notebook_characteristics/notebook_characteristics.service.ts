import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { MediaService } from 'src/media/media.service';
import { CreateNotebookCharacteristicDto } from './dto/create-notebook_characteristic.dto';
import { UpdateNotebookCharacteristicDto } from './dto/update-notebook_characteristic.dto';
import { Notebook } from './schemas/notebook.model';

@Injectable()
export class NotebookCharacteristicsService {
  constructor(@InjectModel(Notebook) private notebookRepository:typeof Notebook,
  private readonly fileService:FilesService,
  private readonly mediaService:MediaService) { }
  
  async create(createNotebookCharacteristicDto: CreateNotebookCharacteristicDto,image:string) {
    const fileName = await this.fileService.createFile(image)
    const notebook = await this.notebookRepository.create(createNotebookCharacteristicDto)
    if(!notebook) {
      throw new HttpException(
        "Error has been detected during save information",
        HttpStatus.BAD_GATEWAY
      )
    }
    const media = await this.mediaService.create({
      media:fileName,
      target_table_id:notebook.id,
      target_table_name:"notebook"
    })
    notebook.media_id = media.id
    notebook.save()
    return notebook
  }

  async findAll() {
    const notebook = await this.notebookRepository.findAll({include:{all:true}})
    if(!notebook){
      throw new HttpException(
        "Notebook is not found",
        HttpStatus.NOT_FOUND
      )
    }
    return notebook
  }

  async findOne(id: number) {
    const oneNotebook = await this.notebookRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!oneNotebook) {
      throw new HttpException(
        "Id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    return oneNotebook
  }

  async update(id: number, updateNotebookCharacteristicDto: UpdateNotebookCharacteristicDto) {
    const check = await this.notebookRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!check) {
      throw new HttpException(
        "Id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    const oneNotebook = await this.notebookRepository.update({
      ...updateNotebookCharacteristicDto
    },{
      where:{
        id:+id
      }
    })
    return oneNotebook
  }

  async remove(id: number) {
    const oneNotebook = await this.notebookRepository.findOne({
      where:{
        id:+id
      }
    })
    if(!oneNotebook) {
      throw new HttpException(
        "Id is incorrect",
        HttpStatus.NOT_FOUND
      )
    }
    await this.notebookRepository.destroy({
      where:{
        id:+id
      }
    })
    return oneNotebook.id
  }
}
