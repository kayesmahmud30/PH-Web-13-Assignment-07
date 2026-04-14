import { HiOutlineBellSnooze } from 'react-icons/hi2';
import FriendCard from '../ui/FriendCard'
import Button from '../../components/ui/Button';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { BiMessageDots } from 'react-icons/bi';
import { IoVideocamOutline } from 'react-icons/io5';
import callIcon from '/public/image/call.png'
import textIcon from '/public/image/text.png'
import videoIcon from '/public/image/video.png'
import { toast } from 'react-toastify';

const FriendDetailsCard = ({ selectedProduct, action, setAction }) => {
    const { name, picture, tags, status, days_since_contact: contact, goal, next_due_date: due, email } = selectedProduct;

    const updateCall = (name) => {
        setAction([...action, {
            type: 'call',
            name,
            date: new Date().toLocaleDateString(),
            icon: callIcon,
        }])
        toast.success(`Called ${name} successfully.`, {
            style: {
                background: "#244d3f",
                color: "#ffffff",
                borderRadius: "5px",
                padding: '0px 10px',

            }
        });
    }

    const updateText = (name) => {
        setAction([...action, {
            type: 'text',
            name,
            date: new Date().toLocaleDateString(),
            icon: textIcon,
        }])
        toast.success(`Sent a text to ${name} successfully.`, {
            style: {
                background: "#244d3f",
                color: "#ffffff",
                borderRadius: "5px",
                padding: '0px 10px',

            }
        });
    }

    const updateVideo = (name) => {
        setAction([...action, {
            type: 'video',
            name,
            date: new Date().toLocaleDateString(),
            icon: videoIcon
        }])
        toast.success(`Video called ${name} successfully.`, {
            style: {
                background: "#244d3f",
                color: "#ffffff",
                borderRadius: "5px",
                padding: '0px 10px',

            }
        });
    }


    return (
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-5">


            <div className="lg:col-span-4 space-y-4">
                <FriendCard
                    picture={picture}
                    name={name}
                    contactDays={contact}
                    tags={tags}
                    status={status}
                    email={email}
                    emailLevel="Preferred:"
                />

                <Button
                    className={"w-full bg-gray-100 p-3 rounded flex justify-center items-center gap-1 font-medium hover:cursor-pointer"}
                    icon={<HiOutlineBellSnooze />}
                    children='Snooze 2 weeks' />

                <Button
                    className={"w-full bg-gray-100 p-3 rounded flex justify-center items-center gap-1 font-medium hover:cursor-pointer"}
                    icon={<PiArchiveBold />}
                    children='Archive' />

                <Button
                    className={"w-full bg-gray-100 p-3 rounded flex justify-center items-center gap-1 text-red-500 font-medium hover:cursor-pointer"}
                    icon={<RiDeleteBin6Line />}
                    children='Delete' />

            </div>


            <div className="lg:col-span-8 space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className='py-9 text-center shadow rounded-sm'>
                        <h2 className='text-3xl font-bold'>{contact}</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='py-9  text-center shadow rounded-sm'>
                        <h2 className='text-3xl font-bold'>{goal}</h2>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='py-9  text-center shadow rounded-sm'>
                        <h2 className='text-3xl font-bold'>{due}</h2>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>

                </div>


                <div className="bg-white p-5 rounded shadow flex justify-between items-start">
                    <div>
                        <h3 className='text-[#244D3F] text-xl font-medium mb-3'>Relationship Goal</h3>
                        <p className='text-[#64748B] text-18px] '>Connect every <span className='text-black font-medium'>{goal} days</span></p>
                    </div>
                    <Button
                        className={"px-3 py-1 bg-gray-100 rounded   border border-gray-200 font-medium text-[14px] hover:cursor-pointer "}
                        children='Edit' />
                </div>


                <div className="bg-white p-5 rounded shadow">
                    <h3 className='text-[#244D3F] text-xl font-medium mb-3'>Quick Check-In</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        <Button
                            onClick={() => updateCall(name)}
                            className={"p-4 bg-gray-100 rounded flex flex-col gap-2 justify-center items-center border border-gray-200 text-xl hover:cursor-pointer "}
                            icon={<TbPhoneCall />}
                            children='Call' />
                        <Button
                            onClick={() => updateText(name)}
                            className={"p-4 bg-gray-100 rounded flex flex-col gap-2 justify-center items-center border border-gray-200 text-xl hover:cursor-pointer "}
                            icon={<BiMessageDots />}
                            children='Text' />

                        <Button
                            onClick={() => updateVideo(name)}
                            className={"p-4 bg-gray-100 rounded flex flex-col gap-2 justify-center items-center border border-gray-200 text-xl hover:cursor-pointer "}
                            icon={<IoVideocamOutline />}
                            children='Video' />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetailsCard;