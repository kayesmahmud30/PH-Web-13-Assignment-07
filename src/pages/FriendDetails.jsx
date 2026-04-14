import { useParams } from 'react-router';
import FriendDetailsCard from '../components/ui/FriendDetailsCard'
import useFriends from '../hook/useFriends';
import Spinner from '../components/ui/Spinner';
import { useContext } from 'react';
import { ActionContext } from '../context/actioncontext/ActionContext';

const FriendDetails = () => {
    const { id } = useParams();
    const { action, setAction } = useContext(ActionContext);

    const { friends, loading } = useFriends();
    const selectedProduct = friends.find(friend => friend.id === parseInt(id));

    if (loading) {
        return <div className='min-h-screen'><Spinner /></div>
    }


    return (
        <div className='min-h-screen max-w-325 mx-auto py-20 px-5'>
            <FriendDetailsCard
                friends={friends}
                selectedProduct={selectedProduct}
                setAction={setAction}
                action={action}
            />
        </div>
    );
};

export default FriendDetails;