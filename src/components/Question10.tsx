import InputField from "./InputField";

function Question10() {
    return (
        <div>
            <InputField
                label="名前"
                type="text"
                placeholder="名前を入力してください"
                required
            />

            <InputField
                label="メールアドレス"
                type="email"
                placeholder="メールアドレスを入力してください"
                required
            />

            <InputField
                label="パスワード"
                type="password"
                placeholder="パスワードを入力してください"
                required
            />
        </div>
    )

}

export default Question10;