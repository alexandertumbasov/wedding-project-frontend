import BOne from '@assets/bottom-flowers/one';
import BTwo from '@assets/bottom-flowers/two';
import BThree from '@assets/bottom-flowers/three';
import BFour from '@assets/bottom-flowers/four';
import BFive from '@assets/bottom-flowers/five';
import TOne from '@assets/top-flowers/one';
import TTwo from '@assets/top-flowers/two';
import TThree from '@assets/top-flowers/three';
import TFour from '@assets/top-flowers/four';
import TFive from '@assets/top-flowers/five';
import TSix from '@assets/top-flowers/six';
import LOne from '@assets/left-flower';
import ROne from '@assets/right-flower';
import { FlowersConfig } from '../../models/flowers-config.interface';

const flowersConfig: FlowersConfig[] = [
  {
    name: 'bottom',
    data: [BOne, BTwo, BThree, BFour, BFive],
    stylePoint: 'left',
  },
  {
    name: 'top',
    data: [TOne, TTwo, TThree, TFour, TFive, TSix],
    stylePoint: 'left',
  },
  {
    name: 'left',
    data: [LOne],
    stylePoint: 'bottom',
    actualLength: 2,
  },
  {
    name: 'right',
    data: [ROne],
    stylePoint: 'bottom',
    actualLength: 2,
  },
];

export default flowersConfig;
