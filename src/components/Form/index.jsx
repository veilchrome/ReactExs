import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      firstName: e.target.value,
    });
  };

  return (
    <form className="container-form">
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        placeholder="First Name"
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        placeholder="Last Name"
      />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
    </form>
  );
};

export default Form;
