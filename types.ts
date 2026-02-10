
export interface Hypothesis {
  id: number;
  title: string;
  description: string;
  keyMetric: string;
  metricValue: string;
  impact: 'High' | 'Critical' | 'Transformative';
  icon: string;
  findingDetail: string;
}

export interface PathWeight {
  from: string;
  to: string;
  weight: number;
  label: string;
}

export interface MetricData {
  name: string;
  traditional: number;
  aiEnabled: number;
}
