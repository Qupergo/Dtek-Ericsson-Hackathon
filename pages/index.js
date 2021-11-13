import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from "../components/Button";
import Modal from '../components/Modal';
import Leaderboard from "../components/Leaderboard";

import Nav from "../components/Nav";
import Header from "../components/Header";
import SectionContactUs from "../components/SectionContactUs";
import Footer from "../components/Footer";


const tables = {
  "Öhl Häfv": [
  {
    pos: 1,
    name: "Tian",
    score: 30
  },
  {
    pos: 2,
    name: "Charter",
    score: 40
  },
  ],  
  "Smash Turnering": [
  {
    pos: 1,
    name: "Bottle",
    score: 30
  },
  {
    pos: 2,
    name: "Tian",
    score: 39
  },
  ],  
}


export default function Home() {
  return (
    <main className="flex flex-col items-center mx-4 md:mx-8 mt-8 mb-16">
    <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-32">
      <Nav />
      <Header />
      <div>
      {
        Object.keys(tables).map(board => (
          <Leaderboard title={board} participants={tables[board]}/>
        ))
      }
      <Footer />

    </div>
    </div>
  </main>
  );
}
