import Container from "../../Container/Container";

import img1 from '../../assets/review/pexels-man-1516680.jpeg'
import img2 from '../../assets/review/pexels-man-1656684.jpeg'
import img3 from '../../assets/review/pexels-man-2379004.jpeg'
import img4 from '../../assets/review/pexels-man-718261.jpeg'
import img5 from '../../assets/review/pexels-man-9789893.jpeg'

import { BsUnlock } from 'react-icons/bs';





// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const ReviewSlider = () => {
    return (
        <Container>


          <div className="my-40">
          <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>


                    <div className="space-y-5 p-10 border shadow-2xl mx-5">
                        


                            <div className="flex  justify-between">




                                <section className=" flex gap-5 items-center">

                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={img1} />
                                        </div>
                                    </div>
                                    <div className=" space-y-1">
                                        <h5 className=" text-[#3B3A3A] text-[20px] font-bold">Awlad Hossain</h5>
                                        <p className="text-[#6C6B6B] text-[16px]  font-normal">Product Designer</p>
                                    </div>

                                </section>



                                <section className=" flex gap-5 justify-end  items-center">

                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>
                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>

                                </section>

                            </div>


                            <p className="text-[#6C6B6B] text-[18px]  font-normal">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>


                    
                    </div>

                </SwiperSlide>



                <SwiperSlide>


                    <div className="space-y-5 p-10 border shadow-2xl mx-5">
                        


                            <div className="flex  justify-between">




                                <section className=" flex gap-5 items-center">

                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={img2} />
                                        </div>
                                    </div>
                                    <div className=" space-y-1">
                                        <h5 className=" text-[#3B3A3A] text-[20px] font-bold">Awlad Hossain</h5>
                                        <p className="text-[#6C6B6B] text-[16px]  font-normal">Product Designer</p>
                                    </div>

                                </section>



                                <section className=" flex gap-5 justify-end  items-center">

                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>
                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>

                                </section>

                            </div>


                            <p className="text-[#6C6B6B] text-[18px]  font-normal">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>


                    
                    </div>

                </SwiperSlide>
                <SwiperSlide>


                    <div className="space-y-5 p-10 border shadow-2xl mx-5">
                        


                            <div className="flex  justify-between">




                                <section className=" flex gap-5 items-center">

                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={img3} />
                                        </div>
                                    </div>
                                    <div className=" space-y-1">
                                        <h5 className=" text-[#3B3A3A] text-[20px] font-bold">Awlad Hossain</h5>
                                        <p className="text-[#6C6B6B] text-[16px]  font-normal">Product Designer</p>
                                    </div>

                                </section>



                                <section className=" flex gap-5 justify-end  items-center">

                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>
                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>

                                </section>

                            </div>


                            <p className="text-[#6C6B6B] text-[18px]  font-normal">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>


                    
                    </div>

                </SwiperSlide>


                <SwiperSlide>


                    <div className="space-y-5 p-10 border shadow-2xl mx-5">
                        


                            <div className="flex  justify-between">




                                <section className=" flex gap-5 items-center">

                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={img4} />
                                        </div>
                                    </div>
                                    <div className=" space-y-1">
                                        <h5 className=" text-[#3B3A3A] text-[20px] font-bold">Awlad Hossain</h5>
                                        <p className="text-[#6C6B6B] text-[16px]  font-normal">Product Designer</p>
                                    </div>

                                </section>



                                <section className=" flex gap-5 justify-end  items-center">

                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>
                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>

                                </section>

                            </div>


                            <p className="text-[#6C6B6B] text-[18px]  font-normal">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>


                    
                    </div>

                </SwiperSlide>


                <SwiperSlide>


                    <div className="space-y-5 p-10 border shadow-2xl mx-5">
                        


                            <div className="flex  justify-between">




                                <section className=" flex gap-5 items-center">

                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={img5} />
                                        </div>
                                    </div>
                                    <div className=" space-y-1">
                                        <h5 className=" text-[#3B3A3A] text-[20px] font-bold">Awlad Hossain</h5>
                                        <p className="text-[#6C6B6B] text-[16px]  font-normal">Product Designer</p>
                                    </div>

                                </section>



                                <section className=" flex gap-5 justify-end  items-center">

                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>
                                    <span className="text-[#F7A582] text-[30px]"><BsUnlock /></span>

                                </section>

                            </div>


                            <p className="text-[#6C6B6B] text-[18px]  font-normal">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>


                    
                    </div>

                </SwiperSlide>

            </Swiper>

          </div>

        </Container>
    );
};

export default ReviewSlider;