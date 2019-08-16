import React from 'react'
import Alert from '../common/Alert'

const Error = ({error}) => {
  const standard = <p>Sorry, we were unable to complete your request. We have been notified of the issue and are working to resolve it.</p>
  const rateLimited = <p>Sorry, we are currently serving a high volume of requests. Please try again later.</p>
  return (
    <div className="Error">
      <Alert type="error">
        {+error.status === 429 ? rateLimited : standard}
      </Alert>
    </div>
  )
}

export default Error
