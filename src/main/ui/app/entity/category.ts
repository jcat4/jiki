/* Defines the category entity */
export interface ICategory {
    categoryID: number;
    name: String;
    children: ICategory[];
}