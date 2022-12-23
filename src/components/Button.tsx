interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset' | undefined
    className?: string
}

export const Button = ({ name, onClick, type, className }: ButtonProps) => {
    return (
        <button
            className={` ${className} rounded-md p-2 px-2 w-full font-bold bg-pink-800 text-white border-2 border-pink-800 hover:border-pink-800 hover:bg-white hover:text-pink-800 hover:ease-in duration-150`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}
