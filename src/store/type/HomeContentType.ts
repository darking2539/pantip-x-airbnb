export interface HomeContentTypeState {
    advertiseImage: string;
    announcement: Announcement[];
    roomCategoryList: roomCategory[];
    highLightList: Highlight[];
}

export interface roomCategory {
    Title: string;
    Icon: JSX.Element;
    Path?: string;
}

export interface Announcement {
    Type: "Highlight"| "Activity";
    Title: string;
    Url?: string;
}

export interface Highlight {
    Img: string;
    Title: string;
    Url?: string;
}