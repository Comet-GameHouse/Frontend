import { ROUTES } from "@app/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const QuickAccess = () => {
  const quickActions = [
    { label: 'Play Now', path: ROUTES.GAMES, icon: 'play', color: 'green' },
    { label: 'Join Tournament', path: ROUTES.TOURNAMENTS, icon: 'users', color: 'purple' },
    { label: 'Friends', path: ROUTES.FRIENDS, icon: 'user-friends', color: 'blue' },
    { label: 'Shop', path: ROUTES.SHOP, icon: 'shopping-bag', color: 'yellow' },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-gray-700">
        <div className="space-y-2">
          {quickActions.map((action) => (
            <Link
              key={action.path}
              to={action.path}
              className={`w-12 h-12 flex items-center justify-center rounded-xl bg-${action.color}-500/20 border border-${action.color}-500/30 text-${action.color}-300 hover:scale-110 hover:bg-${action.color}-500/30 transition-all duration-300 group relative`}
            >
              <FontAwesomeIcon icon={action.icon} className="w-5 h-5" />
              <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};