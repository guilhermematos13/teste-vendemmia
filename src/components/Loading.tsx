import ReactLoading from 'react-loading'

export const Loading = () => (
    <div className="w-full h-full flex justify-center items-center ">
        <ReactLoading type="bars" color="#FF2F69" height={50} width={50} />
    </div>
)
