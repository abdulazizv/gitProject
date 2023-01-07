import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSearchHistoryDto } from './dto/create-search_history.dto';
import { UpdateSearchHistoryDto } from './dto/update-search_history.dto';
import { SearchHistory } from './schemas/search_history.model';

@Injectable()
export class SearchHistoryService {
  create(createSearchHistoryDto: CreateSearchHistoryDto) {
    return 'This action adds a new searchHistory';
  }

  findAll() {
    return `This action returns all searchHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} searchHistory`;
  }

  update(id: number, updateSearchHistoryDto: UpdateSearchHistoryDto) {
    return `This action updates a #${id} searchHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} searchHistory`;
  }
}
