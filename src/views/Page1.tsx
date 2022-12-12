import {useSelector} from "react-redux"


const View = () => {
    // 通过useSelector获取仓库数据
    const {num} = useSelector((state)=> ({
        num:state.num
    }))

    return (
        <div className="home">
            this is page1
            <p>{num}</p>
        </div>

    )
}

export default View