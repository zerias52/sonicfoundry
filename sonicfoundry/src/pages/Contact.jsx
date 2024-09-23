import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleMessage(e) {
    const name = e.target.name;
    const text = e.target.value;

    const copy = { ...message };
    copy[name] = text;
    setMessage(copy);
  }

  function sendMessage() {
    console.log(message);
  }
  return (
    <div className="contact page">
      <div className>
        <div className="form-product">
          <div className="form">
            <h3>Contact Us!</h3>
            <div className={"mb-3"}>
              <label htmlFor="messageName" className={"form-label"}>
                Name
              </label>
              <input
                type="text"
                className={"form-control"}
                id={"messageName"}
                name={"name"}
                onBlur={handleMessage}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor="messageEmail" className={"form-label"}>
                Email
              </label>
              <input
                type="email"
                className={"form-control"}
                id={"messageEmail"}
                name={"email"}
                onBlur={handleMessage}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor="messageText" className={"form-label"}>
                Message
              </label>
              <textarea
                className={"form-control"}
                id={"productCategory"}
                name={"message"}
                rows={5}
                onBlur={handleMessage}
              />
            </div>
            <div className="controls">
              <button
                type="submit"
                className="controls btn btn-primary"
                onClick={sendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
