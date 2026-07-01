import React from 'react';
import "../App.css";

function Courses() {
  const courseData = [
    {
      id: 1,
      badge: "Primary Foundation",
      title: "Class 3rd to 7th",
      description: "Building strong analytical roots and logical thinking from the very beginning with personalized attention.",
      subjects: ["Mathematics", "Science", "English", "Odia / Hindi"]
    },
    {
      id: 2,
      badge: "High School Excellence",
      title: "Class 8th to 10th",
      description: "Comprehensive and rigorous preparation focused on Board Exams, concept clarity, and mock testing.",
      subjects: ["Advanced Maths", "Physical & Life Science", "Social Studies", "Languages"]
    },
    {
      id: 3,
      badge: "Higher Secondary",
      title: "+2 Arts (CHSE)",
      description: "Shaping future professionals, civil servants, and scholars with deep academic coaching in core subjects.",
      subjects: ["Political Science", "History", "Economics", "Logic & English"]
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        
        {/* Section Heading matching your core premium typography */}
        <div className="courses-header">
          <span className="about-academy-badge">Our Programs</span>
          <h2 className="about-main-heading">
            Empowering Students with <span className="highlight-text-italic">Structured Learning</span>
          </h2>
          <p className="about-story-p">
  Choose the right academic path tailored for <span className="premium-highlight">standard excellence</span> and proven result metrics.
</p>
        </div>

        {/* 3-Card Premium Grid */}
        <div className="courses-grid">
          {courseData.map((course) => (
            <div key={course.id} className="course-card feature-glass-node">
              <span className="course-badge">{course.badge}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              
              <div className="subjects-divider"></div>
              
              <h4 className="subjects-heading">Core Subjects:</h4>
              <div className="subjects-tags">
                {course.subjects.map((sub, idx) => (
                  <span key={idx} className="subject-tag">{sub}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;