type InputFieldProps = {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
}

function InputField({ label, ...restProps }: InputFieldProps) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input {...restProps} />
            {/* <input type={restProps.type} placeholder={restProps.placeholder} required={restProps.required} /></div> */}
        </div>
    );
}

export default InputField;