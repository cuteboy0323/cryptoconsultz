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
const Schedule = lazy(() => import("./pages/Schedule"));
const WaitingList = lazy(() => import("./pages/WaitingList"));
const Terms = lazy(() =>  import("./pages/Terms.js"));
const Meeting = lazy(() => import("./pages/Meeting"));
const Learning = lazy(() => import("./pages/Learning"));
const Team = lazy(() => import("./pages/Team"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const Employee = lazy(() => import("./pages/Employee"));
const CustomerService = lazy(() => import("./pages/CustomerService"));

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
                        <Route path="/terms-of-service-agreement" exact element={<Terms />} />
                        <Route path="/meeting-detail" exact element={<Meeting />} />
                        <Route path="/cryptocurrency-learning" exact element={<Learning />} />
                        <Route path="/team" exact element={<Team />} />
                        <Route path="/crypto-products" exact element={<Products />} />
                        <Route path="/contact" exact element={<Contact />} />
                        <Route path="/employee" exact element={<Employee />} />
                        <Route path="/customer-service" exact element={<CustomerService />} />
                    </Routes>
                </BaseLayout>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;