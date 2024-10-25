
export default function CodeItem({id,title,teacher,date,price,code,image}) {
    return (
        <tr id={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{teacher}</td>
            <td>{date}</td>
            <td>{`${price} VNĐ`}</td>
            <td>{code}</td>
            <td className="flex justify-center items-center">
                <div
                style={{'--image-url': `url(${image})`}} 
                className='bg-[image:var(--image-url)] w-5 h-5'>
                </div>
            </td>
        </tr>
    )
}

