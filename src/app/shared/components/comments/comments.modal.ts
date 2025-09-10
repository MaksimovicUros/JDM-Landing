export interface ICommentsData {
    title: string;
    texts: string[];
    buttonUrl: string;
    buttonText: string;
    comments: IComment[];
}

export interface IComment {
    imgSrc: string;
    imgSrcSet: string;
    imgSizes: string;
    comment: string;
    
}