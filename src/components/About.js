import React from 'react';

const teamMembers = [
  {
    name: 'Chris Mukoyani',
    role: 'CEO & Co-founder',
    image: '/images/chris.jpg', // update path to actual image
  },
  {
    name: 'Peter Mwangi',
    role: 'CTO',
    image: '/images/peter.jpg',
  },
  {
    name: 'Warren Otieno',
    role: 'Operations Lead',
    image: '/images/warren.jpg',
  },
  {
    name: 'Sam Kiptoo',
    role: 'Software Engineer',
    image: '/images/sam.jpg',
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 text-lg mb-12">
          Mind Vision Tech is a technology company founded in 2024 by a team of ambitious youth,
          blending fresh energy and experience to solve real-world IT challenges.
          We provide smart, affordable solutions in CCTV installation, IT support, networking,
          custom software, and cybersecurity — all tailored for small and medium-sized businesses.
          At Mind Vision, we’re committed to building long-term relationships through reliable service,
          clear communication, and innovative thinking.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
            />
              <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
