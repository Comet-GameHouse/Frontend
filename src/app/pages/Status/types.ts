import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ServiceStatus {
  id: string;
  name: string;
  description: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  lastUpdated: string;
  responseTime?: number;
  uptime: string;
  icon: IconProp;
  color: string;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  startTime: string;
  endTime?: string;
  updates: IncidentUpdate[];
}

export interface IncidentUpdate {
  timestamp: string;
  status: string;
  message: string;
}

export interface SystemMetric {
  icon: IconProp;
  label: string;
  value: string;
  color: string;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}

export interface DailyStatus {
  date: string;
  overall: 'operational' | 'degraded' | 'outage';
  uptime: number;
  incidents: number;
  responseTime: number;
  timeline: HourlyStatus[];
}

export interface HourlyStatus {
  hour: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  incidents: number;
}