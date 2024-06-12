"use client"
const NewsLetter = () => {
    const handleSubmit = (event) => {
      event.preventDefault(); // prevent default form submission behavior
      // handle form submission logic
    };
  
    return (
      <form onClick={handleSubmit} className="position-relative d-flex mt-3 mb-2">
        <input type="email" placeholder="Enter your email" className="flex-grow-1" required />
        <button className="fw-500">Sign Up</button>
      </form>
    );
  };
  
  export default NewsLetter;
  