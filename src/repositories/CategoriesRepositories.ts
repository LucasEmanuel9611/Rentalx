import { Category } from "../model/Category";

type CreateCategoryDTO = {
  name: string;
  description: string;
};

export class CategoriesRepositories {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: CreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}
