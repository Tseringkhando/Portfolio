import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "13f7a2b1-296f-4e52-92be-ea3cafb282ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className={styles.contactContainer}>
        <h1>Get in touch</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.inputBox}>
            <label>Name:</label>
            <input
              className={styles.field}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Email:</label>
            <input
              className={styles.field}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label> Message:</label>
            <textarea
              className={styles.field}
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <span>{result}</span>
      </section>
    </>
  );
}

export default Contact;
