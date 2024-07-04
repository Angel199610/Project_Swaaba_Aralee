import React, { useState } from 'react';
import TeamMemberPopup from './TeamMemberPopup';
import { FaStar } from 'react-icons/fa';
import '../styles/AboutUs.css';
import team1 from '../assets/Araphat.jpg';
import team2 from '../assets/Araphat4.jpg';
import team3 from '../assets/Araphat3.jpg';
import team4 from '../assets/Araphat5.jpg';

const testimonialsData = [
  {
    text: "Swaaba Aralee Cars made my car buying experience seamless and enjoyable. Their team was knowledgeable and helpful every step of the way.",
    rating: 5,
    customer: "Mubeezi Jorvan"
  },
  {
    text: "I found the perfect car at a great price, and the customer service was outstanding. Highly recommend Swaab Aralee Cars!",
    rating: 4.5,
    customer: "Philex Kibumba"
  },

  {
    text: "I found the perfect car at a great price, and the customer service was outstanding. Highly recommend Swaab Aralee Cars!",
    rating: 4.5,
    customer: "Wannyana Esther"
  },
  
];

const teamMembers = [
  {
    image: team1,
    name: 'Kiggundu Araphat',
    role: 'CEO & Founder',
    description: 'John is the visionary behind Swaab Aralee Cars, with a passion for cars and customer satisfaction.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: team2,
    name: 'Kiggundu Araphat',
    role: 'Chief Operating Officer',
    description: 'Jane ensures that our operations run smoothly and that our customers receive top-notch service.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: team3,
    name: 'Kiggundu Araphat',
    role: 'Head of Sales',
    description: 'Emily leads our sales team with a focus on finding the perfect car for every customer.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: team4,
    name: 'Kiggundu Araphat',
    role: 'Head of Sales',
    description: 'Emily leads our sales team with a focus on finding the perfect car for every customer.',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
];

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="about-us-container">
      <h1>About Swaaba Aralee</h1>
      
      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <h2>Our Mission and Vision</h2>
        <p><strong>Mission:</strong> To deliver the best car buying experience by providing a wide range of vehicles, excellent customer service, and a commitment to quality and transparency.</p>
        <p><strong>Vision:</strong> To be the most trusted and preferred car dealership, known for innovation, integrity, and customer satisfaction.</p>
      </section>
      
      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in [2022], Swaab Aralee Cars began with a simple goal: to revolutionize the car buying process. Our founder, Swaab Aralee, saw a need for a dealership that focused not just on selling cars, but on building lasting relationships with customers. From our humble beginnings, we've grown into a trusted name in the industry, thanks to our dedication to quality and customer satisfaction.</p>
      </section>
      
      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleMemberClick(member)}
            >
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We believe in honest and transparent dealings with our customers.</li>
          <li><strong>Quality:</strong> We ensure that every vehicle we offer meets our high standards of quality.</li>
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We go above and beyond to meet your needs.</li>
          <li><strong>Innovation:</strong> We continuously seek to improve and innovate in our services and offerings.</li>
        </ul>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>A wide range of meticulously inspected vehicles</li>
          <li>Exceptional customer service from start to finish</li>
          <li>Competitive pricing and flexible financing options</li>
          <li>Comprehensive warranty and after-sales support</li>
        </ul>
      </section>
      
      {/* Testimonials Carousel Section */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-carousel">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="rating-stars">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <FaStar key={index} className="star-icon" />
                ))}
              </div>
              <p>{testimonial.text}</p>
              <p>- {testimonial.customer}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="contact-information">
        <h2>Contact Information</h2>
        <p>Email: info@swaaba_aralee.com</p>
        <p>Phone: +256 785 220 954</p>
        <p>Address: Find Us at Future Holding, Nakawa opposite SpearMotors</p>
      </section>

      {selectedMember && (
        <TeamMemberPopup member={selectedMember} onClose={closePopup} />
      )}
    </div>
  );
};

export default AboutUs;













// // import React from 'react';
// import React, { useState } from 'react';
// import TeamMemberPopup from './TeamMemberPopup';
// import { FaStar } from 'react-icons/fa';
// import '../styles/AboutUs.css';
// import team1 from '../assets/Araphat.jpg';
// import team2 from '../assets/Araphat4.jpg';
// import team3 from '../assets/Araphat3.jpg';
// import team4 from '../assets/Araphat5.jpg';


// const testimonialsData = [
//   {
//     text: "Swaab Aralee Cars made my car buying experience seamless and enjoyable. Their team was knowledgeable and helpful every step of the way.",
//     rating: 5,
//     customer: "Customer Name 1"
//   },
//   {
//     text: "I found the perfect car at a great price, and the customer service was outstanding. Highly recommend Swaab Aralee Cars!",
//     rating: 4.5,
//     customer: "Customer Name 2"
//   }
// ];

