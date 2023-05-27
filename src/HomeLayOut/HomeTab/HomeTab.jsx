import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import teeth from '../../assets/teeth/benefits-of-dental-braces-e1603972314113.jpeg'
import Container from '../../Container/Container';

const HomeTab = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
     <Container>
           <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab><span className=' text-[#3B3A3A] text-[18px] font-bold'>Cavity Protection</span></Tab>
                <Tab><span className=' text-[#3B3A3A] text-[18px] font-bold'>Cosmetic Dentisty</span></Tab>
                <Tab><span className=' text-[#3B3A3A] text-[18px] font-bold'>Oral Surgery</span></Tab>
            </TabList>


            <TabPanel>
                <div className="card w-full bg-base-100 shadow-xl my-20 px-10 py-10">
                    <figure><img src={teeth} alt="Shoes" /></figure>
                    <div className="card-body p-0 space-y-5">
                        <h2 className="card-title text-[30px] font-[700] text-[#0A0808] my-5">Electro  Gastrology Therapy</h2>

                        <p className='text-[16px] font-[400] text-[#3B3A3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                        <p className='text-[16px] font-[400] text-[#3B3A3A]'> Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-outline btn-error">More Details</button>
                        </div>
                    </div>
                </div>
            </TabPanel>



            <TabPanel>
                <div className="card w-full bg-base-100 shadow-xl my-20 px-10 py-10">
                    <figure><img src={teeth} alt="Shoes" /></figure>
                    <div className="card-body p-0 space-y-5">
                        <h2 className="card-title text-[30px] font-[700] text-[#0A0808] my-5">Electro  Gastrology Therapy</h2>

                        <p className='text-[16px] font-[400] text-[#3B3A3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                        <p className='text-[16px] font-[400] text-[#3B3A3A]'> Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-outline btn-error">More Details</button>
                        </div>
                    </div>
                </div>
            </TabPanel>





            <TabPanel>
                <div className="card w-full bg-base-100 shadow-xl my-20 px-10 py-10">
                    <figure><img src={teeth} alt="Shoes" /></figure>
                    <div className="card-body p-0 space-y-5">
                        <h2 className="card-title text-[30px] font-[700] text-[#0A0808] my-5">Electro  Gastrology Therapy</h2>

                        <p className='text-[16px] font-[400] text-[#3B3A3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                        <p className='text-[16px] font-[400] text-[#3B3A3A]'> Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-outline btn-error">More Details</button>
                        </div>
                    </div>
                </div>
            </TabPanel>





       


        </Tabs>
     </Container>

    );
};

export default HomeTab;