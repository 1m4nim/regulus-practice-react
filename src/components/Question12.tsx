import { useState, type ChangeEvent } from "react";

function TextInput() {
    const [text, setText] = useState("");

    const hanadleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        setText("")
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={hanadleChange}
                placeholder="ここに入力してください"

            />
            <p>入力内容：{text}</p>
            <p>文字数：{text.length}</p>
            <button onClick={handleClear}>クリア</button>

        </div>
    )
}

export default TextInput;