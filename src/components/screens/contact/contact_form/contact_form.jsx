import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useState } from "react";
import styles from "./contact_form.module.scss";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle input changes to update form state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use name attribute to update the state
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send form data to the API
    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    });

    if (response.ok) {
      // Display success toast notification
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset form fields after successful submission
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } else {
      // Display error toast notification
      toast.error("Failed to send message.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />{" "}
      {/* Ensure ToastContainer is included for notifications */}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.tri} />
        <h1>Say Us a Hello!</h1>
        <p>Let us know more about you.</p>
        <div className={styles.inps}>
          <CustomInput
            placeHolder="Full Name*"
            required
            name="fullName" // Added name attribute for correct state update
            value={formData.fullName} // Bind value to state
            onChange={handleChange}
          />
          <CustomInput
            placeHolder="Email*"
            required
            type="email"
            name="email" // Added name attribute for correct state update
            value={formData.email} // Bind value to state
            onChange={handleChange}
          />
          <CustomInput
            placeHolder="Mobile Number*"
            required
            type="tel"
            name="mobile" // Added name attribute for correct state update
            value={formData.mobile} // Bind value to state
            onChange={handleChange}
          />
          <CustomTextArea
            placeHolder="Message*"
            rows={3}
            required
            name="message" // Added name attribute for correct state update
            value={formData.message} // Bind value to state
            onChange={handleChange}
          />
          <CustomInput type="submit" value="Send Message" />{" "}
          {/* Updated to add label for the button */}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
