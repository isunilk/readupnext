
const ContactForm = () => {

  const sendMessage = async (name, email, message) => {
    try {
      let res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, message
        })
      })
      res = await res.json();
      if (res.status === 200) {
        alert(res.message)
        let targetBtn = document.getElementById("sendBtn")
        targetBtn.disabled = false;
        targetBtn.style.background = "#ff3294";
      }
    } catch (err) {
      console.log(err);
    }
  }


  const handleSubmit = (event) => {
    console.log("message function")
    event.preventDefault();
    let inputs = document.querySelectorAll(".messageInputs")
    let data = {
      name: inputs[0].value,
      email: inputs[1].value,
      message: document.querySelector("textarea").value
    }
    const { name, email, message } = data
    if (name && email, message) {
      let targetBtn = document.getElementById("sendBtn")
      targetBtn.disabled = true;
      targetBtn.style.background = "#ff3294a6";
      sendMessage(name, email, message)
    } else {
      alert("all field required")
    }

    // Handle form submission
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                className="messageInputs"
                type="text"
                placeholder="Your Name*"
                name="name"
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                className="messageInputs"
                placeholder="Email Address*"
                name="email"
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Your message*"
                name="message"
                required="required"
                data-error="Please,leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block" id="sendBtn">
              Send Message
            </button>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
