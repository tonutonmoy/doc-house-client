import Container from "../../Container/Container";
import ReviewSlider from "../ReviewSlider/ReviewSlider";



const HomeReview = () => {
    return (
        <div>
            <Container>
            <div className=" w-10/12 mx-auto text-center my-40">
            <h2 className="text-[30px] font-[700] text-[#0A0808] my-5">What Our Patients Says</h2>
               <p className="text-[16px] font-normal text-[#3B3A3A]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            </p>
               <p className="text-[16px] font-normal text-[#3B3A3A]">   quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            </div>


             
            </Container>

               {/* review slider */}
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default HomeReview;