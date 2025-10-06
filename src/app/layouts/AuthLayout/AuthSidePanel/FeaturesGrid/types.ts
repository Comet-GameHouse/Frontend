export interface Feature {
  icon: any;
  text: string;
  description: string;
}

export interface FeatureCardProps {
  feature: Feature;
  index: number;
}
