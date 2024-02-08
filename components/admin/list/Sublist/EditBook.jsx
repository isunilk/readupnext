import React, { useState } from 'react'

export const EditBook = ({ book, listId }) => {
    const [editBook, setEditBook] = useState({
        title: book.title,
        subtitle: book.title,
        authorName: book.authorName,
        category_name: book.category_name,
        rating: book.rating,
        reviewCount: book.reviewCount,
        slug: book.slug,
        yearPublished: book.yearPublished,
        buyLink: book.buyLink,
        BookimageUrl: book.BookimageUrl,
        articles: book.articles,
        expertRecommenders: book.expertRecommenders,
    });


    const handlBook = (e) => {
        const { name, value } = e.target;
        if (name === "rating" || name === "reviewCount" || name === "yearPublished") {
            setEditBook({
                ...editBook,
                [name]: Number(value)
            })
        } else {
            setEditBook({
                ...editBook,
                [name]: value
            })
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

    const updateBook = async (id, data) => {
        try {
            let conf = confirm("Confirm to update")
            if(!conf) return;
            let res = await fetch("/api/admin/list/listBooks", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id, data, listId
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

        const { title, authorName, category_name, rating, reviewCount, slug } = editBook;
        let { buyLink, BookimageUrl } = book;

        if (buyLink) {
            if ((buyLink.search("https://") === -1) && (buyLink.search("http://") === -1)) return alert("Link not contain https:// OR http:// must required")
        }

        if (BookimageUrl) {
            if (BookimageUrl.search("https://") === -1 && BookimageUrl.search("http://") === -1) return alert("Link not contain https:// OR http:// must required")
        }

        if (title && authorName && category_name && slug) {
            let newBookObj = {
                title,
                subtitle: editBook.subtitle,
                authorName,
                category_name,
                rating,
                reviewCount,
                slug,
                yearPublished: editBook.yearPublished,
                buyLink: editBook.buyLink,
                BookimageUrl: editBook.BookimageUrl,
                articles: creator.articles,
                expertRecommenders: creator.expertRecommenders,
                lastModified: new Date().toISOString()
            }
            updateBook(book._id, newBookObj)
        } else {
            return alert("* fields must required")
        }
    }

    return (
        <>
            <form action='#' className='mx-auto border my-3 p-3 rounded'>
                <h3 className='fs-5 fw-500 text-center'>Add Book Details</h3>
                <label htmlFor="" className='d-block mb-2 '>Book Title & Subtitle<span className='text-danger'>*</span></label>
                <div className='d-flex gap-2 justify-content-between'>
                    <input type="text" className='py-1 px-2 col-lg-5' name='title' defaultValue={editBook.title} placeholder='title' required onChange={handlBook} />
                    <input type="text" className='py-1 px-2 col-lg-6' name='subtitle' defaultValue={editBook.subtitle} placeholder='sub-title' onChange={handlBook} />
                </div>
                <div className='d-flex gap-2 justify-content-between'>
                    <div className='col-lg-5'>
                        <label htmlFor="" className='d-block my-2'>Book Author<span className='text-danger'>*</span></label>
                        <input type="text" className='py-1 px-2 w-100' name='authorName' defaultValue={editBook.authorName} onChange={handlBook} />
                    </div>
                    <div className='col-lg-6'>
                        <label htmlFor="" className='d-block my-2'>Category Name<span className='text-danger'>*</span></label>
                        <input type="text" className='py-1 px-2 w-100' readOnly value={editBook.category_name} name='category_name' onChange={handlBook} />
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-between'>
                    <div className='col-lg-5'>
                        <label htmlFor="" className='d-block my-2'>Rating<span className='text-danger'>*</span></label>
                        <input type="number" min="0" max="5.0" className='py-1 px-2 w-100' value={editBook.rating} name='rating' onChange={handlBook} placeholder='4.2' />
                    </div>
                    <div className='col-lg-6'>
                        <label htmlFor="" className='d-block my-2'>Review Count<span className='text-danger'>*</span></label>
                        <input type="number" min="0" className='py-1 px-2 w-100' name='reviewCount' value={editBook.reviewCount} onChange={handlBook} placeholder='40425' />
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-between'>
                    <div className='col-lg-5'>
                        <label htmlFor="" className='d-block my-2'>Slug<span className='text-danger'>*</span></label>
                        <input type="text" className='py-1 px-2 w-100 text-lowercase' name='slug' placeholder='title-red-alert' defaultValue={editBook.slug} onChange={handlBook} />
                    </div>
                    <div className='col-lg-6'>
                        <label htmlFor="" className='d-block my-2'>Year of Published</label>
                        <input type='number' className='py-1 px-2 w-100' max="2050" name='yearPublished' placeholder='1989' defaultValue={editBook.yearPublished} onChange={handlBook} />
                    </div>
                </div>
                <label htmlFor="" className='d-block my-2'>Buy Link</label>
                <input type="text" className='py-1 px-2 w-100' name='buyLink' placeholder='https://' defaultValue={editBook.buyLink} onChange={handlBook} />
                <label htmlFor="" className='d-block my-2'>Book Image URL</label>
                <input type="text" className='py-1 px-2 w-100' name='BookimageUrl' placeholder='https://' defaultValue={editBook.BookimageUrl} onChange={handlBook} />
                <h5 className='fs-6 mt-2'>Add Articals:</h5>
                <div>
                    {
                        editBook.articles.map((item, index) => (
                            <>
                                <label htmlFor="" className='d-block my-2'>Title:</label>
                                <input type="text" className='py-1 px-2 w-100 artical-title' defaultValue={item.title} />
                                <label htmlFor="" className='d-block my-2'>Link:</label>
                                <input type="text" className='py-1 px-2 w-100 artical-link' defaultValue={item.link} placeholder='https://' />
                            </>
                        ))
                    }
                    <button className='btn addBtn mt-2' onClick={addArtical}>Add</button>
                </div>
                <h5 className='fs-6 mt-2'>Add Recommenders:</h5>
                <div>
                    {
                        editBook.expertRecommenders.map((item, index) => (
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
                        ))
                    }
                    <button className='btn addBtn mt-2' onClick={addRecommender}>Add</button>
                </div>

                <div className='mt-4 d-flex justify-content-end'>
                    <button type='submit' className='btn submit-btn' onClick={saveBook}>Update</button>
                </div>
            </form>
        </>
    )
}
