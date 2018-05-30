import { Category } from './category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
    category: Category = { name: "" };
    categories: Category[];

    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.categories = this.categoryService.getCategories();
    }

    addCategory() {
        this.categoryService.addCategory(this.category);
        this.categories = this.categoryService.getCategories();
    }
}