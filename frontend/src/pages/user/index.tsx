import PageLayout from "@/layout/pageLayout";
import { useAuthContext } from "@/provider/loginProvider";

const User = () => {
  const { auth } = useAuthContext();
  const personalInfo = {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "1234 Elm Street, City, Country",
    about:
      "Experienced software engineer with a passion for developing innovative web applications. Strong problem-solving skills and ability to work in a collaborative team environment.",
  };

  const experience = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      location: "City, Country",
      date: "January 2020 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper felis, et luctus justo.",
    },
    {
      title: "Intern",
      company: "Startup",
      location: "City, Country",
      date: "May 2019 - August 2019",
      description:
        "Sed eget semper velit. Vivamus aliquam sem eget magna varius, nec convallis libero tempus.",
    },
  ];

  const skills = [
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Agile Methodologies",
  ];

  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="mb-8 flex items-center justify-start gap-2 md:flex-row flex-col">
            <img
              src={auth.user?.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-center mt-4">
                {personalInfo.name}
              </h1>
              <p className="text-center text-gray-600">{personalInfo.title}</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="text-sm">
              <strong>Email:</strong> {personalInfo.email}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {personalInfo.phone}
            </p>
            <p className="text-sm">
              <strong>Address:</strong> {personalInfo.address}
            </p>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <div className="mb-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="text-sm">{personalInfo.about}</p>
            </div>
            <h2 className="text-xl font-semibold">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm">
                  {exp.company}, {exp.location}
                </p>
                <p className="text-sm">{exp.date}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="mb-1">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default User;
