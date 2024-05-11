import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D,YYYY")}</p>
            </div>
            <div className='flex'>
                <button className="btn btn-secondary">Latest</button>
                <Marquee pauseOnHover={true} speed={200}>
                   <Link to='/'> I can be a React component, multiple React components, or just some text.</Link>
                </Marquee>

            </div>
        </div>
    );
};

export default Header;