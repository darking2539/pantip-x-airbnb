export interface MenuInterface {
    Title: string;
    Icon: JSX.Element;
    Path: string;
}

export interface DetailDataInterface {
    Title: string;
    Path: string;
}

export interface LayOutHomeTypeState {
    sideBarOpen: boolean;
    mainMenu: MenuInterface[];
    subMenu: MenuInterface[];
    detailData: DetailDataInterface[];
}