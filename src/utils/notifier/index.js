import React from 'react';
import {toast} from 'react-toastify';
import {Translate} from 'react-localize-redux';
import errorIcon from '../../utils/images/notifier/error.svg';
import warningIcon from '../../utils/images/notifier/warning.svg';
import infoIcon from '../../utils/images/notifier/info.svg';
import successIcon from '../../utils/images/notifier/success.svg';

const notifier = ({message, autoClose = true, className = '', extendedMessage}) => {
  if (typeof message === 'string' && message.includes('401')) {
    return (window.location.href = '/private');
  }

  toast.dismiss();
  const isSingleMessage = !Array.isArray(message);
  const arrayMessage = isSingleMessage ? [message] : message;

  const messageTranslated = (
    <div>
      <ul>
        {arrayMessage.map((itemMessage) => (
          <li key={itemMessage} className="general-error-message-main-message">
            <Translate id={itemMessage} />
          </li>
        ))}
      </ul>
      {extendedMessage ? (
        <span className="general-error-message-extended-message">
          {extendedMessage}
        </span>
      ) : (
        ''
      )}
    </div>
  );

  const isSuccess = arrayMessage[0].includes('.success');
  const isError = arrayMessage[0].includes('.error');
  const isWarning = arrayMessage[0].includes('.warning');
  const config = {autoClose, className};

  if (isSuccess) {
    toast.success(
      <div className="Toastify__toast--wrapper">
        <img src={successIcon} alt="Success" />
        <span className="general-error-message-label-toast">
          {messageTranslated}
        </span>
      </div>,
      config
    );
  } else if (isError) {
    toast.error(
      <div className="Toastify__toast--wrapper">
        <img src={errorIcon} alt="Error" />
        <span className="general-error-message-label-toast">
          {messageTranslated}
        </span>
      </div>,
      config
    );
  } else if (isWarning) {
    toast.warn(
      <div className="Toastify__toast--wrapper">
        <img src={warningIcon} alt="Warning" />
        <span className="general-error-message-label-toast">
          {messageTranslated}
        </span>
      </div>,
      config
    );
  } else {
    toast.info(
      <div className="Toastify__toast--wrapper">
        <img src={infoIcon} alt="Info" />
        <span className="general-error-message-label-toast">
          {messageTranslated}
        </span>
      </div>,
      config
    );
  }
};

export default notifier;
