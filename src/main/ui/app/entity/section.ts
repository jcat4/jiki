/* Defines the section entity */
export interface ISection {
    id: number;
    page_id: number;
    title: String;
    markdown: String;
    sequence_num: number;
    parent_sequence: number;
    type: String;
}