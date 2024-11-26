import Header from '@components/Header';
import SidePanel from '@components/SidePanel';
import TopCards from '@components/TopCards';
// Remove Overview import if it's not needed here

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="bg-[#0F1014] text-white p-4 w-1/6">
        <SidePanel />
      </div>
      <div className="flex-grow bg-[#121316] text-white p-4">
        <Header />
        <div className="p-4">
          {/* Add content specific to Home page */}
          {/* <TopCards /> */}
          <div className="flex space-x-4 mt-4">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}
