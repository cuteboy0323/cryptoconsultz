import React, { lazy, Suspense } from "react";

// ** 
import Spinner from "./components/Spinner";
import BaseLayout from "./components/BaseLayout";

// ** Route Providers ** //
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// ** Pages ** //
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const SessionPackages = lazy(() => import("./pages/SessionPackages"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const CustomerService = lazy(() => import("./pages/CustomerService"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Meeting = lazy(() => import("./pages/Meeting"));
const Learning = lazy(() => import("./pages/Learning"));
const WaitingList = lazy(() => import("./pages/WaitingList"));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <BaseLayout>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/services" exact element={<Services />} />
                        <Route path="/session-packages-and-pricing" exact element={<SessionPackages />} />
                        <Route path="/schedule-and-pay" exact element={<Schedule />} />
                        <Route path="/waiting-list" exact element={<WaitingList />} />
                        <Route path="/team" exact element={<Team />} />
                        <Route path="/contact" exact element={<Contact />} />
                        <Route path="/customer-service" exact element={<CustomerService />} />
                        <Route path="/meeting-detail" exact element={<Meeting />} />
                        <Route path="/learning" exact element={<Learning />} />
                    </Routes>
                </BaseLayout>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;