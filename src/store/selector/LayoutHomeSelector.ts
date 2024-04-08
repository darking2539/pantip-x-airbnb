import { createSelector } from 'reselect';
import { IRootState } from '../type/@types';

const layOutHomeSelector = (state: IRootState) => state.layoutHome;

export const sideBarOpenSelector = createSelector(layOutHomeSelector, (state) => {
    return state.sideBarOpen;
});

export const mainMenuSelector = createSelector(layOutHomeSelector, (state) => {
    return state.mainMenu;
});

export const subMenuSelector = createSelector(layOutHomeSelector, (state) => {
    return state.subMenu;
});

export const detailDataSelector = createSelector(layOutHomeSelector, (state) => {
    return state.detailData;
});
