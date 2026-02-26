import { Link } from "react-router-dom"
import { FaBoxOpen } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="d-flex align-items-center justify-content-center my-5">
        <Link className="btn pro-btn" to="/dashboard/product"><FaBoxOpen /></Link>
        <Link className="btn cat-btn ms-3" to="/dashboard/category"><BiCategory /></Link>
    </div>
  )
}

export default Dashboard