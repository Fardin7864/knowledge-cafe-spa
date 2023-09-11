import PropTypes from 'prop-types';

const ReadinTime = ({markRead}) => {
    return (
        <div className="w-[411px] h-20 rounded-lg border border-[#6047EC] bg-[#6047EC1A] mt-8 mb-6 flex items-center justify-center">
            <h3 className="text-[#6047EC] text-2xl font-bold">Spent time on read : {markRead} Min</h3>
        </div>
    );
};

ReadinTime.propTypes ={
    markRead: PropTypes.number.isRequired
}
export default ReadinTime;