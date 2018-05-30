import { CommonService } from './../shared/services/common.service';
import { Category } from './category';
import { Injectable } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

@Injectable()
export class CategoryService {

  constructor(private storageService: StorageService) { }

  public getCategories(): Category[] {
    return this.storageService.read<Category[]>("categories");
  }

  public addCategory(category: Category) {
    let categories = this.getCategories();

    if (categories == null) {
      categories = [];
    }
    categories.unshift(category);
    this.storageService.write("categories", categories);
  }

  public removeCategory(category: Category) {
    let categories = this.getCategories();
    categories.splice(categories.indexOf(category));
    this.storageService.write("categories", categories);
  }
}
