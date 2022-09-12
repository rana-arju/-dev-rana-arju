
const service = ({img, title}) => {
    return (
        
            <div className="card w-full md:max-w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
               
            </div>
            </div>
     
    );
};

export default service;