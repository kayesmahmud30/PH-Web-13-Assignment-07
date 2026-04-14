

const ActionCard = ({type,icon,name,date}) => {
    return (
        <div>
            <div name="" id="" className='mt-6 p-7  border border-gray-300  shadow rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white flex justify-start gap-5 items-center'>
                <div>
                    <img src={icon} alt="call" />
                </div>
                <div>
                    <h3 className='text-xl text-[#244D3F] font-medium capitalize'>{type} <span className=' text-[#64748B] font-normal'>with {name}</span></h3>
                    <p className='text-[#64748B] text-[16px] font-medium'>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default ActionCard;