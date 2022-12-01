import { Route, Routes } from "react-router-dom";
import CreateIssue from "./pages/CreateIssue";
import Projects from "./pages/Projects";
import PullRequest from "./pages/PullRequest";
import Code from "./pages/Code";
import Security from "./pages/Security";
import Actions from "./pages/Actions";
import Issue from "./pages/Issue";
import Header from "./Header";
import Nav from "./components/Nav";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { GITHUB_API } from "./api";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </>
  );
}

export default App;
function Example() {
  return <div>example</div>;
}
