import React from "react";
import './App.css';
import Headlines from './components/NewsHeadlines/Headlines'

export default function App() {
    return (
        <div className="container-fluid my-5">
            <h3 className="text-center mb-5">
                React Working with Axios
            </h3>
            <Headlines/>
        </div>
    );
}
