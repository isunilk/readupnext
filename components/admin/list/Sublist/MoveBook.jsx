
export const MoveBook = ({ listDetails }) => {
    const saveName = () => {
        window.confirm("You want to change name")
    }
    return (

        <form action={saveName} className="border col-lg-5 rounded p-3 bg-white">
            <h3 className="text-center">Change Name</h3>
            {/* <label htmlFor="">Current {listDetails.Best_Bokk} is blong: <strong>{listDetails.category}</strong> to Move new:</label> */}
            <input type="text" list="list" className="d-block w-100 mt-3 px-3 py-1 text-secondary" />
            <datalist id="list">
                <option value="Sports"/>
            </datalist>
            <button type="submit" className="btn mt-3 submit-btn">Move</button>
        </form>
    )
}
