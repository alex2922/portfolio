import React, { useEffect, useState } from "react";
import "./ExpSection.scss";
import App from "../../../Firebase";
import ExpCard from "../../../comps/expCard/ExpCard";
import { notification, Button } from 'antd';
import 'antd/dist/reset.css'; 
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
const db = getFirestore(App);

function ExpSection() {



  const [experiences, setExperiences] = useState([]);

  const fetchExperiences = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "exp"));
      const exp = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) || [];
      setExperiences(exp.reverse());

      if (exp.length === 0) {
        notification.warning({
          message: "No Data",
          description: "No experiences found in the database.",
        });
      }
      
    } catch (error) {
      console.error("Error fetching experiences:", error);
      notification.error({
        message: "Error",
        description: "An error occurred while fetching experiences.",
      });
    } 
  };

  useEffect(() => {
    
    fetchExperiences();
  }, []);


  console.log(experiences[0]);




  return (
    <div className="about-section parent">
      <div className="container about-section-container">
        <p className="style">Know Me</p>
        <h2 className="">My Experiences</h2>

        {/* <ExpCard  /> */}

        {experiences.slice(0,1).map((exp)=>{
          return <ExpCard key={exp.id} company={exp.company} role={exp.role} from={exp.from} to={exp.to} desc={exp.desc} tags={exp.tech} />
        })}

       
      </div>
    </div>
  );
}

export default ExpSection;
