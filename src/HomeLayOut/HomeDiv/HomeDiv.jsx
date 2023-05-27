
import { BiTimeFive } from 'react-icons/bi';
import {CiLocationOn } from 'react-icons/ci';
import {SlCallOut } from 'react-icons/sl';
import Container from '../../Container/Container';


const HomeDiv = () => {
    return (
        <Container>
            <div className=' grid grid-cols-3 gap-10 my-20'>

                <section className="bg-[#07332F] flex gap-5 rounded-lg p-10 items-center">

                    <div className=' text-white text-[30px] '>
                        <BiTimeFive />
                    </div>

                    <div>
                        <h5 className=' text-[25px] text-[#FFFFFF]  font-bold'>Opening Hours</h5>
                        <p className='text-[20px] text-[#FFFFFF]  font-normal'>Open 9.00 am to 5.00pm Everyday</p>
                    </div>
                </section>



                <section className="bg-[#F7A582] flex  gap-12 rounded-lg p-10 items-center">

                    <div className=' text-white text-[30px]'>
                        <CiLocationOn />
                    </div>

                    <div>
                        <h5 className=' text-[25px] text-[#FFFFFF]  font-bold'>Our Locations</h5>
                        <p className='text-[20px] text-[#FFFFFF]  font-normal'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                        
                    </div>
                </section>


                <section className="bg-[#07332F] flex gap-12 rounded-lg p-10 items-center">

                    <div className=' text-white text-[30px]'>
                        <SlCallOut />
                    </div>

                    <div>
                        <h5 className=' text-[25px] text-[#FFFFFF]  font-bold'>Contact Us</h5>
                        <p className='text-[20px] text-[#FFFFFF]  font-normal'>+88 01750 00 00 00 </p>
                        <p className='text-[20px] text-[#FFFFFF]  font-normal'>+88 01750 00 00 00</p>
                    </div>
                </section>










            </div>
        </Container>
    );
};

export default HomeDiv;