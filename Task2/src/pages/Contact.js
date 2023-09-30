import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, settype] = useState("type");

  const clearForm = () => {
    setname("");
    setEmail("");
    settype("");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (email !== "" && message !== "") {
      alert("Message Sent");
      clearForm();
    } else {
      alert("Required fields are empty");
    }
  };

  return (
    <div className="Contact">
      <div>
        <h1 className="contacttxt">Contact Me</h1>
      </div>

      <form onSubmit={handlesubmit}>
        <fieldset>
          <div className="fields">
            <label>Name:</label>

            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
          </div>
          <br />

          <div className="fields">
            <label>Email:</label>

            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <br />

          <div className="fields">
            <label>Type of Enquiry</label>
            <br></br>

            <select value={type} onChange={(e) => settype(e.target.value)}>
              <option value="conversation">Conversation</option>
              <option value="freelance">Freelance Project</option>
              <option value="Job">Job offer</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>
          <br></br>

          <div className="fields">
            <label>Your Message:</label>

            <br />
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
          </div>
          <button type="submit" className="Button">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
