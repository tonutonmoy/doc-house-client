import { Link } from 'react-router-dom';
import img from '../assets/login/medicine-pharmacy-hospital-set-of-medicines-with-labels-the-concept-of-medical-subjects-illustration-in-cartoon-style-vector.jpg'

import { useForm } from "react-hook-form";


const SignUp = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };



    return (
        <div className=' bg-white min-h-screen '>
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content min-h-screen  grid md:grid-cols-2  ">
                    <div className="text-center lg:text-left min-h-screen  w-full">
                        <img className='w-full min-h-screen ' src={img} alt="" />
                    </div>




                    <div className="card flex-shrink-0 w-full md:w-10/12 mx-auto shadow-2xl bg-base-100   ">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body  md:px-14 ">

                            <div>
                                <h2 className=' text-[#0A0808] text-[20px] md:text-[30px] font-bold my-14 text-center'>Sign Up to Doc House</h2>
                            </div>


                            <div className="form-control">


                                <label className="label">
                                    <span className="label-text  text-[#0A0808] font-semibold text-[20px]">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered border-0 bg-[#F3F3F3] py-8 my-2" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#0A0808] font-semibold text-[20px]">User Name</span>
                                </label>
                                <input type="text"{...register("userName", { required: true })} placeholder="user name" className="input input-bordered border-0 bg-[#F3F3F3] py-8 my-2" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#0A0808] font-semibold text-[20px]">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered border-0 bg-[#F3F3F3] py-8 my-2" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#0A0808] font-semibold text-[20px]">Password</span>
                                </label>
                                <input type="text" {...register("password", { required: "Password error", maxLength: 20, minLength: 6 })} placeholder="password" className="input input-bordered border-0 bg-[#F3F3F3] py-8 my-2" />


                                {errors.password && <span >{errors.password?.message}</span>}
                                {errors.password?.type === 'maxLength' && <span >password under 20 digit</span>}
                                {errors.password?.type === 'minLength' && <span >password minimum 6 digit</span>}

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn  bg-[#F7A582] border-0 py-5 md:py-8 font-bold text-[15px]">Login</button>
                            </div>

                            <div>
                                <p className='  text-xs md:text-lg text-[#6C6B6B] font-normal text-center my-5'>Already registered? Go to <Link className='text-[#F7A582]' to='/signIn'>SIGN IN</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;