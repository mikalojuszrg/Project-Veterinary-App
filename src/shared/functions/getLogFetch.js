const logs = [fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/logs/")];

export const getProjects = () => {
  return projects;
};

export const getProject = (id) => {
  return projects.find((car) => car.id === id);
};
