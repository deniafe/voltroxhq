import React from "react"

export const Interface = () => {

  const termsOfService = [
    {
      title: "Initial Consultation:",
      text: "Our first call with clients includes a complimentary consultation lasting up to 15 minutes. For any consultation time exceeding the initial 15 minutes, a charge of $200 per hour will apply. This fee will be credited towards the service fee if you decide to enroll for our services. However, please note that the service fee is non-refundable.",
    },
    {
      title: "Service Fee Commitment:",
      text: "Upon onboarding with VOLTROX HQ LLC, clients are required to commit to a minimum of 40% of the total service fee. The remaining balance can be paid through two installments, subject to the terms outlined in the service contract.",
    },
    {
      title: "Service Agreement:",
      text: "All clients must sign a comprehensive service agreement that clearly defines the scope of work, deliverables, payment terms, and other relevant conditions. This agreement serves as a legally binding contract between VOLTROX HQ LLC and the client, ensuring transparency and mutual understanding of the services provided.",
    },
    {
      title: "Payment Terms:",
      text: "Payments for services rendered by VOLTROX HQ LLC must be made according to the agreed-upon schedule specified in the service contract. Failure to adhere to the payment schedule may result in additional charges or consequences as outlined in the contract.",
    },
    {
      title: "Intellectual Property:",
      text: "Any intellectual property developed during the course of our services will remain the exclusive property of VOLTROX HQ LLC until full payment has been received. Upon payment in full, clients may obtain rights as specified in the service contract.",
    },
    {
      title: "Termination of Services:",
      text: "Both parties reserve the right to terminate services as per the terms specified in the service contract. Any fees owed or services rendered up to the date of termination will be payable in full.",
    },
    {
      title: "Confidentiality:",
      text: "VOLTROX HQ LLC and the client mutually agree to maintain strict confidentiality regarding any sensitive information shared during the provision of services.",
    },
    {
      title: "Liability:",
      text: "While VOLTROX HQ LLC strives to deliver high-quality services, we shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services.",
    },
    {
      title: "Modification of Terms:",
      text: "VOLTROX HQ LLC reserves the right to modify these Terms of Service at any time. Any changes will be communicated to clients and shall be effective from the date of notification.",
    },
  ];
  
  return (
      <div className="mb-[12rem] md:mb-[1rem] pt-navigation-height"
      >
        <div className="mx-[2rem] md:mx-[12rem] mb-[8rem] md:mb-[8rem] mt-[2rem] md:mt-[8rem]">
          <h1 id="hero-section" className="mb-6 text-4xl md:mb-7 md:text-7xl">
            Terms of Service for VOLTROX HQ LLC
          </h1>
          <div>
            {termsOfService.map((term, index) => (
              <div key={index}>
                <h3 className="font-medium mx-auto text-lg text-primary-text mb-2 md:mb-2 md:text-2xl">{term.title}</h3>
                <p className="mx-auto text-sm text-primary-text mb-6 md:mb-7 md:text-lg">{term.text}</p>
              </div>
            ))}
          </div>
          {/* <p className="mx-auto  text-sm text-primary-text md:mb-7 md:text-lg">
          At <span className="font-medium">Voltrox HQ, LLC,</span>{` we believe that work should be both productive and fun. We're a team of passionate 
          individuals who are dedicated to revolutionizing the world with our innovative ideas and impeccable 
          dance moves`}
          </p> */}
        </div>
      </div>
    
  );
};
