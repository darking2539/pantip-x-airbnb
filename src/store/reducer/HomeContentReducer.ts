import { createReducer } from "../../libs/reducerCreator";
import { HomeContentAction } from "../actions";
import { HomeContentTypeState } from "../type/HomeContentType";
import { roomCategoryListInit, AnnouncementListInit, HighLightListInit } from "../init/HomeContentInit";
import XiaomiAdv from "../../assets/xiaomi_adv.jpeg"

export const initialState: HomeContentTypeState = {
    advertiseImage: XiaomiAdv,
    roomCategoryList: roomCategoryListInit,
    announcement:AnnouncementListInit,
    highLightList: HighLightListInit,
}

export default createReducer(initialState, HomeContentAction)
    .handleAction(HomeContentAction.initHomeContentInfo, () => {
        return initialState;
    })