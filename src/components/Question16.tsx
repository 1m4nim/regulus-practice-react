import { useState } from "react";

function ClickButtons() {
    const [lastClicked, setLastClicked] = useState("なし");

    const handleClick = (buttonNumber: number) => {
        alert(`${buttonNumber}`);
        setLastClicked(`${buttonNumber}`)
    }

    return (
        <div>
            <h3>最後にクリックしたボタン: {lastClicked}</h3>
            <button onClick={() => handleClick(1)}>ボタン１</button>
            <button onClick={() => handleClick(2)}>ボタン2</button>
            <button onClick={() => handleClick(3)}>ボタン3</button>

        </div>
    )

    // const handleClick1 = () => {
    //     alert("1");
    //     setLastClicked("1")
    // }

    // const handleclick2 = () => {
    //     alert("2");
    //     setLastClicked("2")
    // }

    // const handleClick3 = () => {
    //     alert("3");
    //     setLastClicked("3")
    // }

    // return (
    //     <div>
    //         <h3>最後にクリックしたボタン: {lastClicked}</h3>
    //         <button onClick={handleClick1}>ボタン1</button>
    //         <button onClick={handleclick2}>ボタン2</button>
    //         <button onClick={handleClick3}>ボタン3</button>
    //     </div>
    // )
}


export default ClickButtons;