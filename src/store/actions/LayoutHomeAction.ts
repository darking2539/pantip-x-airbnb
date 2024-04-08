import { createAction } from "../../libs";

export const LayoutHomeActionType = {
    INIT_HOME_INFO: `INIT_HOME_INFO`,
    HAMBURGER_CLICK: `HAMBURGER_CLICK`
};

export const LayoutHomeAction = {
    initBoardInfo: createAction<null>(LayoutHomeActionType.INIT_HOME_INFO),
    clickHamburger: createAction<boolean>(LayoutHomeActionType.HAMBURGER_CLICK),
};

