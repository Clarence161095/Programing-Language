import Home from 'features/home/Home';
import { atom } from 'recoil';

const DashboardContent = atom({
  key: 'dashboardContent',
  default: (<Home />)
})

export default DashboardContent;
