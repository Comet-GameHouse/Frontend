import { useNotification } from '@contexts/NotificationContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NOTIFICATION_ICONS, NOTIFICATION_ICON_COLORS } from './data'
import { NOTIFICATION_STYLES } from '@contexts/NotificationContext/data'

export const NotificationContainer = () => {
  const { notifications, hideNotification } = useNotification()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg border-l-4 min-w-80 max-w-md flex items-start gap-3 ${
            NOTIFICATION_STYLES[notification.type]
          }`}
        >
          <FontAwesomeIcon 
            icon={NOTIFICATION_ICONS[notification.type]} 
            className={`mt-0.5 ${NOTIFICATION_ICON_COLORS[notification.type]}`}
          />
          <div className="flex-1">
            <p className="font-medium text-sm">{notification.message}</p>
          </div>
          <button
            onClick={() => hideNotification(notification.id)}
            className="text-gray-500 hover:text-gray-700 ml-2"
          >
            <FontAwesomeIcon icon={NOTIFICATION_ICONS.close} />
          </button>
        </div>
      ))}
    </div>
  )
}