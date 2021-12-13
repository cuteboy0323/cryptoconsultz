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

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <BaseLayout>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                    </Routes>
                </BaseLayout>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;