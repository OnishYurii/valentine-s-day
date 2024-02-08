import { useState } from 'react';
import Confetti from 'react-confetti';
import emailjs from 'emailjs-com';

const App = () => {
  const [clickOnBtnYes, setclickOnBtnYes] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [text, setText] = useState('Натисни на Подарунок😉');

  const sendEmail = () => {
    emailjs.send(
      'service_47cea7b',
      'template_7ok1007',
      {
        to_email: 'onishchenkoyurii@gmail.com',
      },
      '8WlUfJzpZvKzKokqb'
    );
  };

  const handleClickYes = () => {
    setclickOnBtnYes(true);
  };

  const handleConfetti = () => {
    setText('Подарунок вже прямує до Тебе 💌');
    sendEmail();
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 50000);
  };

  return (
    <div className="mainForm">
      {clickOnBtnYes ? (
        <div>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Second gif"
          />
          <p className="text1">Моя ти Бусінка💋</p>
          <p className="text2">{text}</p>
          <button className="btnSurprise" onClick={handleConfetti}>
            🎁
          </button>
          {showConfetti && <Confetti />}
        </div>
      ) : (
        <div>
          <img
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="First gif"
          />
          <p>Будеш моєю Валентинкою?🥰</p>
          <ul className="btnList">
            <li>
              <button className="btnYes" onClick={handleClickYes}>
                Так
              </button>
            </li>
            <li>
              <button className="btnNo">Ні</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default App;
