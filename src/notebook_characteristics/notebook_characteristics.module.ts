import { Module } from '@nestjs/common';
import { NotebookCharacteristicsService } from './notebook_characteristics.service';
import { NotebookCharacteristicsController } from './notebook_characteristics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notebook } from './schemas/notebook.model';
import { FilesModule } from 'src/files/files.module';
import { MediaModule } from 'src/media/media.module';

@Module({
  imports:[SequelizeModule.forFeature([Notebook]),FilesModule,MediaModule],
  controllers: [NotebookCharacteristicsController],
  providers: [NotebookCharacteristicsService]
})
export class NotebookCharacteristicsModule {}
