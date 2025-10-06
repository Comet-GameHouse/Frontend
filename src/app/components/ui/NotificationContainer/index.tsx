import { useNotification } from '@contexts/NotificationContext';
import { Notification } from './Notification';
import { NOTIFICATION_POSITION_STYLES } from './data';

export const NotificationContainer = () => {
  const { notifications, hideNotification } = useNotification();

  const positions = [
    'top-right',
    'top-left',
    'top-center',
    'bottom-right',
    'bottom-left',
    'bottom-center',
  ] as const;

  return (
    <>
      {positions.map((position) => {
        const positionNotifications = notifications.filter(
          (n) => n.position === position
        );

        if (positionNotifications.length === 0) return null;

        return (
          <div
            key={position}
            className={`
              fixed z-50 pointer-events-none
              ${NOTIFICATION_POSITION_STYLES[position]}
              flex flex-col space-y-3
              ${position.includes('bottom') ? 'flex-col-reverse space-y-reverse' : ''}
            `}
          >
            {positionNotifications.map((notification) => (
              <div key={notification.id} className="pointer-events-auto">
                <Notification
                  id={notification.id}
                  message={notification.message}
                  type={notification.type}
                  duration={notification.duration}
                  position={notification.position}
                  onClose={hideNotification}
                />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export type { NotificationType, NotificationPosition } from './types';
