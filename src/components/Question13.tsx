import { useState } from "react";

function ToggleSwitch() {

    const [isOn, setIsOn] = useState(false);

    const buttonStyle = {
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer"
    }

    const toggleSwitch = () => {
        setIsOn((prev) => !prev);
    }
    return (
        <div>
            <button style={buttonStyle} onClick={toggleSwitch}>
                {isOn ? "ON" : "OFF"}
            </button>
            <p>現在の状態:{isOn ? "アクティブ" : "非アクティブ"}</p>
        </div>
    )
}

export default ToggleSwitch;