// const teamMembers = [
//   {
//     image: team1,
//     name: 'Kiggundu Araphat',
//     role: 'CEO & Founder',
//     description: 'John is the visionary behind Swaab Aralee Cars, with a passion for cars and customer satisfaction.',
//     facebook: 'https://facebook.com',
//     twitter: 'https://twitter.com',
//     linkedin: 'https://linkedin.com',
//   },
//   {
//     image: team2,
//     name: 'Kiggundu Araphat',
//     role: 'Chief Operating Officer',
//     description: 'Jane ensures that our operations run smoothly and that our customers receive top-notch service.',
//     facebook: 'https://facebook.com',
//     twitter: 'https://twitter.com',
//     linkedin: 'https://linkedin.com',
//   },
//   {
//     image: team3,
//     name: 'Kiggundu Araphat',
//     role: 'Head of Sales',
//     description: 'Emily leads our sales team with a focus on finding the perfect car for every customer.',
//     facebook: 'https://facebook.com',
//     twitter: 'https://twitter.com',
//     linkedin: 'https://linkedin.com',
//   },
//   {
//     image: team4,
//     name: 'Kiggundu Araphat',
//     role: 'Head of Sales',
//     description: 'Emily leads our sales team with a focus on finding the perfect car for every customer.',
//     facebook: 'https://facebook.com',
//     twitter: 'https://twitter.com',
//     linkedin: 'https://linkedin.com',
//   },
// ];

// const AboutUs = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   const handleMemberClick = (member) => {
//     setSelectedMember(member);
//   };

//   const closePopup = () => {
//     setSelectedMember(null);
//   };

//   return (
//     <div className="about-us-container">
//       <h1>About Swaaba Aralee</h1>
      
//       {/* <section className="introduction">
//         <h2>Introduction</h2>
//         <p>Welcome to Swaab Aralee , your premier destination for finding the perfect vehicle. We pride ourselves on providing exceptional service and a wide selection of high-quality cars to meet your needs.</p>
//       </section> */}
      
//       <section className="mission-vision">
//         <h2>Our Mission and Vision</h2>
//         <p><strong>Mission:</strong> To deliver the best car buying experience by providing a wide range of vehicles, excellent customer service, and a commitment to quality and transparency.</p>
//         <p><strong>Vision:</strong> To be the most trusted and preferred car dealership, known for innovation, integrity, and customer satisfaction.</p>
//       </section>
      
//       <section className="our-story">
//         <h2>Our Story</h2>
//         <p>Founded in [2022], Swaab Aralee Cars began with a simple goal: to revolutionize the car buying process. Our founder, Swaab Aralee, saw a need for a dealership that focused not just on selling cars, but on building lasting relationships with customers. From our humble beginnings, we've grown into a trusted name in the industry, thanks to our dedication to quality and customer satisfaction.</p>
//       </section>
      
//       <section className="meet-the-team">
//         <h2>Meet the Team</h2>
//         <div className="team-members">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="team-member"
//               onClick={() => handleMemberClick(member)}
//             >
//               <img src={member.image} alt={member.name} className="team-image" />
//               <div className="team-info">
//                 <h3>{member.name}</h3>
//                 <p>{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
      
//       <section className="our-values">
//         <h2>Our Values</h2>
//         <ul>
//           <li><strong>Integrity:</strong> We believe in honest and transparent dealings with our customers.</li>
//           <li><strong>Quality:</strong> We ensure that every vehicle we offer meets our high standards of quality.</li>
//           <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We go above and beyond to meet your needs.</li>
//           <li><strong>Innovation:</strong> We continuously seek to improve and innovate in our services and offerings.</li>
//         </ul>
//       </section>
      
//       <section className="why-choose-us">
//         <h2>Why Choose Us</h2>
//         <ul>
//           <li>A wide range of meticulously inspected vehicles</li>
//           <li>Exceptional customer service from start to finish</li>
//           <li>Competitive pricing and flexible financing options</li>
//           <li>Comprehensive warranty and after-sales support</li>
//         </ul>
//       </section>
      
//       <section className="testimonials">
//         <h2>Customer Testimonials</h2>
//         <p>Don't just take our word for it. Here's what our customers have to say about their experience with Swaab Aralee Cars:</p>
//         <blockquote>"Swaab Aralee Cars made my car buying experience seamless and enjoyable. Their team was knowledgeable and helpful every step of the way." - [Customer Name]</blockquote>
//         <blockquote>"I found the perfect car at a great price, and the customer service was outstanding. Highly recommend Swaab Aralee Cars!" - [Customer Name]</blockquote>
//       </section>
      
//       <section className="contact-information">
//         <h2>Contact Information</h2>
//         <p>If you have any questions or would like to learn more about our offerings, please don't hesitate to contact us:</p>
//         <p>Email: info@swaaba_aralee.com</p>
//         <p>Phone: +256 785 220 954</p>
//         <p>Address: [Your Address Here]</p>
//       </section>

//       {selectedMember && (
//         <TeamMemberPopup member={selectedMember} onClose={closePopup} />
//       )}
//     </div>
//   );
// };

// export default AboutUs;