import {combineReducers} from 'redux';
import theme from './theme';
import {rootCom, RootNavigator} from '../navigator/AppNavigator';

//指定默认的state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 创建自己的navigation reducer
 */
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    // 如果nextState为null 或未定义，只需返回原始state
    return nextState || state;
};

const index = combineReducers({
    nav: navReducer,
    theme: theme,
});

export default index;
