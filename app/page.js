import Header from '@components/Header';
import SidePanel from '@components/SidePanel';
import TopCards from '@components/TopCards';
import Overview from './overview/page';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="bg-[#0F1014] text-white p-4 w-1/6">
        <SidePanel />
      </div>
      <div className="flex-grow bg-[#121316] text-white p-4">
        <Header />
        
        <div className="p-4">
          <div>
            <Overview />
          </div>
          <div className="flex space-x-4 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}