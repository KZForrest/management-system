//类型声明文件里面不要直接使用引入import ... from ... 而是使用import("@/store")语法

// import store from "@/store"
// TS中提供了return type，用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>
console.log(RootState);

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:function;
}
