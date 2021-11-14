import {useImperativeHandle, useState} from 'react';

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

import json from "./data.json"
import LeaderboardGroup from '../components/LeaderboardGroup';
import React from "react";



export default function Home() {
  const [data, setData] = useState(json);

  const handleSetData = (title, persons) => {
    let newData = data;
    newData[title] = persons
    setData(newData);
    handleSort();
  }

  const handleSort = () => {
    Object.keys(data).map(board => (
      data[board].sort((a,b) => {
        return b.score - a.score
  })))
    let newData = data
    console.log(newData)
    setData(newData)
  }

  return (
    <main className="flex flex-col items-center mx-4 md:mx-8 mt-8 mb-16">
    <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-32">
      <Nav data={data} setData={handleSetData}/>
      <Header />
      <div className="flex flex-col items-center">
      <LeaderboardGroup data={data} />
      </div>
      <Footer />

    </div>
  </main>
  );
}
