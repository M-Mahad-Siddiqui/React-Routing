import PropTypes from 'prop-types';

function UserGreeting({ isLogging, username }) {
    return (
        isLogging 
            ? <h1 className="login">Welcome {username}</h1> 
            : <h1 className="notLogin">Please log in to your account</h1>
    );
}

UserGreeting.propTypes = {
    isLogging: PropTypes.bool.isRequired,
    username: PropTypes.string
};

UserGreeting.defaultProps = {
    username: 'Guest'
};

export default UserGreeting;
