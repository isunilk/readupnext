import Link from "next/link";
import Header1 from "../../components/header/Header1";

const index = () => {
  return (
    <>
      <Header1 />
      <div className="container admin pt-120">
        <p className="fw-500">Welcome Back Admin</p>
        <h1 className="fs-1">Manage Web Content</h1>
        <div className="d-flex py-3 gap-3">
          <Link href="#" className="card flex-grow-1 p-3">
            <p className="text-center fw-500">Manage</p>
            <h2 className="text-center fs-2">People</h2>
          </Link>
          <Link href="#" className="card flex-grow-1 p-3">
            <p className="text-center fw-500">Manage</p>
            <h2 className="text-center fs-2">Author</h2>
          </Link>
          <Link href="/admin/list" className="card flex-grow-1 p-3">
            <p className="text-center fw-500">Manage</p>
            <h2 className="text-center fs-2">Best List</h2>
          </Link>
          <Link href="#" className="card flex-grow-1 p-3">
            <p className="text-center fw-500">Manage</p>
            <h2 className="text-center fs-2">Series</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
