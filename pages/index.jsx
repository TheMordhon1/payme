import Head from "next/head";
import Courtesy from "../components/Courtesy";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Payme</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Courtesy />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
    </Layout>
  );
}
