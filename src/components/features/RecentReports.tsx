import React from 'react';
import { Card } from '../ui/Card';

interface RecentReport {
  id?: string;
  type: string;
  time: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  location?: string;
}

interface RecentReportsProps {
  reports?: RecentReport[];
  onReportClick?: (report: RecentReport) => void;
  showViewAll?: boolean;
  className?: string;
}

export const RecentReports: React.FC<RecentReportsProps> = ({
  reports = [
    { id: '1', type: 'Phone Scam', time: '2 hours ago', severity: 'high' },
    { id: '2', type: 'Email Fraud', time: '5 hours ago', severity: 'medium' },
    { id: '3', type: 'Identity Theft', time: '1 day ago', severity: 'critical' },
    { id: '4', type: 'Investment Scam', time: '2 days ago', severity: 'high' },
    { id: '5', type: 'Tech Support Scam', time: '3 days ago', severity: 'medium' },
    { id: '6', type: 'Romance Scam', time: '1 week ago', severity: 'high' },
  ],
  onReportClick,
  showViewAll = true,
  className = '',
}) => {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-red-100 rounded mr-2 flex items-center justify-center">
            <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Recent Reports</h3>
        </div>
        
        {showViewAll && (
          <button className="text-sm text-red-600 hover:text-red-700 font-medium">
            View All
          </button>
        )}
      </div>
      
      <div className="space-y-3">
        {reports.map((report, index) => (
          <RecentReportItem
            key={report.id || index}
            report={report}
            onClick={onReportClick}
          />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Latest scammer reports from our community</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Live updates</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Individual Recent Report Item
interface RecentReportItemProps {
  report: RecentReport;
  onClick?: (report: RecentReport) => void;
}

const RecentReportItem: React.FC<RecentReportItemProps> = ({
  report,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(report);
    }
  };

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500';
      case 'high':
        return 'bg-orange-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-slate-400';
    }
  };

  const content = (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3 flex-1">
        {report.severity && (
          <div 
            className={`w-2 h-2 rounded-full ${getSeverityColor(report.severity)}`}
            title={`Severity: ${report.severity}`}
          />
        )}
        <div className="flex-1">
          <span className="text-slate-700 font-medium">{report.type}</span>
          {report.location && (
            <span className="text-slate-500 text-sm ml-2">• {report.location}</span>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-slate-500">{report.time}</span>
        {onClick && (
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={handleClick}
        className="w-full hover:bg-slate-50 rounded-lg transition-colors group"
      >
        {content}
      </button>
    );
  }

  return <div>{content}</div>;
};