import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const selectLastHalfYear = contributions => {
  const today = new Date();
  const startTimestamp = today.setMonth(today.getMonth() - 8);
  const startDate = new Date(startTimestamp);

  return contributions.filter(day => new Date(day.date) >= startDate);
};

const GithubTab = () => {
  const username = 'AbhinavSingh100'; // Replace with your GitHub username

  return (
    <section id="github" className="">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          My Coding Journey
        </h2>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 overflow-hidden">
          <GitHubCalendar 
            username={username}
            transformData={selectLastHalfYear}
            hideColorLegend
            hideTotalCount
            labels={{
              totalCount: '{{count}} contributions in the last half year',
            }}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GithubTab;