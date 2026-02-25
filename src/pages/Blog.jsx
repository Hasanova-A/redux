
import dataBlog from '../data/blogData'

const Blog = () => {

    return (
        <>
        <h1 style={{marginLeft: "600px"}}>Blog</h1>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        {dataBlog.map((item) => (
                            <div>
                                <div className="mt-4" style={{ border: "none"}}>
                                    <img src={item.image} style={{width: "100%", borderRadius: "10px"}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href="#" className="btn btn-dark">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-3">
                        <h5 className='mt-3' style={{fontWeight: "bold"}}>Post Widget</h5>
                        {dataBlog.map((item) => (
                            <div className="col-12">
                                <div className="d-flex">
                                    <img src={item.image} style={{width: "120px", height: "120px", objectFit: "contain", borderRadius: "15px"}}  className="card-img-top" alt="..." />
                                    <div className="card-body mt-4 ms-2">
                                        <p className="card-title">{item.title}</p>
                                        <small className="card-text">{item.description}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog



