import Layout from "../../shared/Layout";
import Container from "../../shared/Container";
import SlideElement from "../../components/SlideElement";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Contact() {
  return (
    <Layout
      title="Contact with us"
      description="cotact Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione"
      href="https://osama263.github.io/water/#/contact"
    >
      <Container>
        {/* spinign logo */}
        <SlideElement>
          <div className="py-10 border-b flex items-center justify-center gap-8 border-Ocean">
            <img src="logo.svg" className="w-[5%]" alt="spining logo" />
            <h1 className="sm:text-9xl text-5xl text-white font-semibold">Contact</h1>
          </div>
        </SlideElement>
        {/* form */}
        <SlideElement offset={.4}>
          <Form />
        </SlideElement>
      </Container>
    </Layout>
  );
}

const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    navigate("/");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => handleChange(e)}
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="input-styles"
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          onChange={(e) => handleChange(e)}
          required
          type="email"
          name="email"
          id="email"
          placeholder="Enter your e-mail"
          className="input-styles"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          onChange={(e) => handleChange(e)}
          required
          type="text"
          name="message"
          id="message"
          placeholder="Your message..."
          className="input-styles"
          rows={4}
        ></textarea>
      </div>
      <button aria-label="submit message" type="submit" className="main-btn !bg-Ocean !rounded-md !py-4">
        Submit Message
      </button>
    </FormWrapper>
  );
};

const FormWrapper = tw.form`
py-28
lg:w-1/2
mx-auto
[&>div]:space-y-6
[&>div]:text-Gray
[&_label]:cursor-pointer
[&_label]:text-xl
space-y-20
`;
