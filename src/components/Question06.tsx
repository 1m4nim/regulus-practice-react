import Greeting from "./Greeting";

function Question06() {
    const names = ["yamada", "suzuki", "sato"]
    return (
        <div>
            {names.map((name, index) => (
                <Greeting key={index} name={name} />
            ))}
            {/* <Greeting name="yamada" />
            <Greeting name="sato" />
            <Greeting name="suzuki" /> */}
        </div>
    );
}

export default Question06;