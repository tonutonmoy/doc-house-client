import Banner from "../Banner/Banner";
import HomeDiv from "../HomeDiv/HomeDiv";
import HomeOurServices from "../HomeOurServices/HomeOurServices";
import HomeReview from "../HomeReview/HomeReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeOurServices></HomeOurServices>

            <HomeDiv></HomeDiv>

            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;