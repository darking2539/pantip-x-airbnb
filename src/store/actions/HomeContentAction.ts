import { createAction } from "../../libs";

export const HomeContentActionType = {
    INIT_HOME_CONTENT: `INIT_HOME_CONTENT`,
};

export const HomeContentAction = {
    initHomeContentInfo: createAction<null>(HomeContentActionType.INIT_HOME_CONTENT),
};

