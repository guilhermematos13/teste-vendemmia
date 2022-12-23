import { ChangeEvent, ChangeEventHandler, ReactNode } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const Input = ({
    name,
    value,
    onChange,
    type,
    id,
    placeholder,
    icon,
}: InputProps) => {
    return (
        <div className="flex gap-2 items-center border border-black rounded-md px-2 w-full">
            {icon && icon}
            <input
                className="py-2 focus: outline-none w-full"
                name={name}
                value={value}
                type={type}
                onChange={onChange}
                id={id}
                placeholder={placeholder}
            ></input>
        </div>
    )
}
