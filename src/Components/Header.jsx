import Drawer from "./Drawer";


const Header = () => {
    return (
        <div className="w-full h-12 flex justify-between items-center px-4 text-[#121417] border-b-1 border-solid border-[#E5E8EB] font-primary">
            <div><p className="font-bold text-xl text-[#111518]">Dr. Amelia Carter</p></div>
            <div><Drawer/></div>
        </div>
    );
};

export default Header;