//管理数据

const defaultState = {
    num: 20
}
let reducer = (state = defaultState, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))

    console.log("yes")
    switch (action.type) {
        case "add1":
            newState.num++;
            break;
        case "add2":
            newState.num += action.val;
            break;
        default:
            break;
    }
    return newState
}
export default reducer
