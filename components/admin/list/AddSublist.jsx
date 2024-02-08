import { useRef, useState } from "react"
import Header1 from "../../header/Header1"
import Link from "next/link"

export const AddSublist = ({ list }) => {
    const [next, setNext] = useState(2)
    let flage = useRef(true)
    const [searchData, setSearchData] = useState()
    const quesNo = useRef(1)
    const [sublist, setSublist] = useState({
        Best_Book_List: "",
        category: list,
        metaDescription: "",
        count: 0,
        imgArr: ["https://www.readupnext.com/images/assets/nullBook.PNG", "https://www.readupnext.com/images/assets/nullBook.PNG", "https://www.readupnext.com/images/assets/nullBook.PNG"],
        questions_answers: {}
    })
    const [book, setBook] = useState({
        title: null,
        subtitle: null,
        authorName: null,
        category_name: sublist.Best_Book_List,
        rating: null,
        reviewCount: null,
        slug: null,
        yearPublished: null,
        buyLink: null,
        BookimageUrl: null,
        articles: [],
        expertRecommenders: []
    })

    const heandleList = (e) => {
        const { value, name } = e.target;
        if (name === "Best_Book_List") {
            setSublist({
                ...sublist,
                Best_Book_List: `Best ${value} Books`
            })
            setBook({
                ...book,
                category_name: value
            })
        } else {
            setSublist({
                ...sublist,
                [name]: value
            })
        }
    }

    const question_answer = {

    }
    const handleQS = (qArr, aArr) => {
        let countQues = 1
        for (var i = 0; i < qArr.length; i++) {
            let qvalue = qArr[i].value;
            let avalue = aArr[i].value;

            if (qvalue.length > 0 && avalue.length > 0) {
                question_answer[countQues] = {
                    [`q${countQues}`]: qvalue,
                    [`a${countQues}`]: avalue
                }
                countQues++
            }
        }
        setSublist({
            ...sublist,
            questions_answers: question_answer
        })
    }

    const saveSublist = (e) => {
        e.preventDefault()
        let qArr = document.querySelectorAll(".ques-ans-div input.question")
        let aArr = document.querySelectorAll(".ques-ans-div input.answer")
        handleQS(qArr, aArr)

        let { Best_Book_List, category, metaDescription } = sublist;
        if (Best_Book_List.length > 0 && category.length > 0 && metaDescription.length > 0) {
            setNext(3)
        } else {
            alert("* Fields are required")
        }
    }

    const addQS = (e) => {
        e.preventDefault();
        // quesNo.current = quesNo.current + 1
        let qlable = document.createElement('label')
        qlable.setAttribute("class", "d-block my-2");
        qlable.textContent = `Question`
        let qInput = document.createElement("input");
        qInput.setAttribute("class", "py-1 px-2 w-100 question")
        qInput.setAttribute("name", `q`)
        let alable = document.createElement('label')
        alable.setAttribute("class", "d-block my-2");
        alable.textContent = `Answer`
        let aInput = document.createElement("input");
        aInput.setAttribute("class", "py-1 px-2 w-100 answer")
        aInput.setAttribute("name", `a`)

        e.target.before(qlable, qInput, alable, aInput)
    }


    // Book Form JS +====+++++++++++++++++++++++============

    let searchTitle = async (value) => {
        try {
            flage.current = false;
            let res = await fetch(`/api/admin/list/listBooks?title=${value}`)
            res = await res.json();
            setSearchData(res.books)
            flage.current = true
        } catch (err) {
            console.log(err)
        }
    }

    const handlBook = (e) => {
        const { name, value } = e.target;
        if (name === "BookimageUrl") {
            // if (value.search("https://") === -1 || value.search("http://") === -1) return alert("Link not contain https:// OR http:// must required")
            setBook({
                ...book,
                BookimageUrl: value.length > 0 ? value : null
            })
            setSublist({
                ...sublist,
                imgArr: [value]
            })
        } else {
            // if ((name === "buyLink") && (value.search("https://") === -1 || value.search("http://") === -1)) return alert("Link not contain https:// OR http:// must required")
            setBook({
                ...book,
                [name]: value.length > 0 ? value : null
            })
        }

        if (name === "title" && flage.current) {
            flage.current = false;
            setTimeout(() => {
                searchTitle(value)
            }, 500)
        }
    }

    const addArtical = (e) => {
        e.preventDefault();

        let titleLable = document.createElement('label')
        titleLable.setAttribute("class", "d-block my-2");
        titleLable.textContent = `Title:`
        let titleInput = document.createElement("input");
        titleInput.setAttribute("class", "py-1 px-2 w-100 artical-title")
        titleInput.setAttribute("name", `title`)
        let linkLable = document.createElement('label')
        linkLable.setAttribute("class", "d-block my-2");
        linkLable.textContent = `Link:`
        let linkInput = document.createElement("input");
        linkInput.setAttribute("class", "py-1 px-2 w-100 artical-link")
        linkInput.setAttribute("name", `link`)
        e.target.before(titleLable, titleInput, linkLable, linkInput)
    }

    const addRecommender = (e) => {
        e.preventDefault();

        let div = document.createElement("div")
        div.setAttribute("class", "d-flex gap-2")

        let row1 = document.createElement("div");
        row1.setAttribute("class", "col-5");

        let nameLable = document.createElement("label");
        nameLable.setAttribute("class", "d-block my-2");
        nameLable.innerText = "Name:"
        let nameInput = document.createElement("input");
        nameInput.setAttribute("class", "py-1 px-2 w-100 recommender-name")

        row1.append(nameLable, nameInput)

        let row2 = document.createElement("div");
        row2.setAttribute("class", "col-5")

        let slugLable = document.createElement("label");
        slugLable.setAttribute("class", "d-block my-2");
        slugLable.innerText = "Slug:"
        let slugInput = document.createElement("input");
        slugInput.setAttribute("class", "py-1 px-2 w-100 recommender-slug")

        row2.append(slugLable, slugInput);

        div.append(row1, row2)

        e.target.before(div)
    }

    const appendBook = (item) => {
        setBook({
            title: item.title,
            subtitle: item.subtitle,
            authorName: item.authorName,
            category_name: book.category_name,
            rating: item.rating,
            reviewCount: item.reviewCount,
            slug: item.slug,
            yearPublished: item.yearPublished,
            buyLink: item.buyLink,
            BookimageUrl: item.BookimageUrl,
            articles: item.articles,
            expertRecommenders: item.expertRecommenders

        })
    }

    const saveArticle = () => {
        let title = document.querySelectorAll("input.artical-title")
        let link = document.querySelectorAll("input.artical-link")
        let tempArr1 = []
        for (var i = 0; i < title.length; i++) {
            if (title[i].value.length > 0 && link[i].value.length > 0) {
                if (link[i].value.search("https://") !== -1 || link[i].value.search("http://") !== -1) {
                    tempArr1.push({ title: title[i].value, link: link[i].value })
                } else {
                    alert("https:// OR http:// not present in link field")
                    return false;
                }
            }
        }


        let name = document.querySelectorAll("input.recommender-name")
        let slug = document.querySelectorAll("input.recommender-slug")
        let tempArr2 = []
        for (var i = 0; i < name.length; i++) {
            if (name[i].value.length > 0 && slug[i].value.length > 0) {
                tempArr2.push({ name: name[i].value, slug: slug[i].value })
            }
        }
        setBook({
            ...book,
            articles: tempArr1,
            expertRecommenders: tempArr2
        })
        return { articles: tempArr1, expertRecommenders: tempArr2 }
    }

    let savePublish = async (sublist, book) => {
        try {
            let save = await fetch("/api/admin/list/parent-list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sublist, book
                })
            })
            save = await save.json();
            if (save) {
                alert(save.message)
                location.reload();
            }
        } catch (err) {
            console.log(err)
        }
    }

    const saveBook = (e) => {
        e.preventDefault()
        let creator = saveArticle();

        let { title, authorName, category_name, rating, reviewCount, slug } = book;
        let { buyLink, BookimageUrl } = book;

        if (buyLink) {
            if ((buyLink.search("https://") === -1) && (buyLink.search("http://") === -1)) return alert("Link not contain https:// OR http:// must required")
        }

        if (BookimageUrl) {
            if (BookimageUrl.search("https://") === -1 && BookimageUrl.search("http://") === -1) return alert("Link not contain https:// OR http:// must required")
        }

        if (title && authorName && category_name && rating && reviewCount && slug) {
            let newBookObj = {
                title,
                subtitle: book.subtitle,
                authorName,
                category_name,
                rating,
                reviewCount,
                slug,
                yearPublished: book.yearPublished,
                buyLink: book.buyLink,
                BookimageUrl: book.BookimageUrl,
                articles: creator.articles,
                expertRecommenders: creator.expertRecommenders,
            }
            savePublish(sublist, newBookObj)
        } else {
            return alert("* fields must required")
        }
    }

    return (
        <>
            <Header1 />
            <div className='pt-120 container add-list'>
                <Link href="/admin/list" role="button" className="btn addBtn mb-20"><i class="bi bi-arrow-left"></i> Back</Link>
                <h1 className='fs-2'>Follow This Step</h1>
                <div className='d-flex steps jsutify-content-between align-items-center py-3'>
                    <span className='py-1 px-2 active'>SubList</span>
                    <span className={next >= 3 ? 'flex-grow-1 grow active' : "flex-grow-1 grow"}></span>
                    <span className={next >= 3 ? 'py-1 px-2 active' : "py-1 px-2"}>Book Blong Sublist</span>
                </div>
                <form action='#' className='col-lg-6 mx-auto border my-3 p-3 rounded' style={{ display: next === 2 ? "block" : "none" }}>
                    <h3 className='fs-5 fw-500 text-center'>Sub-List</h3>
                    <label htmlFor="" className='d-block mb-2 '>Add Sub-List Name*</label>
                    <input type="text" name="Best_Book_List" className='py-1 px-2 w-100' placeholder='Tech' required onChange={heandleList} />
                    <p className='text-danger mb-0' style={{ fontSize: "12px" }}>Don't use Best & Books keyword becase it apeare staticaly.</p>
                    <label htmlFor="" className='d-block my-2'>Add Parent List Name*</label>
                    <input type="text" className='py-1 px-2 w-100' readOnly value={sublist.category} />
                    <label htmlFor="" className='d-block my-2'>MetaDescription*</label>
                    <textarea name="metaDescription" value={sublist.metaDescription} id="" className='w-100 p-2' cols="30" rows="4" onChange={heandleList}></textarea>
                    <h5>Add Question/Answer:</h5>
                    <div className='ques-ans-div'>
                        <label htmlFor="" className='d-block my-2'>Question:</label>
                        <input type="text" name='q1' className='py-1 px-2 w-100 question' />
                        <label htmlFor="" className='d-block my-2'>Answer</label>
                        <input type="text" name='a1' className='py-1 px-2 w-100 answer' />
                        <button className='btn addBtn mt-2' onClick={addQS}>Add</button>
                    </div>

                    <div className='mt-4 d-flex justify-content-end'>
                        <button type='submit' className='btn submit-btn' onClick={saveSublist}>Save</button>
                    </div>
                </form>
                <form action='#' className='col-lg-8 mx-auto border my-3 p-3 rounded' style={{ display: next === 3 ? "block" : "none" }}>
                    <h3 className='fs-5 fw-500 text-center'>Add Book Details</h3>
                    <label htmlFor="" className='d-block mb-2 '>Book Title & Subtitle<span className='text-danger'>*</span></label>
                    <div className='d-flex gap-2 justify-content-between position-relative'>
                        <input type="text" className='py-1 px-2 col-lg-5' name='title' placeholder='title' value={book.title} required onChange={handlBook} />
                        <input type="text" className='py-1 px-2 col-lg-6' name='subtitle' placeholder='sub-title' value={book.subtitle} onChange={handlBook} />
                        <div className="position-absolute start-0 p-2 border rounded top-100 bg-white" style={{ display: searchData ? "block" : "none" }}>
                            <button className="btn d-block text-end" onClick={(e) => { e.preventDefault(); setSearchData(null) }}><i class="bi bi-x-lg"></i></button>
                            <ul className="list-unstyled overflow-auto" style={{ height: "10rem" }}>
                                {searchData ?
                                    searchData.map((item, index) => (
                                        <li style={{ cursor: "pointer", fontSize: "15px" }} className="my-2" key={index} onClick={() => { appendBook(item) }}>{item.title}</li>
                                    )) : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex gap-2 justify-content-between'>
                        <div className='col-lg-5'>
                            <label htmlFor="" className='d-block my-2'>Book Author<span className='text-danger'>*</span></label>
                            <input type="text" className='py-1 px-2 w-100' value={book.authorName} name='authorName' onChange={handlBook} />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor="" className='d-block my-2'>Category Name<span className='text-danger'>*</span></label>
                            <input type="text" className='py-1 px-2 w-100' readOnly value={book.category_name} name='category_name' onChange={handlBook} />
                        </div>
                    </div>
                    <div className='d-flex gap-2 justify-content-between'>
                        <div className='col-lg-5'>
                            <label htmlFor="" className='d-block my-2'>Rating<span className='text-danger'>*</span></label>
                            <input type="number" min="0.1" max="5.0" value={book.rating} className='py-1 px-2 w-100' name='rating' onChange={handlBook} placeholder='4.2' />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor="" className='d-block my-2'>Review Count<span className='text-danger'>*</span></label>
                            <input type="number" min="0" className='py-1 px-2 w-100' value={book.reviewCount} name='reviewCount' onChange={handlBook} placeholder='40425' />
                        </div>
                    </div>
                    <div className='d-flex gap-2 justify-content-between'>
                        <div className='col-lg-5'>
                            <label htmlFor="" className='d-block my-2'>Slug<span className='text-danger'>*</span></label>
                            <input type="text" className='py-1 px-2 w-100 text-lowercase' value={book.slug} name='slug' placeholder='title-red-alert' onChange={handlBook} />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor="" className='d-block my-2'>Year of Published</label>
                            <input type='number' className='py-1 px-2 w-100' max="2050" value={book.yearPublished} name='yearPublished' placeholder='1989' onChange={handlBook} />
                        </div>
                    </div>
                    <label htmlFor="" className='d-block my-2'>Buy Link</label>
                    <input type="text" className='py-1 px-2 w-100' value={book.buyLink} name='buyLink' placeholder='https://' onChange={handlBook} />
                    <label htmlFor="" className='d-block my-2'>Book Image URL</label>
                    <input type="text" className='py-1 px-2 w-100' value={book.BookimageUrl} name='BookimageUrl' placeholder='https://' onChange={handlBook} />
                    <h5 className='fs-6 mt-2'>Add Articals:</h5>
                    <div>
                        {
                            book.articles.map((item, index) => (
                                <>
                                    <label htmlFor="" className='d-block my-2'>Title:</label>
                                    <input type="text" className='py-1 px-2 w-100 artical-title' defaultValue={item.title} />
                                    <label htmlFor="" className='d-block my-2'>Link:</label>
                                    <input type="text" className='py-1 px-2 w-100 artical-link' defaultValue={item.link} placeholder='https://' />
                                </>
                            ))
                        }
                        <label htmlFor="" className='d-block my-2'>Title:</label>
                        <input type="text" className='py-1 px-2 w-100 artical-title' />
                        <label htmlFor="" className='d-block my-2'>Link:</label>
                        <input type="text" className='py-1 px-2 w-100 artical-link' placeholder='https://' />
                        <button className='btn addBtn mt-2' onClick={addArtical}>Add</button>
                    </div>
                    <h5 className='fs-6 mt-2'>Add Recommenders:</h5>
                    <div>
                        {
                            book.expertRecommenders.map((item, index) => (
                                <div className='d-flex gap-2'>
                                    <div className='col-5'>
                                        <label htmlFor="" className='d-block my-2'>Name:</label>
                                        <input type="text" className='py-1 px-2 w-100 text-capitalize recommender-name' defaultValue={item.name} />
                                    </div>
                                    <div className='col-5'>
                                        <label htmlFor="" className='d-block my-2'>Slug</label>
                                        <input type="text" className='py-1 px-2 w-100 recommender-slug text-lowercase' defaultValue={item.slug} />
                                    </div>
                                </div>
                            ))
                        }
                        <div className='d-flex gap-2'>
                            <div className='col-5'>
                                <label htmlFor="" className='d-block my-2'>Name:</label>
                                <input type="text" className='py-1 px-2 w-100 text-capitalize recommender-name' />
                            </div>
                            <div className='col-5'>
                                <label htmlFor="" className='d-block my-2'>Slug</label>
                                <input type="text" className='py-1 px-2 w-100 recommender-slug text-lowercase' />
                            </div>
                        </div>
                        <button className='btn addBtn mt-2' onClick={addRecommender}>Add</button>
                    </div>

                    <div className='mt-4 d-flex justify-content-between'>
                        <button type='back' className='btn submit-btn' onClick={() => { setNext("sublist") }}>Back</button>
                        <button type='submit' className='btn submit-btn' onClick={saveBook}>Save</button>
                    </div>
                </form>

            </div>
        </>
    )
}
