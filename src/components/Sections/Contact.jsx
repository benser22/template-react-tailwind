import { useState } from 'react';
import data from '../../data.json';

function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue.trim() === '') {
      setIsValidEmail(true);
      setEmailError('');
    } else {
      validateEmail(inputValue);
    }
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);
    setIsValidEmail(isValid);
    setEmailError(isValid ? '' : data['section-contact'].error);
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:${data.contact.email}?subject=Contacto&body=${email} te ha contactado`;
    } else {
      alert(emailError || data['section-contact'].error);
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="xl:px-[8vw] flex h-[200px] sm:h-[150px] text-xl sm:text-xl lg:text-base 2xl:text-xl max-w-[100vw] justify-between items-center md:gap-12 2xl:gap-44 bg-black text-white px-4">
          <div className="flex flex-col text-center mx-auto w-full">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-[16px] font-semibold flex px-4 w-full justify-center">
                {data['section-contact'].text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mx-auto max-w-[200px] text-xs sm:text-md text-center sm:text-left bg-transparent text-white py-2 px-5 border sm:border-r-0 sm:rounded-r-none placeholder-gray-400 rounded-md"
                  placeholder={data['section-contact'].input_placeholder}
                />
                <button
                  className="mx-auto text-xs sm:text-md text-black font-bold bg-white py-2 px-5 border border-white rounded-md sm:rounded-l-none"
                  onClick={handleButtonClick}
                >
                  {data['section-contact'].button}
                </button>
              </div>
            </div>
            <div className="flex relative mx-auto w-full">
              {emailError && (
                <p
                  style={{
                    textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.5)',
                    left: 0,
                    right: 0,
                    margin: 'auto',
                  }}
                  className="absolute pt-0 sm:pt-1 md:pt-2 text-red-400 text-sm"
                >
                  {data['section-contact'].error}
                </p>
              )}
            </div>
          </div>
        </div>
        <hr className="bg-green-custom h-[1px] border-none min-w-[90vw] left-[5%] absolute 2xl:hidden" />
      </section>
    </div>
  );
}
export default Contact;
