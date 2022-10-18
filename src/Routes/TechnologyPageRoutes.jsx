import { Navigate, Route, Routes } from "react-router-dom";
import TechnologyLayout from "../Components/TechnologyLayout/TechnologyLayout";
import techInfo from "../data.json";
import Technology from "../Pages/Technology/Technology";

const TechnologyPageRoutes = () => {
  const getTechSpecs = techInfo.technology.map((tech, index) => (
    <Route
      key={index}
      element={
        <Technology
          description={tech.description}
          title={tech.name}
          imgPortrait={tech.images.portrait}
          imgLandscape={tech.images.landscape}
        />
      }
      path={tech.name.replace(" ", "").toLowerCase()}
    />
  ));

  // Route redirect for "home/destination" url endpoint
  const routeIndexRedirect = <Route key={getTechSpecs.length + 1} path="/" element={<Navigate replace to="launchvehicle" />} />;

  getTechSpecs.push(routeIndexRedirect);

  return (
    <Routes>
      <Route element={<TechnologyLayout />}>{getTechSpecs}</Route>
    </Routes>
  );
};

export default TechnologyPageRoutes;
