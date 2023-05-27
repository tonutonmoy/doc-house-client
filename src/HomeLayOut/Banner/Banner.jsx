
import Container from '../../Container/Container';
import doc1 from '../../assets/banner/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png'
import doc2 from '../../assets/banner/png-woman-doctor-transparent-woman-doctor-images-4.png'
import doc3 from '../../assets/banner/woman-doctor-png-transparent-woman-doctor-images-7.png'

const Banner = () => {
    return (

        <div className='bg-[#07332F;] '>
        <Container>
            <div className="  grid  grid-cols-2 space-x-2  pb-20  ">

<section className='mt-60 py-20'>
    <h3 className=" text-[60px] font-semibold text-[#F3F3F3]">Your Best Medical Help Center</h3>
    <p className=" mt-[20px] text-lg font-semibold text-[#F3F3F3]">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
    <button className="btn bg-[#F7A582] font-bold mt-[30px]  text-lg">Button</button>
</section>

<section className=' relative  mt-60 '>

    <div className=' w-[200px] h-[250px]  border-[10px]  bg-gray-300 absolute z-10  top-20 left-[20%] rotate-0 '  >

        <img className=' w-full h-full' src={doc1} alt="" />

    </div>


    <div className=' w-[200px] h-[250px]  border-[10px]     bg-gray-300 absolute z-20  rotate-0  
    left-[45%] bottom-[00%] '  >

        <img className=' w-full h-full' src={doc2} alt="" />

    </div>

    <div className=' w-[200px] h-[250px]  border-[10px]   bg-gray-300 absolute z-30 rotate-0    top-10 right-0 ' >

        <img className=' w-full h-full' src={doc3} alt="" />

    </div>

</section>
</div>
    </Container>

    </div>
    );
};

export default Banner;