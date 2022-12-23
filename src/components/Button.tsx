interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ name, onClick, type }: ButtonProps) => {
    return (
        <button
            className="rounded-md p-2 px-2 w-full font-bold bg-pink-800 text-white  border-pink-800 hover:bg-white hover:text-pink-800 hover:ease-in duration-150 hover:border border-2 "
            type={type}
            onClick={onClick}
        >
            {name}
        </button>
    )
}
