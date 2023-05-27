import Container from '../../Container/Container';
import doc from '../../assets/oue service/depositphotos_80760248-stock-photo-cheerful-doctor-woman.jpg'
import HomeTab from '../HomeTab/HomeTab';

const HomeOurServices = () => {
    return (
        <div className='grid grid-cols-2 mt-40  '>
            <section>
                <img className='w-full  ' src={doc} alt="" />
            </section>

            <section>

                <Container>
                    <div className=' mb-10'>
                        <h3 className=' text-[30px] font-[700] text-[#0A0808] my-5'>Our Services</h3>
                        <p className='text-[16px] font-normal text-[#3B3A3A]'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </Container>

                {/* home tab */}
                <HomeTab></HomeTab>

            </section>
        

           
        </div >
    );
};

export default HomeOurServices; 