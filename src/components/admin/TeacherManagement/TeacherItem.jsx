export default function StudentItem({id,username,subject,ownCourse}) {
    return (
        <tr id={id}>
            <td><input type="checkbox" /></td>
            <td>{id}</td>
            <td>{username}</td>
            <td>{subject}</td>
            <td>{ownCourse}</td>
            <td className="flex justify-center items-center ">
                <div className="cursor-pointer w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </td>
            
        </tr>
    )
}