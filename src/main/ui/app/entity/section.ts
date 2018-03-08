/* Defines the section entity */
export interface ISection {
    id: number;
    pageID: number;
    title: String;
    markdown: String;
    sequenceNum: number;
    parentSequence: number;
    type: String;
}