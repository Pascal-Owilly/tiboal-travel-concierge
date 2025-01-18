import React from 'react';

const SafariItinerary = () => {
  return (
    <div className="trip--main">
      <div className="flex-grid flex-wrap">
        <div className="trip--itinerary pa2 pa3-m ph4-l">
          {[
            {
              day: "Day 01: Nairobi - Amboseli",
              description: `Depart Nairobi at 08:00hrs for Amboseli National Park. Arrive at Kimana Tented camp around midday; lunch will be prepared by your Safari chef as you relax in your camp. After lunch proceed for an afternoon game drive at Amboseli National Park. The park offers unique ecosystem and a good view of Mt. Kilimanjaro on the background on a good weather day.`,
              stay: "Overnight stay Kimana Tented camp. [L,D]",
            },
            {
              day: "Day 02: Amboseli National Park",
              description: `An early morning game drive at 06:00hrs and afternoon game drive at 16:00hrs will be provided to you at Amboseli National Park with an opportunity of spotting the cats.`,
              stay: "Overnight stay Kimana Tented camp. [B,L,D]",
            },
            {
              day: "Day 03: Amboseli - Maasai Mara",
              description: `This day you will have an early morning departure from Amboseli for a long drive to the world famous Maasai Mara. Enjoy Picnic lunch en-route to Mara. Arrive at the camp check in and proceed for the afternoon game drive.`,
              stay: "Overnight stay: Lenchada Tourist camp Mara. [B,L,D]",
            },
            {
              day: "Day 04: Maasai Mara Game Reserve",
              description: `This day you will spend your stay in Maasai Mara with a full day game drive. Depart after breakfast with picnic lunch and proceed for game viewing with the possibility of spotting the big five.`,
              stay: "Overnight stay: Lenchada Tourist camp Mara. Meals: [B,L,D]",
            },
            {
              day: "Day 05: Maasai Mara - Nairobi",
              description: `An early morning game drive in Maasai Mara, return to the camp for breakfast and thereafter depart for Nairobi. Stop at the rift valley escarpment. Arrive Nairobi mid-morning optional trips are available in Nairobi at an extra cost.`,
              stay: "Meals: [B,L]",
            },
          ].map((trip, index) => (
            <div className="trip--day" key={index}>
              <h3 className="heading-pri-m">{trip.day}</h3>
              <p align="justify">
                {trip.description}
                <br />
                <strong>{trip.stay}</strong>
              </p>
            </div>
          ))}

          <hr />

          <div className="trip--summary">
            <p className="mv1">
              <span className="fw-bold">Set Departures:</span> Daily
            </p>
            <p className="mv1">
              <span className="fw-bold">Who can do this Safari:</span> Everyone
            </p>
          </div>

          <hr />

          <div className="trip--disclaimer">
            <p align="justify">
              <span className="fw-bold">NB:</span> This is an indication of the
              type of itinerary you can do. You have the option to customize
              this itinerary to suit your interests in terms of destinations you
              would like to visit and/or activities you would prefer to do.
            </p>
          </div>
        </div>

        <aside className="trip--aside pv3 pv4-l pr3 pr4-l">
          <div className="cta box bt-3 bt-blue shadow-one pd-md rc-sm">
            <div className="heading-pri-s mv2">Tailormake this Tour</div>
            <p className="fs-italic fs-md mt2 mb4">
              Lets tailor this trip to fit your own ideas, budget and dates!
            </p>
            <div className="text-center">
              <p className="mt0 mb1">
                <a href="#" className="btn btn--block btn--outlined">
                  Enquire
                </a>
              </p>
              <p className="heading-sec-xs mt2 mb1">info@alltimesafaris.com</p>
              <p className="heading-sec-xs mt2 mb1">
                <h4>
                  +254-707 611161
                  <br /> +254 722 768061
                </h4>
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="container">
        <div className="perks shadow-one pd-md">
          <h2 className="heading-pri-m mb3 mb4-l">
            Itinerary View on Google Maps
          </h2>
        </div>
      </div>

      <div className="careers-skills-application">
        <div className="careers-skills-application__inner container">
          <div className="careers-application box bt-yellow shadow-one">
            <h2 className="careers-application__title heading-pri-l mv0">
              Tour Inclusions
            </h2>
            <div className="careers-application__body">
              <ul>
                <li>Pick up and drop off at JKIA - Jomo Kenyatta International Airport</li>
                <li>Bed & Breakfast in Nairobi Hotel.</li>
                <li>Domestic Flights.</li>
                <li>Full Board on Safari</li>
                <li>
                  All transport in designed safari vehicle 4x4WD with a pop up roof
                  for maximum game viewing comfort with a professional English
                  speaking driver/guide.
                </li>
                <li>All park entrance fees</li>
              </ul>
            </div>
          </div>

          <div className="careers-application box bt-yellow shadow-one">
            <h2 className="careers-application__title heading-pri-l mv0">
              Tour Exclusions
            </h2>
            <div className="careers-application__body">
              <ul>
                <li>The cost of obtaining visas</li>
                <li>
                  Expenses like laundry, beverages, bar bill, telephone, mineral
                  water, tips, porterage etc.
                </li>
                <li>International flights.</li>
                <li>International departure taxes.</li>
                <li>Travel and medical insurance.</li>
                <li>All other expenses that are purely of a personal nature.</li>
                <li>
                  All other items that are not mentioned in 'our price includes'.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariItinerary;
