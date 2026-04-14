import FriendCard from '../components/ui/FriendCard';
import useFriends from '../hook/useFriends';
import Spinner from '../components/ui/Spinner';
import HeroBanner from '../components/homesection/HeroBanner';
import { Link } from 'react-router';




const Home = () => {
    const { friends, loading } = useFriends();

    const statusOnTrack = friends.filter(ove => ove.status === 'overdue');
    const statusOverdue = friends.filter(ove => ove.status === 'overdue');
    const statusAlmostDue = friends.filter(ove => ove.status === 'almost_due');

    return (
        <div className='min-h-screen max-w-325 mx-auto px-5'>
            <HeroBanner
                totalFriends={friends.length}
                totalStatusOnTrack={statusOnTrack.length}
                totalStatusOverdue={statusOverdue.length}
                totalStatusAlmostDue={statusAlmostDue.length}
            />

            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>Your Friends</h2>
                {
                    loading ? <Spinner /> :
                        <div className='grid gap-7  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-3 mb-16'>
                            {
                                friends.map(friend => <Link to={`friends//${friend.id}`}>
                                    <FriendCard
                                        key={friend.id}
                                        friend={friend}
                                        id={friend.id}
                                        picture={friend.picture}
                                        name={friend.name}
                                        contactDays={friend.days_since_contact}
                                        tags={friend.tags}
                                        status={friend.status}

                                    />
                                </Link>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Home;