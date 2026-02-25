import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="d-flex align-items-center justify-content-center my-5">
        <Link className="btn btn-success" to="/dashboard/product">Product</Link>
        <Link className="btn btn-info ms-3" to="/dashboard/category">Category</Link>
    </div>
  )
}

export default Dashboard