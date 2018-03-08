/* Defines the page entity */
import {ISection} from "./section";

export interface IPage {
    id: number;
    title: String;
    section: ISection[];
}