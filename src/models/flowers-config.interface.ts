export interface FlowersConfig {
  name: 'right' | 'left' | 'top' | 'bottom';
  stylePoint: 'bottom' | 'left';
  actualLength?: number;
  data: (() => JSX.Element)[];
}
