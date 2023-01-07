import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './schemas/media.model';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepository: typeof Media) {}

  async create(createMediaDto: CreateMediaDto) {
    const newMedia = await this.mediaRepository.create(createMediaDto);
    return newMedia;
  }

  async findAll() {
    const allMedia = await this.mediaRepository.findAll({
      include: { all: true },
    });
    if (!allMedia) {
      throw new HttpException('Media is not found', HttpStatus.NOT_FOUND);
    }
    return allMedia;
  }

  async findOne(id: number) {
    const oneMedia = await this.mediaRepository.findByPk(id);
    if (!oneMedia) {
      throw new HttpException(
        'Id is Incorrect, Information not found!',
        HttpStatus.NOT_FOUND,
      );
    }
    return oneMedia;
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const check = await this.mediaRepository.findOne({
      where: {
        id: +id,
      },
    });
    if (!check) {
      throw new HttpException(
        'Id is incorrect,Information not found',
        HttpStatus.NOT_FOUND,
      );
    }
    const oneMedia = await this.mediaRepository.update(
      {
        ...updateMediaDto,
      },
      {
        where: {
          id: +id,
        },
      },
    );
    return oneMedia;
  }

  async findMedia(id: number, name: string) {
    const media = await this.mediaRepository.findOne({
      where:{
        target_table_id:id,
        target_table_name:name
      }
    })
    if(!media) {
      throw new HttpException(
        "Media not found!",
        HttpStatus.NOT_FOUND
      )
    }
    return media
  }

  async remove(id: number) {
    const removeMedia = await this.mediaRepository.findOne({
      where: {
        id: +id,
      },
    });
    if (!removeMedia) {
      throw new HttpException(
        'ID is incorrect, Information not found',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.mediaRepository.destroy({
      where: {
        id: +id,
      },
    });
    return removeMedia.id;
  }
}
