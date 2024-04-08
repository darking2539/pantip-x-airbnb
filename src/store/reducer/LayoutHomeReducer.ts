import { createReducer } from "../../libs/reducerCreator";
import { LayoutHomeAction } from "../actions";
import { LayOutHomeTypeState } from "../type/LayoutHomeType";
import { mainMenuInit, subMenuInit, detailDataInit } from "../init/LayoutHomeInit";

export const initialState: LayOutHomeTypeState = {
  sideBarOpen: false,
  mainMenu: mainMenuInit,
  subMenu: subMenuInit,
  detailData: detailDataInit,
}

export default createReducer(initialState, LayoutHomeAction)
  .handleAction(LayoutHomeAction.initBoardInfo, () => {
    return initialState;
  })
  .handleAction(LayoutHomeAction.clickHamburger, (state) => {
    return {
      ...state,
      sideBarOpen: !state.sideBarOpen,
    };
  });