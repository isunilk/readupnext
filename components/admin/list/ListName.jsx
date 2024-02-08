
export const ListName = ({ listDetails }) => {
    const saveName = async (e) => {
        e.preventDefault();
        let value = document.getElementById("changeListName").value;
        if (value) {
            let agree = window.confirm(`You want to change list name ${listDetails} to ${value} this change is permanently`)
            if (agree) {
                let res = await fetch("/api/admin/list/parent-list", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        oldName: listDetails,
                        newName: value
                    })
                })
                res = await res.json();
                if (res) {
                    alert(res.message)
                    location.reload()
                };
                alert(res.message)
            }
        }
    }
    return (

        <form className="border col-lg-5 rounded p-3 bg-white">
            <h3 className="text-center">Change Name</h3>
            <label htmlFor="">Current Name is: <strong>{listDetails}</strong> to change new:</label>
            <input type="text" className="d-block w-100 mt-3 px-3 py-1 text-secondary" id="changeListName" required />
            <button type="submit" className="btn mt-3 submit-btn" onClick={saveName}>Change</button>
        </form>
    )
}
