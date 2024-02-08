import { useRef, useState } from "react";

export const AddBook = ({ listName }) => {
    let flage = useRef(true)
    const [searchData, setSearchData] = useState()
    const [newbook, setNewBook] = useState({
        title: null,
        subtitle: null,
        authorName: null,
        category_name: listName.category,
        rating: null,
        reviewCount: null,
        slug: null,
        yearPublished: null,
        buyLink: null,
        BookimageUrl: null,
        articles: [],
        expertRecommenders: [],
    })


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
            setNewBook({
                ...newbook,
                BookimageUrl: value.length > 0 ? value : null
            })

        } else {
            // if ((name === "buyLink") && (value.search("https://") === -1 || value.search("http://") === -1)) return alert("Link not contain https:// OR http:// must required")
            setNewBook({
                ...newbook,
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
        setNewBook({
            title: item.title,
            subtitle: item.subtitle,
            authorName: item.authorName,
            category_name: listName.category,
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
        return { articles: tempArr1, expertRecommenders: tempArr2 }
    }


    const saveNewBook = async (sublistId, data) => {
        try {

            let conf = confirm("You want to Add this Book")
            if (!conf) return;
            let res = await fetch("/api/admin/list/listBooks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sublistId, data
                })
            })
            res = await res.json();
            alert(res.message)
            location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    const saveBook = (e) => {
        e.preventDefault()
        let creator = saveArticle();

        let { title, authorName, category_name, rating, reviewCount, slug } = newbook;
        let { buyLink, BookimageUrl } = newbook;

        if (buyLink) {
            if ((buyLink.search("https://") === -1) && (buyLink.search("http://") === -1)) return alert("Link not contain https:// OR http:// must required")
        }

        if (BookimageUrl) {
            if (BookimageUrl.search("https://") === -1 && BookimageUrl.search("http://") === -1) return alert("Link not contain https:// OR http:// must required")
        }

        if (title && authorName && category_name && slug) {
            let newBookObj = {
                title,
                subtitle: newbook.subtitle,
                authorName,
                category_name,
                rating,
                reviewCount,
                slug,
                yearPublished: newbook.yearPublished,
                buyLink: newbook.buyLink,
                BookimageUrl: newbook.BookimageUrl,
                articles: creator.articles,
                expertRecommenders: creator.expertRecommenders,
                lastModified: new Date().toISOString()
            }
            saveNewBook(listName.sublistId, newBookObj)
        } else {
            return alert("* fields must required")
        }
    }
    return (
        <form action='#' className=' mx-auto border my-3 p-3 rounded'>
            <h3 className='fs-5 fw-500 text-center'>Add Book Details</h3>
            <label htmlFor="" className='d-block mb-2 '>Book Title & Subtitle<span className='text-danger'>*</span></label>
            <div className='d-flex gap-2 justify-content-between position-relative'>
                <input type="text" list="list" className='py-1 px-2 col-lg-5' name='title' placeholder='title' value={newbook.title} required onChange={handlBook} />
                <input type="text" className='py-1 px-2 col-lg-6' name='subtitle' placeholder='sub-title' defaultValue={newbook.subtitle} onChange={handlBook} />
                <div className="position-absolute start-0 p-2 border rounded top-100 bg-white" style={{ display: searchData ? "block" : "none" }}>
                    <button className="btn d-block text-end" onClick={() => { setSearchData(null) }}><i class="bi bi-x-lg"></i></button>
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
                    <input type="text" className='py-1 px-2 w-100' name='authorName' value={newbook.authorName} required onChange={handlBook} />
                </div>
                <div className='col-lg-6'>
                    <label htmlFor="" className='d-block my-2'>Category Name<span className='text-danger'>*</span></label>
                    <input type="text" className='py-1 px-2 w-100' readOnly value={newbook.category_name} name='category_name' onChange={handlBook} />
                </div>
            </div>
            <div className='d-flex gap-2 justify-content-between'>
                <div className='col-lg-5'>
                    <label htmlFor="" className='d-block my-2'>Rating<span className='text-danger'>*</span></label>
                    <input type="number" min="0.1" max="5.0" className='py-1 px-2 w-100' value={newbook.rating} name='rating' onChange={handlBook} placeholder='4.2' />
                </div>
                <div className='col-lg-6'>
                    <label htmlFor="" className='d-block my-2'>Review Count<span className='text-danger'>*</span></label>
                    <input type="number" min="0" className='py-1 px-2 w-100' value={newbook.reviewCount} name='reviewCount' onChange={handlBook} placeholder='40425' />
                </div>
            </div>
            <div className='d-flex gap-2 justify-content-between'>
                <div className='col-lg-5'>
                    <label htmlFor="" className='d-block my-2'>Slug<span className='text-danger'>*</span></label>
                    <input type="text" className='py-1 px-2 w-100 text-lowercase' value={newbook.slug} name='slug' placeholder='title-red-alert' onChange={handlBook} />
                </div>
                <div className='col-lg-6'>
                    <label htmlFor="" className='d-block my-2'>Year of Published</label>
                    <input type='number' className='py-1 px-2 w-100' max="2050" value={newbook.yearPublished} name='yearPublished' placeholder='1989' onChange={handlBook} />
                </div>
            </div>
            <label htmlFor="" className='d-block my-2'>Buy Link</label>
            <input type="text" className='py-1 px-2 w-100' name='buyLink' value={newbook.buyLink} placeholder='https://' onChange={handlBook} />
            <label htmlFor="" className='d-block my-2'>Book Image URL</label>
            <input type="text" className='py-1 px-2 w-100' name='BookimageUrl' value={newbook.BookimageUrl} placeholder='https://' onChange={handlBook} />
            <h5 className='fs-6 mt-2'>Add Articals:</h5>
            <div>
                {
                    newbook.articles ?
                        newbook.articles.map((item, index) => (
                            <>
                                <label htmlFor="" className='d-block my-2'>Title:</label>
                                <input type="text" className='py-1 px-2 w-100 artical-title' defaultValue={item.title} />
                                <label htmlFor="" className='d-block my-2'>Link:</label>
                                <input type="text" className='py-1 px-2 w-100 artical-link' defaultValue={item.link} placeholder='https://' />
                            </>
                        )) : null
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
                    newbook.expertRecommenders ?
                        newbook.expertRecommenders.map((item, index) => (
                            <div className='d-flex gap-2' key={index}>
                                <div className='col-5'>
                                    <label htmlFor="" className='d-block my-2'>Name:</label>
                                    <input type="text" className='py-1 px-2 w-100 text-capitalize recommender-name' defaultValue={item.name} />
                                </div>
                                <div className='col-5'>
                                    <label htmlFor="" className='d-block my-2'>Slug</label>
                                    <input type="text" className='py-1 px-2 w-100 recommender-slug text-lowercase' defaultValue={item.slug} />
                                </div>
                            </div>
                        )) : null
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

            <div className='mt-4 d-flex justify-content-end'>
                <button type='submit' className='btn submit-btn' onClick={saveBook}>Add</button>
            </div>
        </form>
    )
}
