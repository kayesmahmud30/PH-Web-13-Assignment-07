import { Link } from 'react-router';
import footerLogo from '../../assets/logo-xl.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-7 '>
            <div className='container mx-auto px-5 space-y-5'>
                <div className=' flex flex-col justify-center items-center'>
                    <img src={footerLogo} alt="footer logo" className='w-50 sm:w-90' />
                    <p className='text-[#FFFFFF] text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <h3 className='text-white text-xl font-medium'>Social Links</h3>
                    <div className='flex gap-3'>
                        <Link >
                            <img src={instagram} alt="instagram" />
                        </Link>
                        <Link >
                            <img src={facebook} alt="facebook" />
                        </Link>
                        <Link >
                            <img src={twitter} alt="twiter" />
                        </Link>
                    </div>
                </div>


                <div>
                    <hr className="text-gray-500" />
                    <div className='flex flex-col sm:flex-row  justify-between items-center gap-2 mt-3'>

                        <p><small className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</small></p>

                        <div className='space-x-4 text-[#FAFAFA]'>
                            <Link>Privacy Policy</Link>
                            <Link>Terms of Service </Link>
                            <Link>Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;