import { Navigate, Route, Routes } from "react-router-dom";
import CrewLayout from "../Components/CrewLayout/CrewLayout";
import Crew from "../Pages/Crew/Crew";
import crewInfo from "../data.json";

const CrewPageRoutes = () => {

    const getCrewMember = 
        crewInfo.crew.map((member, i) => (
            <Route
                key={i} 
                element={
                    <Crew
                        role={member.role}
                        name={member.name}
                        bio={member.bio}
                        img={member.images.png}
                    />
                }
                path={member.name.replace(" ", "").toLowerCase()}
                />
        ));

        // Route redirect for "home/destination" url endpoint
        const routeIndexRedirect = <Route key={getCrewMember.length + 1} path="/" element={<Navigate replace to="douglashurley" />}/>;

        getCrewMember.push(routeIndexRedirect);
    

    return (
        <Routes>
            <Route element={<CrewLayout />}>
                {getCrewMember}
            </Route>
        </Routes>
    )
};

export default CrewPageRoutes;