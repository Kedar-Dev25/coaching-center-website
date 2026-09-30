import "../App.css";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { whatsappLink } from "../config";

const COURSES = [
  {
    id: 1,
    badge: "Primary Foundation",
    title: "Class 3rd to 7th",
    description:
      "Building strong analytical roots and logical thinking from the very beginning with personalized attention.",
    subjects: ["Mathematics", "Science", "English", "Odia / Hindi"],
  },
  {
    id: 2,
    badge: "High School Excellence",
    title: "Class 8th to 10th",
    description:
      "Comprehensive and rigorous preparation focused on Board Exams, concept clarity, and mock testing.",
    subjects: ["Advanced Maths", "Physical & Life Science", "Social Studies", "Languages"],
  },
  {
    id: 3,
    badge: "Higher Secondary",
    title: "+2 Arts (CHSE)",
    description:
      "Shaping future professionals, civil servants, and scholars with deep academic coaching in core subjects.",
    subjects: ["Political Science", "History", "Economics", "Logic & English"],
  },
];

function Courses() {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <SectionHeader
          tone="dark"
          overline="Our Programs"
          title={
            <>
              Empowering Students with <span>Structured Learning</span>
            </>
          }
          intro={
            <>
              Choose the right academic path tailored for{" "}
              <span className="premium-highlight">standard excellence</span> and proven result
              metrics.
            </>
          }
        />

        <div className="courses-grid">
          {COURSES.map((course) => (
            <div key={course.id} className="course-card">
              <span className="course-badge">{course.badge}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>

              <div className="subjects-divider"></div>

              <h4 className="subjects-heading">Core Subjects</h4>
              <div className="subjects-tags">
                {course.subjects.map((sub) => (
                  <span key={sub} className="subject-tag">
                    {sub}
                  </span>
                ))}
              </div>

              <a
                className="course-link"
                href={whatsappLink(
                  `Hi Leads Academy, I'd like to know more about ${course.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp <Icon name="arrow-right" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
