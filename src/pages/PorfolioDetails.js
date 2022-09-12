import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Autoplay} from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../component/Loading';

const ProjectDetails = () => {
    let {id} = useParams();
        const {isLoading,error, data: project} = useQuery('project', () => 
    fetch(`https://limitless-scrubland-86702.herokuapp.com/project/${id}`,{
        method: "GET",
        headers: {
            'content-type': "applicataion/json"
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return toast.error(error.message)
    }
  
    return (
        <div>
        <div className="card w-full md:w-1/2 mx-auto md:max-w-2/5  bg-base-100 shadow-xl m-10 relative">
            <div className='scroll-img'>
                <figure className='w-full h-screen' ><img src={project.img1} alt={project.title} /></figure></div>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="badge badge-outline">{project.tech1}</div> 
                    <div className="badge badge-outline">{project.tech2}</div>
                    <div className="badge badge-outline">{project.tech3}</div>
                        <div className="badge badge-outline">{project.tech4}</div>
                    </div>
                <div className="card-actions grid grid-cols-2 my-5">
                    <a href={project.live} target="_blank" rel="noreferrer" className="custome-btn">Live</a>
                    <a href={project.client} target="_blank" rel="noreferrer" className="custome-btn">Code</a>
                   
                </div>
            </div>
            <div>
               
            </div>
            </div> 
             <h2 className='text-center text-xl md:text-4xl capitalize font-bold my-10'>More Project <span className='cl-title'>images</span></h2>


             <div className='w-full md:w-4/5 mx-auto h-fit'>
           
             {/* Slider  */}
               <Swiper
                spaceBetween={20}
                breakpoints={{
                    640:{
                        width: 640,
                        slidesPerView: 1
                    },
                    800:{
                        width: 800,
                        slidesPerView: 2
                    }
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                grabCurso={true}
                modules={[Autoplay]}

                >
            <SwiperSlide>
              <div className="card  bg-base-100 shadow-xl mb-10 relative">
                <div className='scroll-img'>
                <figure className='w-full h-screen' ><img src={project.img1} alt={project.title} /></figure></div>
                </div>
            </SwiperSlide> 
            {
                project?.img2 && <SwiperSlide>
              <div className="card  bg-base-100 shadow-xl mb-10 relative">
                <div className='scroll-img'>
                <figure className='w-full h-screen' ><img src={project.img2} alt={project.title} /></figure></div>
               
                </div>
            </SwiperSlide>
            }
            {
              project?.img3 && <SwiperSlide>
              <div className="card  bg-base-100 shadow-xl mb-10 relative">
                <div className='scroll-img'>
                <figure className='w-full h-screen' ><img src={project.img3} alt={project.title} /></figure></div>
                </div>
            </SwiperSlide>
            }

            </Swiper>
        </div>
    </div>
    );
};

export default ProjectDetails;