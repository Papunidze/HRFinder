import PageLayout from "@/layout/pageLayout";
import { skills } from "@/modules/filter/options";
import React, { useRef, useState } from "react";

const skillsList = [
  "JavaScript",
  "React.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "Agile Methodologies",
];

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    about: "",
    skills: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: checked
        ? [...prevData.skills, value]
        : prevData.skills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your logic to handle the form data
  };
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-1">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="about" className="block font-medium mb-1">
            About:
          </label>
          <textarea
            ref={textareaRef}
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="input resize-none max-h-36 overflow-auto"
            required
            rows={1}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Skills:</label>
          {skills.map((skill) => (
            <div key={skill.label} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={skill.label}
                name="skills"
                value={skill.value}
                onChange={handleSkillChange}
                className="mr-2"
              />
              <label htmlFor={skill.label} className="font-medium">
                {skill.label}
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </PageLayout>
  );
};

export default UserForm;
