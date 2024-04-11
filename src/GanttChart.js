import React from 'react';

const GanttChart = ({ task, projectStartDate, projectEndDate }) => {
  // Calculate task duration in days
  const startDate = new Date(task.startDate);
  const endDate = new Date(task.endDate);
  const projectStart = new Date(projectStartDate);
  const projectEnd = new Date(projectEndDate);
  const totalProjectDurationInDays = (projectEnd - projectStart) / (1000 * 60 * 60 * 24);
  const durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

  // Calculate task start offset in percentage
  const startOffsetPercentage = ((startDate - projectStart) / (projectEnd - projectStart)) * 100;

  // Calculate width of the task bar in percentage
  const widthPercentage = (durationInDays / totalProjectDurationInDays) * 100;

  // Style for the task bar
  const taskStyle = {
    marginLeft: `${startOffsetPercentage}%`,
    width: `${widthPercentage}%`,
    backgroundColor: '#007bff', // Blue color for the task bar
    height: '20px', // Height 
    border: '1px solid #000', // Border 
  };

  return (
    <div className="gantt-chart">
      <p>Gantt Chart for Task: {task.name}</p>
      <div className="gantt-chart-bar" style={taskStyle}></div>
    </div>
  );
}

export default GanttChart;
