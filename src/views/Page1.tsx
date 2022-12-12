import {useSelector, useDispatch} from "react-redux"

const View = () => {
    // 通过useSelector获取仓库数据
    const {num} = useSelector((state:RootState)=> ({
        num:state.num
    }))

    //修改仓库数据
    const dispatch = useDispatch()
    const changeNum = () => {
        //type是固定的一个记号，val可以自定义
        dispatch({type:"add3", val:100})
    }

    return (
        <div className="home">
            this is page1
            <p>{num}</p>
            <button onClick={changeNum}>按钮</button>
        </div>

    )
}

export default View