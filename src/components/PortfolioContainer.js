import React from "react";
import AboutMe from "./AboutMe";
import ContactInfo from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "ContactInfo") {
            return <ContactInfo />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};