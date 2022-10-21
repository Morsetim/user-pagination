import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Pagination from "./components/Pagination";
import UserList from "./components/UserList";

const App = () => {
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(async () => {
        const response = await axios.get(
            "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        );
        setUserData(response.data);
        // eslint-disable-next-line
    }, []);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = userData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>User Infomation</h1>
            { <UserList userData={currentPosts}/>}
            <Pagination
                totalPosts={userData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default App;
