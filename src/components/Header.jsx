import '../styles.css';
import ButtonAgain from './ButtonAgain';
import Number from './Number';

function Header(){
    return(
       <div> 
        <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <ButtonAgain />
      <Number />
      </div>
    )
};

export default Header;