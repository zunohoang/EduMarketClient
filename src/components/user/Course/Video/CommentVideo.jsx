import { useState } from "react";

export function Comment({username,content,date}) {
  return (
    <div className='mt-6'>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 flex justify-center'>
            <div className='w-12 h-12 rounded-full bg-[#395c8c] flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <div className='col-span-10 ml-1'>
            <div className='bg-[#F7F9FA] rounded-lg p-4'>
              <h1 className='font-semibold'>{username}</h1>
              <p className='mt-2'>{content}</p>
            </div>
            <div className='mt-2 flex justify-end'>
              <p className='text-[#395c8c] font-extralight'>{date}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default function CommentVideo() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const today = new Date();
      const formattedDate = `${today.getHours()}:${today.getMinutes()} ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      
      setComments([
        ...comments,
        {
          username: "Nguyễn Văn Hoàng",
          content: comment,
          date: formattedDate,
        },
      ]);
      
      setComment("");
    }
  };
  return (
    <div className="p-4 px-7 rounded-md bg-[#FFFFFF] mt-6">
      <h1 className='font-semibold'>Bình luận</h1>
      <div className='mt-6'>
        <div className='grid grid-cols-12'>
          <div className="col-span-2 flex justify-center">
            <div className='w-12 h-12 rounded-full bg-[#395c8c] flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <div className='col-span-10 ml-2'>
            <textarea 
            value={comment}
            onChange={(e) => setComment(e.target.value)} 
            className='w-full h-24 bg-[#F7F9FA] rounded-lg p-4 outline-sky-800' placeholder='Viết bình luận...'></textarea>
            <div className='flex justify-end mt-2'>
              <button onClick={handleCommentSubmit} className='bg-[#395c8c] text-white rounded-lg px-4 py-2'>Bình luận</button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-scroll">
        {comments.map((com, index) => (
          <Comment key={index} username={com.username} content={com.content} date={com.date} />
        ))}
      </div>
      
    </div>
  );
}