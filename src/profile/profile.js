import react from "react" ; 
import PropTypes from "prop-types";



function Profile  ({fullName,bio,profession,handleName})
{const styleObject = { color:"red" , textAlign : 'center'}
return (
<div>
<button style={styleObject} onClick={handleName(fullName)}>
click me 
</button>
<h1 style={styleObject}>{fullName}</h1>
</div>
);
}


export default Profile;
Profile.defaultProps ={
fullName:"nour",
bio:"ma biographie",
profession:"etudiante"
};

Profile.propTypes = {
fullName:PropTypes.string , 
bio : PropTypes.string ,
profession : PropTypes.string,
handleName : PropTypes.func
};