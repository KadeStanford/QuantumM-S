import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Map from "@/pages/components/Map.js";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    try {
      await axios.post("/api/contact", { name, email, message });
      alert("Message sent successfully");
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    }
  };
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageContentBox}>
        <div className={styles.homePageOrganizer}>
          <h1 className={styles.homePageTitle}>
            Quantum Mail & Ship<br></br>
            Heirloom Awards
          </h1>
          <p className={styles.homePageText}>
            <span className={styles.underlineText}>
              {" "}
              One Stop Shop for all your shipping & mailing needs
            </span>
          </p>
          <h3 className={styles.homeHours}>Hours: Mon - Fri | 9:00 - 5:30</h3>
          <div className={styles.homeInfoBox}>
            <h3 className={styles.homeEmail}>Email: info@quantum-mail.com </h3>
            <h3 className={styles.homePhone}>Phone: (225) 767-1400</h3>
            <h3 className={styles.homeFax}>Fax: (225) 766-2390</h3>
          </div>
          <div className={styles.homePageListContainer}>
            <ul className={styles.homePageList}>
              <li>Mailing</li>
              <li>Awards & Engraving</li>
              <li>Business Services</li>
            </ul>
            <ul className={styles.homePageList}>
              <li>UPS Authorized</li>
              <li>FedEx Authorized</li>
              <li>DHL Authorized</li>
              <li>USPS Authorized</li>
            </ul>
          </div>
        </div>

        <Map address="7353 Highland Road Suite B, Baton Rouge, Louisiana 70808 United States" />
      </div>
      <div className={styles.homePageContactForm}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            className={styles.contactInput}
            type="text"
            placeholder="Name"
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.contactInput}
            type="text"
            placeholder="Email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={styles.contactTextArea}
            type="text"
            placeholder="Message"
            required={true}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={styles.contactButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function MailAndShipPage() {
  return (
    <div className={styles.mailPageContainer}>
      <div className={styles.mailPageContentBox}>
        <h1 className={styles.mailPageTitle}>Our Shipping Providers</h1>
        <div className={styles.mailPageListContainer}>
          <ul className={styles.mailPageList}>
            <li>
              <img src="/images/fedex.png" className={styles.fedex} />
            </li>
            <li>
              <img src="/images/ups.png" className={styles.ups} />
            </li>
            <li>
              <img src="/images/usps.png" className={styles.usps} />
            </li>
            <li>
              <img src="/images/dhl.png" className={styles.dhl} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mailPageContentBox2}>
        <h1 className={styles.mailPageTitle}>Why Choose Quantum?</h1>

        <div className={styles.mailPageListContainer}>
          <ul className={styles.mailChooseList}>
            <li>Friendly Service</li>
            <li>Competitive Rates</li>
            <li>Comparison rates</li>
            <li>We're more than just a shipping location...</li>
          </ul>
          <div className={styles.mailPageServicesContainer}>
            <div className={styles.mailPageServicesBox}>
              <img
                src="/images/mailsupplies.jpg"
                className={styles.mailSupplies}
              />
              <h3 className={styles.mailPageServicesTitle}>Mail Supplies</h3>
            </div>
            <div className={styles.mailPageServicesBox}>
              <img src="/images/gifts.jpg" className={styles.mailSupplies} />
              <h3 className={styles.mailPageServicesTitle}>Gifts</h3>
            </div>
            <div className={styles.mailPageServicesBox}>
              <img
                src="/images/engraving.jpg"
                className={styles.mailSupplies}
              />
              <h3 className={styles.mailPageServicesTitle}>Engraving</h3>
            </div>
            <div className={styles.mailPageServicesBox}>
              <img src="/images/giftwrap.jpg" className={styles.mailSupplies} />
              <h3 className={styles.mailPageServicesTitle}>
                Packing & Gift Wrapping
              </h3>
            </div>
            <div className={styles.mailPageServicesBox}>
              <img src="/images/computer.jpg" className={styles.mailSupplies} />
              <h3 className={styles.mailPageServicesTitle}>
                Self-Service Computers
              </h3>
            </div>
            <div className={styles.mailPageServicesBox}>
              <img src="/images/copy.jpg" className={styles.mailSupplies} />
              <h3 className={styles.mailPageServicesTitle}>
                Self-Service Printing
              </h3>
            </div>
            <div className={styles.mailPageServicesBox}>
              <img src="/images/shipping.jpg" className={styles.mailSupplies} />
              <h3 className={styles.mailPageServicesTitle}>
                Pack & Ship Custom Options
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OtherServicesPage() {
  return (
    <div>
      <h1>Other Services Page</h1>
    </div>
  );
}

function HeirloomEngravingPage() {
  return (
    <div>
      <h1>Heirloom Engraving Page</h1>
    </div>
  );
}

function HeirloomGiftsPage() {
  return (
    <div>
      <h1>Heirloom Gifts Page</h1>
    </div>
  );
}

function MailboxRentalPage() {
  return (
    <div>
      <h1>Mailbox Rental Page</h1>
    </div>
  );
}

function AboutUsPage() {
  return (
    <div>
      <h1>About Us Page</h1>
    </div>
  );
}

export default function Home() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  const backgroundImages = [
    "/images/box.png", // Replace with the actual image paths
    "/images/gifts.png", // Replace with the actual image paths
  ];

  useEffect(() => {
    const toggleBackground = () => {
      setIsBackgroundVisible((prevValue) => !prevValue);
    };

    const interval = setInterval(toggleBackground, 10000); // Change image every 10 seconds (10000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <Head>
        <title>Quantum M&S</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.topContainer}>
          <div
            className={styles.logoContainer}
            style={{
              backgroundImage: isBackgroundVisible
                ? `url(${backgroundImages[0]})`
                : `url(${backgroundImages[1]})`,
              transition: "background 0.5s ease-in-out",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="/images/quantumLogo.png" className={styles.logo} />
            <span className={styles.logoSubtext}>
              7353 Highland Road Suite B
            </span>
          </div>
          <div className={styles.navBar}>
            <button
              className={styles.navButton}
              onClick={() => changePage("home")}
            >
              Home
            </button>
            <button
              className={styles.navButton}
              onClick={() => changePage("mailAndShip")}
            >
              Mail & Ship
            </button>
            <button
              className={styles.navButton}
              onClick={() => changePage("otherServices")}
            >
              Other Services
            </button>
            <button
              className={styles.navButton}
              onClick={() => changePage("heirloomEngraving")}
            >
              Heirloom Engraving
            </button>
            <button
              className={styles.navButton}
              onClick={() => changePage("heirloomGifts")}
            >
              Heirloom Gifts
            </button>
            <button
              className={styles.navButton}
              onClick={() => changePage("mailboxRental")}
            >
              Mailbox Rental
            </button>
            <button
              className={styles.navButton}
              onClick={() => changePage("aboutUs")}
            >
              About Us
            </button>
          </div>
        </div>
        <div className={styles.contentContainer}>
          {currentPage === "home" && <HomePage />}
          {currentPage === "mailAndShip" && <MailAndShipPage />}
          {currentPage === "otherServices" && <OtherServicesPage />}
          {currentPage === "heirloomEngraving" && <HeirloomEngravingPage />}
          {currentPage === "heirloomGifts" && <HeirloomGiftsPage />}
          {currentPage === "mailboxRental" && <MailboxRentalPage />}
          {currentPage === "aboutUs" && <AboutUsPage />}
        </div>
      </main>
    </>
  );
}
