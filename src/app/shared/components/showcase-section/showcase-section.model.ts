export interface IShowCase {
    title: string | null;
    mainText: string[] | null;
    showCaseItems: IShowCaseItem[];
    firstItemBlueBkg?: boolean;
}

export interface IShowCaseItem {
    isVideo: boolean;
    imgUrl: string;
    label: string;
    title: string;
    text: string;
    buttonText: string;
    buttonUrl: string;
}