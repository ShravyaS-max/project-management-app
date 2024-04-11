import React, { useState, useEffect } from 'react';
import './App.css';
import GanttChart from './GanttChart';
import projectData from './projectData.json';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading project data from JSON file
    setProjects(projectData);
  }, []);

  return (
    <div className="App">
      <h1>Project Management Web Application</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>Description: {project.description}</p>
          <p>Start Date: {project.startDate}</p>
          <p>End Date: {project.endDate}</p>
          {project.subProjects.map(subProject => (
            <div key={subProject.id}>
              <h3>{subProject.name}</h3>
              <p>Description: {subProject.description}</p>
              <p>Start Date: {subProject.startDate}</p>
              <p>End Date: {subProject.endDate}</p>
              {subProject.tasks.map(task => (
                <div key={task.id}>
                  <h4>{task.name}</h4>
                  <p>Description: {task.description}</p>
                  <p>Start Date: {task.startDate}</p>
                  <p>End Date: {task.endDate}</p>
                  <GanttChart 
                    task={task} 
                    projectStartDate={project.startDate} 
                    projectEndDate={project.endDate} 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
