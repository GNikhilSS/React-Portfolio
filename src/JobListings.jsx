import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from API
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div key={job.url} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <a href={job.url} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">
              View Job
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
