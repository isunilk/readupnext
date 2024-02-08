const categoryArr = [
    {
        category: "Authors",
        peopleNo: 312
    },
    {
        category: "Authors",
        peopleNo: 312
    },
    {
        category: "Authors",
        peopleNo: 312
    },
    {
        category: "Authors",
        peopleNo: 312
    },
    {
        category: "Authors",
        peopleNo: 312
    },
    {
        category: "Authors",
        peopleNo: 312
    },
]
const People_category = () => {

    return (
        <>
            <ul className="p-0">
                <li key={0} className="list-group-item d-flex justify-content-sm-between py-2 px-3">All</li>
                {
                    categoryArr.map((item, index) => {
                        return (
                            <li key={index+1} className="list-group-item d-flex justify-content-sm-between py-2 px-3">
                                <span>{item.category}</span>
                                <span>{item.peopleNo}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default People_category;
