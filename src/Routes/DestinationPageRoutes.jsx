import { Navigate, Route, Routes } from 'react-router-dom';
import DestinationLayout from '../Components/DestinationLayout/DestinationLayout';
import Destination from "../Pages/Destination/Destination";
import destinfo from "../data.json";

const DestinationPageRoutes = () => {
    
    const getDestinationData = destinfo.destinations.map((dest, i) => (
        <Route 
            key={i}
            path={dest.name.toLowerCase()}
            element={
                <Destination 
                    title={dest.name}
                    info={dest.description}
                    time={dest.travel}
                    distance={dest.distance}
                />
            }
        />
    ));

    // Route redirect for "home/destination" url endpoint
    const routeIndexRedirect = <Route key={getDestinationData.length + 1} path="/" element={<Navigate replace to="moon" />}/>;

    getDestinationData.push(routeIndexRedirect);

    return (
        <Routes>
            <Route element={<DestinationLayout />}>
                {getDestinationData}
            </Route>
        </Routes>
    ) 
    
};

export default DestinationPageRoutes;
