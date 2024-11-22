import { useEffect, useState } from 'react'
import { Alert } from 'flowbite-react'

const AlertDismissable = ({
  show,
  onDismiss,
  title,
  message,
  color,
  timeout
}) => {
  const [visible, setVisible] = useState(show)
  const [fadingOut, setFadingOut] = useState(false) // Controls the fading effect

  // Effect to handle auto-dismissal after 10 seconds
  useEffect(() => {
    let autoDismissTimeout
    let fadeOutTimeout
    let autoDismissal = timeout || 3000

    if (show) {
      setVisible(true) // Show the alert
      setFadingOut(false) // Make sure it's not fading out initially

      // Set auto-dismissal after 10 seconds
      autoDismissTimeout = setTimeout(() => {
        setFadingOut(true) // Start fade-out

        // Remove the alert after the fade-out effect
        fadeOutTimeout = setTimeout(() => {
          setVisible(false) // Remove from DOM after fade-out
          onDismiss() // Notify parent component
        }, 300) // Match the CSS transition duration
      }, autoDismissal)
    }

    // Cleanup on unmount or when `show` changes
    return () => {
      clearTimeout(autoDismissTimeout)
      clearTimeout(fadeOutTimeout)
    }
  }, [show, onDismiss, timeout])

  const handleManualDismiss = () => {
    setFadingOut(true) // Trigger fade-out when manually dismissed

    setTimeout(() => {
      setVisible(false) // Remove alert after fade-out effect
      onDismiss() // Notify parent component
    }, 300) // Match the CSS transition duration
  }

  if (!visible) return null // Don't render if not visible

  return (
    <div
      className={`fixed z-50 top-0 left-0 right-0 text-nowrap flex justify-center transition-opacity text-center duration-300 ${
        fadingOut ? 'opacity-0' : 'opacity-100'
      }`} // Smooth fade effect
    >
      <Alert
        color={color || 'success'}
        onDismiss={handleManualDismiss} // Call manual dismiss handler
        className='w-full items-center'>
        <span>
          <span className='font-medium'>{title || 'Alert'}</span>{' '}
          {message}
        </span>
      </Alert>
    </div>
  )
}

export default AlertDismissable