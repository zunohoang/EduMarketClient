export default function InputMessage({check,message}) {
    if (check) {
        return (
            <div className="text-green-500 text-sm m-0">{message}</div>
        )
    } else {
        return (
            <div className="text-red-500 text-sm m-0">{message}</div>
        )
    } 
    // else {
    //     return (
    //         <div className="text-yellow-500 text-sm m-0">Không được để trống</div>
    //     )
    // }
}