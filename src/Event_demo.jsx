
export function ExEventDemo(){
    function changeHandler(e){
        console.log(` X: ${e.clientX}\n shiftkey:${e.shiftKey}\n ButtonId:${e.target.id}`)
        alert("button clicked")

    }
    return(
        <div>

            <h1>hi</h1>
            <button id="btniserted" onClick={changeHandler}>inserted</button>
        </div>
    )
}