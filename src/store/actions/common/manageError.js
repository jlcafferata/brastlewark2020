import notifier from '../../utils/notifier'
import { messageTypes } from '../../../constants'
import isEmpty from '../../../utils/isEmpty'

const manageError = ({ error = {}, actionType }) => (dispatch) => {
  const { response = {}, message: errorMessage } = error || {}
  const defaultErroConfig = {
    autoClose: false,
    className: messageTypes.error,
  }

  if (!error) {
    console.log('unhandled error')
  }

  if (errorMessage && isEmpty(response)) {
    return notifier({ message: errorMessage, ...defaultErroConfig })
  }

  if (actionType) {
    return dispatch({
      type: actionType,
      payload: response.data ? response.data : response,
    })
  }

  if (typeof error === 'object' && !Array.isArray(error)) {
    const { status, data: { message: extendedMessage } = {} } = response || {}
    const messageToNotify = status
      ? `messages.code.error.${status}`
      : 'messages.general.error'
    notifier({
      message: messageToNotify,
      ...defaultErroConfig,
      ...(status && { extendedMessage }),
    })
  } else {
    notifier({ message: error, ...defaultErroConfig })
  }
}

export default manageError
