import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import LeftSide from "../Shared/LeftSide";
import Middle from "../Shared/Middle";
import RightSide from "../Shared/RightSide";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid- md:grid-cols-4 gap-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className="md:col-span-2">
                    <Middle></Middle>
                </div>
                <div>
                    <RightSide>
                    </RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;