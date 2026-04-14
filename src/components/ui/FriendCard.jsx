import { Link } from 'react-router';

const FriendCard = ({ picture, name, contactDays, tags, status, emailLevel, email }) => {
    const overdeu = status === 'overdue' && 'bg-[#EF4444] text-white';
    const almost_due = status === 'almost_due' && 'bg-[#EFAD44] text-white';
    const on_track = status === 'on_track' && 'bg-[#244D3F] text-white';
    return (
        <div className='py-7 px-12 text-center flex flex-col gap-1 justify-center items-center shadow rounded-sm'>
            <img src={picture} alt="" className='rounded-full' />
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p className='text-[12px] text-[#64748B]'>{contactDays}d ago</p>
            <div className='flex  justify-center items-center gap-2'>
                {
                    tags?.map((tag, ind) => <p key={ind}
                        className='bg-[#CBFADB] text-[12px] font-medium rounded-full px-3 py-1 uppercase'
                    >{tag}</p>)
                }

            </div>
            <div>
                <p className='text-[#64748B] font-medium'>"Former colleague, great mentor"</p>
                <p className='text-[#64748B]'>{emailLevel} {email}</p>
            </div>
            <p
                className={`${overdeu} ${almost_due} ${on_track}  text-[12px] font-medium rounded-full px-3 py-1 capitalize mt-1`}
            >{status}</p>
        </div>
    );
};

export default FriendCard;