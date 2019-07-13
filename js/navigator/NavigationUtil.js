/**
 * 全局导航跳转工具类
 */
export default class NavigationUtil {
    /**
     * 跳转到指定页面
     * @param params
     * @param page
     */
    static goPage(params,page){
        const navigation=NavigationUtil.navigation;
        console.log("navigation: "+JSON.stringify(navigation));
        if (!navigation){
            console.log("navigation can not be null");
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
        console.log("params: "+JSON.stringify(params));
    }
    /**
     * 返回上一页
     * @param navigation
     */
    static goBack(navigation){
        navigation.goBack();
    }

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomPage(params){
        const {navigation} = params;
        navigation.navigate("Main");
    }
}
