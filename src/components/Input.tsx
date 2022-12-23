interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({
    name,
    value,
    onChange,
    id,
    placeholder,
}: InputProps) => {
    return (
        <input
            className="border border-black rounded-md focus:outline-none p-2 px-2 w-full"
            name={name}
            value={value}
            onChange={onChange}
            id={id}
            placeholder={placeholder}
        ></input>
    )
}
