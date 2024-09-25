import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    }
    if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    }
  };

  return (
    <section id="contact">
      <form>
        <input type="text" name="name" placeholder="Name" onBlur={handleBlur} />
        {errors.name && <p>{errors.name}</p>}
        <input type="email" name="email" placeholder="Email" onBlur={handleBlur} />
        {errors.email && <p>{errors.email}</p>}
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
