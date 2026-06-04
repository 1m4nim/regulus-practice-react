import Card from "./Card";

function Question09() {
    return (
        <>
            <Card title="カード1">
                <p>最初のカード</p>
            </Card>

            <Card title="カード2">
                <ul>
                    <li>リスト項目１</li>
                    <li>リスト項目２</li>
                </ul>
            </Card>

            <Card title="カード３">
                <button>ボタンも入れられます</button>
            </Card>
        </>
    )
}

export default Question09;