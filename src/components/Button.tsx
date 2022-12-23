interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ name, onClick, type }: ButtonProps) => {
    return (
        <button
            className="bg-pink-900 text-white"
            type={type}
            onClick={onClick}
        >
            {name}
        </button>
    )
}
