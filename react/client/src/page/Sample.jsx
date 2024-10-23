import Hello from "./Hello"
import Hai from  "./Hai"
function Sample(){
    var a="hephzibah"

    return(
        <>
        <h1>Sample page:{a}</h1>
        <Hello values={a}/>
        <Hai datas={a}/>
        </>
    )
}
export default Sample