import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";
import FetchDemoPage from "../page/FetchDemoPage";
import {connect} from "react-redux";
import {createReactNavigationReduxMiddleware, createReduxContainer} from "react-navigation-redux-helpers";
export const rootCom = 'init';//设置根路由

const InitNavigator=createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null,
        }
    }
});
const MainNavigator=createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null,
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            //header:null,
        }
    },
    FetchDemoPage:{
        screen:FetchDemoPage,
        navigationOptions:{
            //header:null,
        }
    },
});
export const RootNavigator = createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions:{
        header:null,
    }
}));
/**
 * 初始化react-navigation与redux的中间件
 * 该方法的一个很大的作用就是为reduxifyNavigator的key设置
 * actionSubscribers(行为订阅者)
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

/**
 * 将根导航组件传递给reduxifyNavigator函数
 * 并返回一个将navigation state 和 dispatch 函数作为props的新组件
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
const AppWithNavigationState = createReduxContainer(RootNavigator, "root");

/**
 * State到Props的映射关系
 * @param state
 * @returns {{state: NavigationState}}
 */
const mapStateToProps = state =>({
    state: state.nav
});

/**
 * 连接react组件与redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);


