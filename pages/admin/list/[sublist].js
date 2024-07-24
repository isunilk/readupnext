import { useEffect, useRef, useState } from "react";
import { EditBook } from "../../../components/admin/list/Sublist/EditBook";
import { MoveBook } from "../../../components/admin/list/Sublist/MoveBook";
import { MoveSublist } from "../../../components/admin/list/Sublist/MoveSublist";
import Header1 from "../../../components/header/Header1";
import { AddBook } from "../../../components/admin/list/Sublist/AddBook";
import Link from "next/link";

const Sublist = ({ data }) => {
  const [books, setBooks] = useState(data.books);
  const [editableBook, setEditableBook] = useState();
  const [sublistDetails, setSublistDetails] = useState(data.sublistArr);
  const [moveSublist, setMoveSublist] = useState();
  const [addBook, setAddBooks] = useState();

  const handleSublistInputs = (e) => {
    const { name, value } = e.target;
    let newArr = sublistDetails.imgArr;
    if (name === "1" || name === "2" || name === "3") {
      newArr[Number(name) - 1] = value;

      setSublistDetails({
        ...sublistDetails,
        imgArr: newArr,
      });
    } else {
      setSublistDetails({
        ...sublistDetails,
        [name]: value.length > 0 ? value : null,
      });
    }
  };

  const addQS = (e) => {
    e.preventDefault();
    // let quesArr = document.querySelectorAll("input.question")
    // let quesLast = quesArr ? quesArr[quesArr.length - 1].name : null
    // let quesNo = quesLast ? Number(quesLast.substring(1)) : 0
    let qlable = document.createElement("label");
    qlable.setAttribute("class", "d-block my-2");
    qlable.textContent = `Question`;
    let qInput = document.createElement("input");
    qInput.setAttribute("class", "py-1 px-2 w-100 question");
    // qInput.setAttribute("name", `q${quesNo + 1}`)
    let alable = document.createElement("label");
    alable.setAttribute("class", "d-block my-2");
    alable.textContent = `Answer`;
    let aInput = document.createElement("input");
    aInput.setAttribute("class", "py-1 px-2 w-100 answer");
    // aInput.setAttribute("name", `a${quesNo + 1}`)

    e.target.before(qlable, qInput, alable, aInput);
  };

  const question_answer = {};
  const handleQS = (qArr, aArr) => {
    let countQues = 1;
    for (var i = 0; i < qArr.length; i++) {
      let qvalue = qArr[i].value;
      let avalue = aArr[i].value;

      if (qvalue.length > 0 && avalue.length > 0) {
        question_answer[countQues] = {
          [`q${countQues}`]: qvalue,
          [`a${countQues}`]: avalue,
        };
        countQues++;
      }
    }

    return question_answer;
  };
  const updateSave = async (id, data, category_name) => {
    try {
      let res = await fetch("/api/admin/list/sublist", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          data,
          opration: "update",
          category_name,
        }),
      });
      res = await res.json();
      alert(res.message);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const updateSublist = (e) => {
    e.preventDefault();
    let qArr = document.querySelectorAll("input.question");
    let aArr = document.querySelectorAll("input.answer");
    let qsObj = handleQS(qArr, aArr);

    let { Best_Book_List, category, metaDescription, count, imgArr } =
      sublistDetails;
    if ((Best_Book_List, metaDescription)) {
      var newStr = Best_Book_List.replace("Best ", "");
      var nextStr = newStr.replace(" Books", "");
      let category_name =
        nextStr !== books[0].category_name
          ? { oldCategory: books[0].category_name, newCategory: nextStr }
          : null;

      let newObj = {
        Best_Book_List,
        category,
        metaDescription,
        count,
        imgArr,
        questions_answers: qsObj,
      };
      let conf = confirm(
        `You want to update "${data.sublistArr.Best_Book_List}"`
      );
      if (conf) {
        updateSave(data.sublistArr._id, newObj, category_name);
      }
    }
  };

  const deleteBook = async (id, sublistId) => {
    try {
      let conf = confirm("You want to delete This Book");
      if (!conf) return;
      let res = await fetch("/api/admin/list/listBooks", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          sublistId,
        }),
      });
      res = await res.json();
      alert(res.message);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header1 />
      <div
        className="position-fixed popup-form-div top-0 start-0 w-100 h-100 justify-content-center align-items-center"
        style={{ display: moveSublist ? "flex" : "none" }}
      >
        <button
          className="btn position-absolute top-0 end-0 me-5 mt-5"
          onClick={() => {
            setMoveSublist(null);
          }}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <MoveSublist listDetails={moveSublist} />
      </div>
      {/* <div className="position-fixed popup-form-div top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <button className="btn position-absolute top-0 end-0 me-5 mt-5"><i className="bi bi-x-lg"></i></button>
        <MoveBook/>
      </div> */}
      <div
        className="position-fixed popup-form-div top-0 start-0 w-100 h-100 justify-content-center align-items-center"
        style={{ display: addBook ? "flex" : "none" }}
      >
        <button
          className="btn position-absolute top-0 end-0 me-5 mt-5"
          onClick={() => {
            setAddBooks(null);
          }}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="overflow-auto h-100 col-lg-7">
          {addBook ? <AddBook listName={addBook} /> : null}
        </div>
      </div>
      <div
        className="position-fixed popup-form-div top-0 start-0 w-100 h-100 justify-content-center align-items-center"
        style={{ display: editableBook ? "flex" : "none" }}
      >
        <button
          className="btn position-absolute top-0 end-0 me-5 mt-5"
          onClick={() => {
            setEditableBook(null);
          }}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="overflow-auto h-100 col-lg-7">
          {editableBook ? (
            <EditBook book={editableBook} listId={sublistDetails._id} />
          ) : null}
        </div>
      </div>
      <div className="container sublist pt-100">
        <Link href="/admin/list" role="button" className="btn addBtn">
          <i class="bi bi-arrow-left"></i> Back
        </Link>
        <h1 className="fs-2 fw-bold text-center">Manage Sublist Content</h1>
        <div className="row mt-30">
          <div className="sublist-detail col-lg-5">
            <h3>Edit Sublist</h3>
            <button
              className="btn addBtn tooltips-btn"
              style={{ float: "right" }}
              onClick={() => setMoveSublist(sublistDetails)}
            >
              Move
              <span className="tooltips">
                Move Sub-list to another List
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </button>
            {sublistDetails ? (
              <form action="" className="my-3">
                <label htmlFor="" className="d-block mb-2 ">
                  Sub-List Name*
                </label>
                <input
                  type="text"
                  className="py-1 px-2 w-100 text-secondary"
                  name="Best_Book_List"
                  value={sublistDetails.Best_Book_List}
                  placeholder="Best Tech Books"
                  required
                  onChange={handleSublistInputs}
                />
                <label htmlFor="" className="d-block my-2 ">
                  Parent List Name*
                </label>
                <input
                  type="text"
                  className="py-1 px-2 w-100"
                  readOnly
                  value={sublistDetails.category}
                />
                <label htmlFor="" className="d-block my-2 ">
                  No. of Books
                </label>
                <input
                  type="text"
                  className="py-1 px-2 w-100 text-secondary"
                  readOnly
                  value={sublistDetails.count}
                />
                <div>
                  <label
                    htmlFor=""
                    className="d-block my-2 d-flex align-items-center gap-2"
                  >
                    <img src={sublistDetails.imgArr[0]} alt="" />
                    First Image
                  </label>
                  <input
                    type="text"
                    className="py-1 mb-3 px-2 w-100 text-secondary"
                    name="1"
                    placeholder="https://"
                    defaultValue={sublistDetails.imgArr[0]}
                    onChange={handleSublistInputs}
                  />
                  <label
                    htmlFor=""
                    className="d-block my-2 d-flex align-items-center gap-2"
                  >
                    <img src={sublistDetails.imgArr[1]} alt="" />
                    Middle Image
                  </label>
                  <input
                    type="text"
                    className="py-1 mb-4 px-2 w-100  text-secondary"
                    name="2"
                    placeholder="https://"
                    defaultValue={sublistDetails.imgArr[1]}
                    onChange={handleSublistInputs}
                  />
                  <label
                    htmlFor=""
                    className="d-block my-2 d-flex align-items-center gap-2"
                  >
                    <img src={sublistDetails.imgArr[2]} alt="" />
                    Last Image
                  </label>
                  <input
                    type="text"
                    className="py-1 mb-4 px-2 w-100  text-secondary"
                    name="3"
                    placeholder="https://"
                    defaultValue={sublistDetails.imgArr[2]}
                    onChange={handleSublistInputs}
                  />
                </div>
                <label htmlFor="" className="d-block my-2">
                  MetaDescription*
                </label>
                <textarea
                  id=""
                  name="metaDescription"
                  value={sublistDetails.metaDescription}
                  onChange={handleSublistInputs}
                  className="w-100 p-1 text-secondary"
                  cols="30"
                  rows="4"
                ></textarea>
                <h5>Add Question/Answer:</h5>
                <div>
                  {sublistDetails.questions_answers
                    ? Object.keys(sublistDetails.questions_answers).map(
                      (key, index) => (
                        <>
                          <label htmlFor="" className="d-block my-2">
                            Question {index + 1}:
                          </label>
                          <input
                            type="text"
                            name={`q${index + 1}`}
                            className="py-1 px-2 w-100 question text-secondary"
                            defaultValue={
                              sublistDetails.questions_answers[key][
                              `q${index + 1}`
                              ]
                            }
                          />
                          <label htmlFor="" className="d-block my-2">
                            Answer {index + 1}
                          </label>
                          <input
                            type="text"
                            name={`a${index + 1}`}
                            className="py-1 px-2 w-100 answer text-secondary"
                            defaultValue={
                              sublistDetails.questions_answers[key][
                              `a${index + 1}`
                              ]
                            }
                          />
                        </>
                      )
                    )
                    : null}
                  <button className="btn addBtn mt-2" onClick={addQS}>
                    Add
                  </button>
                </div>

                <div className="mt-4 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn submit-btn"
                    onClick={updateSublist}
                  >
                    Update
                  </button>
                </div>
              </form>
            ) : null}
          </div>
          <div className="books col-lg-7">
            <h3 className="mb-3">Manage books</h3>
            <div className="my-2 d-flex justify-content-end">
              <button
                className="btn addBtn tooltips-btn"
                onClick={() => {
                  setAddBooks({
                    sublistId: sublistDetails._id,
                    category: sublistDetails.Best_Book_List.replace(
                      "Best ",
                      ""
                    ).replace(" Books", ""),
                  });
                }}
              >
                Add
                <span className="tooltips">
                  Add new Book
                  <i className="bi bi-caret-down-fill"></i>
                </span>
              </button>
            </div>

            {books ? (
              books.map((item, index) => (
                <div
                  key={index}
                  className="d-flex gap-2 py-1 justify-content-between book-details align-items-center"
                >
                  <div className="d-flex gap-2 col-lg-5">
                    <img src={item.BookimageUrl} alt="" />
                    <div>
                      <p className="fw-500 mb-0" title={item.title}>
                        {item.title.length > 20
                          ? item.title.substring(0, 20) + "..."
                          : item.title}
                      </p>
                      <span title={item.subtitle} style={{ fontSize: "14px" }}>
                        {item.subtitle.length > 25
                          ? item.subtitle.substring(0, 25) + "..."
                          : item.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="mb-0 col-lg-4">
                    <span className="fw-500">Author:</span> {item.authorName}
                  </p>
                  <div>
                    <button
                      className="btn fs-5 tooltips-btn"
                      onClick={() => {
                        setEditableBook(item);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                      <span className="tooltips">
                        Edit Book Details
                        <i className="bi bi-caret-down-fill"></i>
                      </span>
                    </button>
                    <button className="btn fs-5 tooltips-btn">
                      <i className="bi bi-shuffle"></i>
                      <span className="tooltips">
                        Move Book here to another Sub-list
                        <i className="bi bi-caret-down-fill"></i>
                      </span>
                    </button>
                    <button
                      className="btn fs-5 tooltips-btn pt-0"
                      onClick={() => {
                        deleteBook(item._id, sublistDetails._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                      <span className="tooltips">
                        Delete Book
                        <i className="bi bi-caret-down-fill"></i>
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h5 className="fs-5 text-center tex-warning">Loading...</h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { sublist } = context.query;
  const { art_ad } = context.req.cookies;
  let res = await fetch(
    `${process.env.NEXT_API_URL}/api/admin/list/sublist?list=${sublist}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${art_ad}`,
      },
    }
  );

  if (!res.ok)
    return {
      redirect: {
        destination: "/adminlogin",
        permanent: false,
      },
    };

  let data = await res.json();

  // Pass data to the page via props

  return { props: { data } };
}

export default Sublist;
