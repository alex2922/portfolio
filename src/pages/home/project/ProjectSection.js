import React, { useEffect, useState } from "react";
import "./ProjcetSection.scss";
import ProCard from "../../../comps/proCard/ProCard";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import App from "../../../Firebase";
import { notification } from "antd";

const db = getFirestore(App);

function ProjectSection() {
  const [proj, setProj] = useState([]);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const project =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) || [];

      setProj(project.reverse());

      if (project.length === 0) {
        notification.warning({
          message: "No Data",
          description: "No projects found in the database.",
        });
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      notification.error({
        message: "Error",
        description: "An error occurred while fetching projects.",
      });
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="projects-section parent">
        <div className="container projects-section-container">
          <p className="style">My Work</p>
          <h2>My Projects</h2>

          <div className="projects-box">
            {proj.map((project) => (
              <ProCard
                key={project.id}
                heading={project.heading}
                desc={project.desc}
                img={project.img}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
