import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaPhone,
    FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const members = [
    {
        id: 1,
        name: "John Doe",
        position: "Founder & CEO",
        bio: "John is an avid camp craze and outdoor enthusiast with over 20 years of experience in the industry.",
        image: "https://i.ibb.co/JctrghX/model5.jpg",
    },
    {
        id: 2,
        name: "Alex Johnson",
        position: "Marketing Manager",
        bio: "Alex is passionate about connecting with our community and sharing the joy of camping.",
        image: "https://i.ibb.co/LhcF6HP/model2.jpg",
    },
    {
        id: 3,
        name: "Jane Smith",
        position: "Head of Product",
        bio: "Jane oversees product development and ensures we offer the best gear for your adventures.",
        image: "https://i.ibb.co/p2hXPQv/model1.webp",
    },
];

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Contact Information */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Contact Information
                    </h2>
                    <p className="flex gap-2">
                        <strong className="flex items-center gap-2">
                            {" "}
                            <FaPhone className="text-green-600" /> Phone:
                        </strong>{" "}
                        (123) 456-7890
                    </p>
                    <p className="flex gap-2">
                        <strong className="flex items-center gap-2">
                            {" "}
                            <FaEnvelope className="text-green-600" /> Email:
                        </strong>{" "}
                        contact@campcraze.com
                    </p>
                    <p className="flex gap-2">
                        <strong className="flex gap-2">
                            <FaLocationArrow className="text-green-600" />{" "}
                            Address:
                        </strong>{" "}
                        123 Camping Road, <br /> Adventure City, CO 12345
                    </p>
                </section>

                {/* Map */}
                <section className="mb-8 col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <div className="w-full h-64">
                        <iframe
                            title="Google Map"
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0652945397753!2d-122.41941548468156!3d37.77492927975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ff1f1d45%3A0x5f5d5f5f5d5f5d5f!2sAdventure+City!5e0!3m2!1sen!2sus!4v1591234567890!5m2!1sen!2sus"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            aria-hidden="false"
                            tabIndex={0}
                        ></iframe>
                    </div>
                </section>
            </div>

            {/* Mission Statement */}
            <section className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>
                    At Camp Craze Shop, our mission is to provide high-quality
                    camping gear and resources to outdoor enthusiasts of all
                    levels. We believe in the power of nature to inspire,
                    rejuvenate, and bring people together. Our values include
                    sustainability, community, and adventure.
                </p>
                {/* Social Media Links */}
                <section className="mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex items-center justify-center space-x-4">
                        <Link
                            to="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            to="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            to="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            to="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700"
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </section>
            </section>

            {/* Team Members */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member) => (
                        <div className="text-center" key={member.id}>
                            <img
                                src={member.image}
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4 h-[150px] w-[150px] object-cover"
                            />
                            <h3 className="text-xl font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-gray-600">{member.position}</p>
                            <p>{member.bio}</p>
                            <div className="flex items-center justify-center space-x-4 mt-4">
                                <Link
                                    to="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600"
                                >
                                    <FaFacebook />
                                </Link>
                                <Link
                                    to="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400"
                                >
                                    <FaTwitter />
                                </Link>
                                <Link
                                    to="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500"
                                >
                                    <FaInstagram />
                                </Link>
                                <Link
                                    to="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700"
                                >
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
