import React from 'react';
import Layout from '../components/organisms/layout';
import Jumbotron from '../components/molecules/jumbotron';
import Article from '../components/atoms/article';
import Box from '../components/atoms/box';
import Card from '../components/atoms/card';

export default () => (
  <Layout>
     <Jumbotron image="/img/cityscape.jpg" /> 
    <Box container gutter>
      <Article pt={[4, 4]} pb={[4, 5]}>
        <h2>Personal tour operator with a trusted independent guide</h2>
        <p>
          Welcome to Addis Ababa! Ethiopia the thriving capital city and
          historical center. We got place for international visiters to explore
          and experience a great Ethiopia starting from the capital up to the 
          indigenous historical and natural attraction sites.
          We offer a selection of tours that can be tailored to fit in with your
          travel ambitions. Our priority is to make your trip to Ethiopia as 
          enjoyable as possible by offering you our local knowledge and helping 
          you to navigate your way through Addis Ababa,Ethiopia.
          Our drivers perform well in every extereme Ethiopia attraction sites.
          In highest and lowest geographical landscapes, they are well attended
          to concern about your safety and they are punctual always. 
        </p>
        <h3>The traveller first</h3>
        <p>
           Great experience & amazing hospitality !
        </p>
        {/* <a href="/tours" className="button">
          View All Tours
        </a> */}

        <Card p={4} my={[4, 5]}>
          <Box conatiner={0} textAlign="center">
            <h3>
              "I could fully trust Abenezer to take care of every detail of my
              trip"
            </h3>
            <p>Daniel Grant, February 2019</p>
            <a href="/tours" className="button">
              Read more reviews
            </a>
          </Box>
        </Card>

        <h3>Let's chat</h3>
        <p>
          If you would like to book a tour, or discuss how a tour can be
          tailored to your preferences, please get in touch!
        </p>
        <a href="/tours" className="button">
          Contact
        </a>
      </Article>
    </Box>
  </Layout>
);
