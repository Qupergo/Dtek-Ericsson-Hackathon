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

import data from "./data.json"
import LeaderboardGroup from '../components/LeaderboardGroup';


export default function Home() {
  return (
    <main className="flex flex-col items-center mx-4 md:mx-8 mt-8 mb-16">
    <div className="w-full xl:w-3/4 max-w-6xl flex flex-col space-y-32">
      <Nav />
      <Header />
      <div className="flex flex-col items-center">
      <LeaderboardGroup data={data}/>
      </div>
      <Footer />

    </div>
  </main>
  );
}
