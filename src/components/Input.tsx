import { ReactNode } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode
}

export const Input = ({
    name,
    value,
    onChange,
    id,
    placeholder,
    icon,
}: InputProps) => {
    return (
        <div className="flex gap-2 items-center border border-black rounded-md px-2 w-full">
            {icon && icon}
            <input
                className="py-2 focus: outline-none"
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                placeholder={placeholder}
            ></input>
        </div>
    )
}
