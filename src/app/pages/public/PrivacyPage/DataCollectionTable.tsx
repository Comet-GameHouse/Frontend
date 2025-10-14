import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataCollectionItems } from './data';

export const DataCollectionTable = () => {
  return (
    <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
      <h3 className="text-white font-orbitron text-xl font-bold mb-6 flex items-center gap-2">
        <FontAwesomeIcon icon="table" className="text-blue-400" />
        Data Collection Summary
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600/50">
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                Data Category
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                Purpose
              </th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                Examples
              </th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">
                Required
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {dataCollectionItems.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-700/20 transition-colors"
                data-aos="fade-up"
                data-aos-delay={200 + (index + 1) * 50}
              >
                <td className="py-3 px-4 text-white font-medium">
                  {item.category}
                </td>
                <td className="py-3 px-4 text-gray-300">{item.purpose}</td>
                <td className="py-3 px-4 text-gray-400">
                  {item.examples.join(', ')}
                </td>
                <td className="py-3 px-4 text-center">
                  {item.required ? (
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium">
                      Required
                    </span>
                  ) : (
                    <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded text-xs font-medium">
                      Optional
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
        <FontAwesomeIcon icon="info-circle" />
        <span>
          This table provides a quick overview of our data collection practices
        </span>
      </div>
    </div>
  );
};
