import { useContext, useEffect, useState } from 'react';
import { ActionContext } from '../context/actioncontext/ActionContext';
import ActionCard from '../components/ui/ActionCard';
import Empty from '../components/ui/Empty';
import { IoIosSearch } from 'react-icons/io';


const Timeline = () => {
    const { action } = useContext(ActionContext);
    const [filtredAction, setFiltredAction] = useState(action);
    const [filterType, setFilterType] = useState();

    useEffect(() => {
        if (filterType) {
            if (filterType === 'call') {
                const callFiltered = action.filter(a => a.type === 'call');
                setFiltredAction(callFiltered);
            }
            else if (filterType === 'text') {
                const textFiltered = action.filter(a => a.type === 'text');
                setFiltredAction(textFiltered);
            }
            else if (filterType === 'video') {
                const videoFiltered = action.filter(a => a.type === 'video');
                setFiltredAction(videoFiltered);
            }
        }
    }, [filterType, action]);

    // const handleSearch = (e) => {
    //     const value = e.target.value.toLowerCase().trim();

    //     const sheredValue = action.include(sheVal => sheVal.name.toLowerCase() === value );
    //     setFiltredAction(sheredValue);
        
    // }
   

    return (
        <div className='min-h-screen max-w-325 mx-auto py-20 px-5'>

            {
                action.length === 0 ? <Empty
                    children='No activities recorded yet.'
                /> :
                    <div >
                        <h2 className='text-5xl font-bold'>Timeline</h2>
                        <div className='flex justify-between items-center gap-5'>
                            <select
                                onChange={(e) => setFilterType(e.target.value)}
                                className='mt-6 w-60 border border-gray-300 border- shadow py-2 rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white outline-0 '>
                                <option >Filter timeline</option>
                                <option value="call">Call</option>
                                <option value="text">Text</option>
                                <option value="video">Video</option>
                            </select>

                            {/* <div className='w-full flex justify-start gap-2 items-center mt-6 px-3 border border-gray-300 border- shadow py-2 rounded-sm text-[#64748B] ring-inset  bg-white  '>
                                <IoIosSearch />
                                <input className='w-full outline-0'
                                    onChange={handleSearch}
                                    type="text" placeholder='Search friends' />
                            </div> */}
                        </div>
                    </div>
            }

            {
                filtredAction.map((actionData, ind) => <ActionCard
                    key={ind}
                    type={actionData.type}
                    icon={actionData.icon}
                    name={actionData.name}
                    date={actionData.date}
                />)
            }

        </div>
    );
};

export default Timeline;