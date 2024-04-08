import { createSelector } from 'reselect';
import { IRootState } from '../type/@types';

const homeContentSelector = (state: IRootState) => state.homeContent;

export const advertiseImageSelector = createSelector(homeContentSelector, (state) => {
    return state.advertiseImage;
});

export const roomCategoryListInitSelector = createSelector(homeContentSelector, (state) => {
    return state.roomCategoryList;
});

export const announcementListSelector = createSelector(homeContentSelector, (state) => {
    return state.announcement;
});

export const highlightListSelector = createSelector(homeContentSelector, (state) => {
    return state.highLightList;
});