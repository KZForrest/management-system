import {createStore} from "redux";
import reducer from "./reducer";


//创建数据仓库
//浏览器的redux插件正常使用
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
    
export default store


