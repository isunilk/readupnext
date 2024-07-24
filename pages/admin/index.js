import Link from "next/link";
import Header1 from "../../components/header/Header1";
import cookies from "next-cookies";

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

export async function getStaticProps(context) {
  const { art_ad: token } = cookies(context);

  let user = await fetch(`${process.env.NEXT_API_URL}/api/authenticat`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!user.ok) {
    return {
      redirect: {
        destination: "/adminlogin",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
      revalidate: 60, // Regenerate the page every 60 seconds
    };
  }
}

export default index;
