import React from "react";
import nai3 from '../../src/assets/images/nai3.png';
import nai4 from '../../src/assets/images/nai4.png';
import nai5 from '../../src/assets/images/nai5.png';
import nai6 from '../../src/assets/images/nai1.png';
import nai7 from '../../src/assets/images/nai2.png';
import nai8 from '../../src/assets/images/nai3.png';
import nai9 from '../../src/assets/images/nai4.png';
import nai10 from '../../src/assets/images/nai5.png';

const SafariPage = () => {
  const exploreKenyaPackages = [
    {
      label: "Airport Transfer Package",
      image: nai3,
      title: "ADVENTURE SAFARIS",
      description: "Tailored for those that need the extra wild touch",
      link: "/safari-detail",
    },
    {
      label: "Nairobi City Tour",
      image: nai4,
      title: "WILDLIFE SAFARIS",
      description: "Exotic Wildlife Encounters",
      link: "/safari-detail",
    },
    {
      label: "Hourly Chauffeur Service",
      image: nai5,
      title: "BIRD WATCHING",
      description: "Best of Ornithology Tours",
      link: "/safari-detail",
    },
    {
      label: "Group Transport Package",
      image: nai6,
      title: "CULTURAL SAFARIS",
      description: "Local Cultural Experiences",
      link: "/safari-detail",
    },
    {
      label: "Half-Day Safari Experience",
      image: nai7,
      title: "LUXURY SAFARIS",
      description: "The Ultimate Luxury Safari Experiences",
      link: "/safari-detail",
    },
    {
      label: "Full-Day Safari",
      image: nai8,
      title: "FAMILY SAFARIS",
      description: "Travel with the whole family",
      link: "/safari-detail",
    },
    {
      label: "Multi-Day Safari Adventure",
      image: nai9,
      title: "FAMILY SAFARIS",
      description: "Travel with the whole family",
      link: "/safari-detail",
    },
    {
      label: "Cultural Explorer Package",
      image: nai10,
      title: "FAMILY SAFARIS",
      description: "Travel with the whole family",
      link: "/safari-detail",
    },
  ];

  return (
    <main className="page-content">
      <div className="container-narrow page-summary">
        <div className="block--desc">
          <p className="heading-sec-s">Welcome to Tiboal Travel Concierge</p>
          <blockquote className="quote">
            <p>Kenya's Ultimate Experience!</p>
          </blockquote>
          <div>
            <p align="justify">
              Whether you’re visiting for a few hours or a few days, let us take
              care of the details so you can focus on creating memories. At
              Tiboal Travel Concierge, we’re not just a service provider—we’re
              your trusted partner in every journey.
            </p>
          </div>
        </div>

        <div className="block--cta">
          <div className="cta box bt-3 bt-yellow shadow-one pd-md">
            <div id="TA_cdswritereviewlg293" className="TA_cdswritereviewlg">
              <ul id="9xdypzy6XCNC" className="TA_links 4vw6p3S0mhw">
                <li id="Vwf1MIezMq" className="2nROrd1V">
                  <a target="_blank" href="https://www.tripadvisor.co.uk/">
                    <img
                      src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/medium-logo-12097-2.png"
                      alt="TripAdvisor"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <script src="https://www.jscache.com/wejs?wtype=cdswritereviewlg&amp;uniq=293&amp;locationId=6513419&amp;lang=en_UK&amp;lang=en_UK&amp;display_version=2"></script>
          </div>
        </div>
      </div>

      {/* Section: Get Around Nairobi */}
      <div className="container container-spacer">
        <header className="pt2">
          <p className="heading-sec-s mb2 mb2-l">Get Around Nairobi</p>
          <h2 className="heading-pri-m mb3 mb4-l">Discover the City Highlights</h2>
        </header>
        <div className="flex-grid row-four">
          {[
            {
              label: "Airport Transfer Package",
              image: nai3,
              title: "ADVENTURE SAFARIS",
              description: "Tailored for those that need the extra wild touch",
              link: "/safari-detail",
            },
            {
              label: "Nairobi City Tour",
              image: nai4,
              title: "WILDLIFE SAFARIS",
              description: "Exotic Wildlife Encounters",
              link: "/safari-detail",
            },
            {
              label: "Hourly Chauffeur Service",
              image: nai5,
              title: "BIRD WATCHING",
              description: "Best of Ornithology Tours",
              link: "/safari-detail",
            },
            {
              label: "Group Transport Package",
              image: nai6,
              title: "CULTURAL SAFARIS",
              description: "Local Cultural Experiences",
              link: "/safari-detail",
            },
          ].map((pkg, index) => (
            <div className="gu" key={index}>
              <a
                href={pkg.link}
                className="box card card--standard rel rc-md shadow-one"
              >
                <span className="label label--dark label--sm upper ls-xs label-tl-md">
                  {pkg.label}
                </span>
                <div className="rl overlay-bg">
                  <picture className="rc-t-md card--picture rc-md">
                    <img src={pkg.image} alt={pkg.title} title={pkg.title} style={{ width: '100%' }} />
                  </picture>
                  <div className="overlay rc-t-md rc-md">
                    <div className="overlay-content overlay-content-bm pd-md">
                      <h2 className="mt-none mb-none mt-xs fw-md fc-w">
                        {pkg.title}
                      </h2>
                      <p className="fs-sm fs-italic mb-none mt-xs fc-w">
                        {pkg.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Explore Kenya */}
      <blockquote className="quote">
      <p className="heading-sec-s mb2 mb2-l">Explore Kenya</p>
      <h2 className="heading-pri-m mb3 mb4-l">Journey Through Kenya</h2>
       </blockquote>

      <div className="flex-grid row-four">
        {exploreKenyaPackages.map((pkg, index) => (
          <div className="gu" key={index}>
            <a
              href={pkg.link}
              className="box card card--standard rel rc-md shadow-one"
            >
              <div className="rel overlay-bg">
                <picture className="rc-t-md card--picture rc-md">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    title={pkg.title}
                  />
                </picture>
                <div title={pkg.title} className="overlay rc-t-md rc-md">
                  <div className="overlay-content overlay-content-bm pd-md">
                    <h2 className="mt-none mb-none mt-xs fw-md fc-w">
                      {pkg.title}
                    </h2>
                    <p className="fs-sm fs-italic mb-none mt-xs fc-w">
                      {pkg.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

    </main>
  );
};

export default SafariPage;
