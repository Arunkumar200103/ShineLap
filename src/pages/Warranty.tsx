import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { warranties, complaints } from '../data/mockData';

interface WarrantyProps {
  darkMode: boolean;
}

const Warranty: React.FC<WarrantyProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'warranties' | 'complaints'>('warranties');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'claimed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplaintStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Assigned':
        return 'bg-blue-100 text-blue-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const renderWarranties = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warranties.map((warranty, index) => {
          const daysLeft = getDaysUntilExpiry(warranty.expiryDate);
          const isExpiringSoon = daysLeft <= 30 && daysLeft > 0;
          const isExpired = daysLeft <= 0;

          return (
            <motion.div
              key={warranty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 border-l-4 ${
                isExpired ? 'border-red-500' :
                isExpiringSoon ? 'border-yellow-500' :
                'border-green-500'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {warranty.productName}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {warranty.customerName}
                  </p>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(warranty.status)}`}>
                  {warranty.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Purchase Date:
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {new Date(warranty.purchaseDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Expiry Date:
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {new Date(warranty.expiryDate).toLocaleDateString()}
                  </span>
                </div>

                {warranty.status === 'active' && (
                  <div className={`${
                    isExpired ? 'bg-red-50 border border-red-200' :
                    isExpiringSoon ? 'bg-yellow-50 border border-yellow-200' :
                    'bg-green-50 border border-green-200'
                  } rounded-lg p-3 mt-4`}>
                    <div className="flex items-center">
                      {isExpired ? (
                        <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                      ) : isExpiringSoon ? (
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      ) : (
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      )}
                      <div>
                        <div className={`text-sm font-medium ${
                          isExpired ? 'text-red-800' :
                          isExpiringSoon ? 'text-yellow-800' :
                          'text-green-800'
                        }`}>
                          {isExpired ? 'Warranty Expired' :
                           isExpiringSoon ? `Expires in ${daysLeft} days` :
                           `${daysLeft} days remaining`}
                        </div>
                      </div>
                    </div>

                    {!isExpired && (
                      <div className="mt-2">
                        <div className={`w-full bg-gray-200 rounded-full h-2`}>
                          <div
                            className={`h-2 rounded-full ${
                              isExpiringSoon ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${Math.max((365 - Math.abs(daysLeft)) / 365 * 100, 5)}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderComplaints = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-4 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Customer
                </th>
                <th className={`px-6 py-4 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Issue Area
                </th>
                <th className={`px-6 py-4 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-4 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Technician
                </th>
                <th className={`px-6 py-4 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Created
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {complaints.map((complaint) => (
                <motion.tr
                  key={complaint.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-opacity-50 hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {complaint.customer}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      ID: {complaint.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {complaint.issueArea}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} mt-1 max-w-xs truncate`}>
                      {complaint.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplaintStatusColor(complaint.status)}`}>
                      {complaint.status === 'Pending' && <ClockIcon className="h-3 w-3 mr-1" />}
                      {complaint.status === 'Assigned' && <ExclamationTriangleIcon className="h-3 w-3 mr-1" />}
                      {complaint.status === 'Resolved' && <CheckCircleIcon className="h-3 w-3 mr-1" />}
                      {complaint.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {complaint.assignedTechnician}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {new Date(complaint.createdAt).toLocaleDateString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Warranty & Complaints
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Track your warranty status and manage service complaints
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-1 rounded-lg shadow-lg`}>
            <button
              onClick={() => setActiveTab('warranties')}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'warranties'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              Warranties ({warranties.length})
            </button>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'complaints'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
              Complaints ({complaints.length})
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'warranties' && renderWarranties()}
          {activeTab === 'complaints' && renderComplaints()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Warranty;