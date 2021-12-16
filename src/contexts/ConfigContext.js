import React, { createContext, useReducer } from 'react';

// project imports
import * as actionType from 'store/actions';
import { CONFIG } from 'config/constant';

const initialState = {
    ...CONFIG,
    isOpen: [], // for active default menu
    isTrigger: [] // for active default menu, set blank for horizontal
};
const ConfigContext = createContext({});
const { Provider } = ConfigContext;

const ConfigProvider = ({ children }) => {
    let trigger = [];
    let open = [];

    const [state, dispatch] = useReducer((stateData, action) => {
        switch (action.type) {
            case actionType.CHANGE_LAYOUT:
                return {
                    ...stateData,
                    layout: action.layout
                };
            case actionType.COLLAPSE_MENU:
                return {
                    ...stateData,
                    collapseMenu: !stateData.collapseMenu
                };
            case actionType.COLLAPSE_TABMENU:
                return {
                    ...stateData,
                    collapseTabMenu: !stateData.collapseTabMenu
                };
            case actionType.NOTIFICATION_MODAL:
                return {
                    ...stateData,
                    notificationModal: !stateData.notificationModal
                };
            case actionType.COLLAPSE_HEADERMENU:
                return {
                    ...stateData,
                    collapseHeaderMenu: !stateData.collapseHeaderMenu
                };
            case actionType.COLLAPSE_LAYOUT:
                return {
                    ...stateData,
                    collapseLayout: !stateData.collapseLayout
                };
            case actionType.COLLAPSE_TOGGLE:
                if (action.menu.type === 'sub') {
                    open = stateData.isOpen;
                    trigger = stateData.isTrigger;

                    const triggerIndex = trigger.indexOf(action.menu.id);
                    if (triggerIndex > -1) {
                        open = open.filter((item) => item !== action.menu.id);
                        trigger = trigger.filter((item) => item !== action.menu.id);
                    }

                    if (triggerIndex === -1) {
                        open = [...open, action.menu.id];
                        trigger = [...trigger, action.menu.id];
                    }
                } else {
                    open = stateData.isOpen;
                    const triggerIndex = stateData.isTrigger.indexOf(action.menu.id);
                    trigger = triggerIndex === -1 ? [action.menu.id] : [];
                    open = triggerIndex === -1 ? [action.menu.id] : [];
                }

                return {
                    ...stateData,
                    isOpen: open,
                    isTrigger: trigger
                };
            case actionType.HEADER_BACK_COLOR:
                return {
                    ...stateData,
                    headerBackColor: action.headerBackColor
                };
            case actionType.COLOR_BRAND:
                return {
                    ...stateData,
                    colorBrand: action.colorBrand
                };
            case actionType.LAYOUT_TYPE:
                return {
                    ...stateData,
                    layoutType: action.layoutType
                };
            case actionType.PAGE_TYPE:
                return {
                    ...stateData,
                    pageType: action.pageType
                };
            case actionType.NAV_COLLAPSE_LEAVE:
                if (action.menu.type === 'sub') {
                    open = stateData.isOpen;
                    trigger = stateData.isTrigger;

                    const triggerIndex = trigger.indexOf(action.menu.id);
                    if (triggerIndex > -1) {
                        open = open.filter((item) => item !== action.menu.id);
                        trigger = trigger.filter((item) => item !== action.menu.id);
                    }
                    return {
                        ...stateData,
                        isOpen: open,
                        isTrigger: trigger
                    };
                }
                return { ...stateData };
            case actionType.NAV_CONTENT_LEAVE:
                return {
                    ...stateData,
                    isOpen: open,
                    isTrigger: trigger
                };
            case actionType.RESET:
                return {
                    ...stateData,
                    layout: initialState.layout,
                    collapseMenu: initialState.collapseMenu,
                    layoutType: initialState.layoutType,
                    colorBrand: initialState.colorBrand,
                    pageType: initialState.pageType,
                    headerBackColor: initialState.headerBackColor
                };
            default:
                throw new Error();
        }
    }, initialState);
    return <Provider value={{ state, dispatch }}> {children} </Provider>;
};

export { ConfigContext, ConfigProvider };
