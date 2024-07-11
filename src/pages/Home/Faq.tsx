import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "What types of campsites do you offer?",
        answer: "We offer a variety of campsites to suit different preferences and needs. This includes RV sites with full hookups, tent camping areas in scenic locations, cozy cabins with modern amenities, and luxurious glamping options for those seeking comfort in nature.",
    },
    {
        question: "How can I book a campsite?",
        answer: "Booking a campsite is simple! Visit our website or mobile app, search for your desired location and dates, browse available campsites, and select the one that best fits your requirements. Follow the booking instructions to secure your reservation.",
    },
    {
        question: "What amenities are typically available at campsites?",
        answer: "Our campsites offer a range of amenities to enhance your outdoor experience. Common facilities include clean bathrooms and showers, picnic areas with tables and grills, fire pits for evening gatherings, and access to nature trails for hiking and biking. Some locations also feature swimming pools, playgrounds, and Wi-Fi connectivity.",
    },
    {
        question: "Are pets allowed at campsites?",
        answer: "Pets are welcome at many of our campsites! We understand that pets are part of the family adventure. Please check the specific campsite's policy regarding pets, including leash requirements, pet waste disposal rules, and any additional charges that may apply.",
    },
    {
        question: "What should I bring to the campsite?",
        answer: "To ensure a comfortable and enjoyable camping experience, pack essential items such as a tent or RV, sleeping bags and bedding, cooking equipment and utensils, suitable clothing for varying weather conditions, personal hygiene products, and any necessary medications. Don't forget to bring entertainment options like board games or books to unwind in the evenings.",
    },
    {
        question: "Can I cancel or modify my campsite reservation?",
        answer: "Yes, you can usually cancel or modify your reservation, subject to the cancellation policy of the campsite. Check the booking confirmation or contact our customer service team for assistance with cancellations or changes to your reservation dates.",
    },
    {
        question: "What if I encounter an emergency during my stay?",
        answer: "Your safety is our priority. In case of an emergency, contact the campsite management or emergency services immediately. Before your trip, familiarize yourself with the campsite's emergency procedures, including evacuation routes and the location of first aid kits. Our staff is trained to assist you during emergencies to ensure your well-being.",
    },
];

const Faq = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl">
                Frequently Asked Questions
            </h1>
            <div className="max-w-5xl mx-auto my-8 md:my-12">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx + 1}`}>
                            <AccordionTrigger className="md:text-2xl text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="md:text-lg">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
