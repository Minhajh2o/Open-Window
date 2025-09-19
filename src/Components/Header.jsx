import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <h1 className="quintessential-regular text-6xl">OPEN WINDOW</h1>
            <p className='text-gray-500 text-lg mt-5 mb-2.5'>Journalism Without Fear or Favour</p>
            <p className='text-gray-400 text-sm font-semibold'><span className='text-gray-600'>{moment().format('dddd, ')}</span>{moment().format('MMMM Do YYYY, h:mm a')}</p>
        </div>
    );
};

export default Header;