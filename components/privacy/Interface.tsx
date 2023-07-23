import React from "react"
import { Section } from '@/components/global/Section'


// const privacyPolicyContent = [
  const privacyPolicyContent = [
    {
      title: "",
      content: (
        <p>
          At VOLTROX HQ LLC, we are committed to protecting the privacy and
          security of our customers and website visitors. This privacy policy
          explains how we collect, use, and disclose personal information in
          connection with our business operations, including the technology
          solutions we offer to other companies as well as our own internal
          products.
        </p>
      ),
    },
    {
      title: "Collection of Personal Information",
      content: (
        <div>
          <p>
            We may collect personal information from our customers and website
            visitors in several ways, including:
          </p>
          <ol>
            <li>
              1. Information you provide directly to us: When you contact us, request
              a demo, or sign up for our services, you may be asked to provide
              personal information, such as your name, email address, phone
              number, company name, job title, and billing information.
            </li>
            <li>
              2. Information we collect automatically: We may also collect certain
              information about your use of our website and services automatically,
              such as your IP address, browser type, device type, and operating
              system.
            </li>
            <li>
              3. Information we receive from third parties: We may receive personal
              information about you from third-party sources, such as social media
              platforms, marketing partners, or data brokers.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "Use of Personal Information",
      content: (
        <div>
          <p>
            We may use personal information for the following purposes:
          </p>
          <ol>
            <li>
              1. To provide and improve our services: We use personal information to
              fulfill our contractual obligations to our customers, provide
              customer support, and improve the functionality and performance of
              our products.
            </li>
            <li>
              2. To communicate with you: We may use personal information to send you
              important updates about our services, respond to your inquiries, and
              provide you with marketing materials and other communications that
              may be of interest to you.
            </li>
            <li>
              3. To protect our rights and interests: We may use personal information
              to protect our legal rights and interests, including detecting and
              preventing fraud, enforcing our agreements, and complying with legal
              obligations.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "Disclosure of Personal Information",
      content: (
        <div>
          <p>
            We may share personal information with third parties in the following
            circumstances:
          </p>
          <ol>
            <li>
              1. With service providers: We may share personal information with
              third-party service providers who assist us in providing our
              services, such as hosting providers, payment processors, and
              marketing partners.
            </li>
            <li>
              2. With affiliated companies: We may share personal information with
              our affiliated companies, including subsidiaries and parent
              companies, for business purposes.
            </li>
            <li>
              3. With law enforcement or regulatory authorities: We may share personal
              information in response to a legal request, court order, or
              government investigation.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "Security and Retention of Personal Information",
      content: (
        <p>
          We use reasonable security measures to protect personal information from
          unauthorized access, disclosure, and destruction. We also retain personal
          information for as long as necessary to fulfill the purposes for which it
          was collected, or as required by law.
        </p>
      ),
    },
    {
      title: "Changes to this Privacy Policy",
      content: (
        <p>
          We may update this privacy policy from time to time to reflect changes in
          our business practices or legal requirements. We encourage you to review
          this policy periodically to stay informed about how we are protecting
          your privacy.
        </p>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <p>
          If you have any questions or concerns about this privacy policy, please
          contact us at work@voltroxhq.com
        </p>
      ),
    },
  ];
  
// ];

const cookiesPolicyContent = [
  {
    title: "",
    content: (
      <p>
        {`This Cookie Policy ("Policy") describes the use of cookies and similar
        technologies by Voltrox HQ LLC ("we," "us," or "our"), a marketing and
        technology service company. This Policy explains how we collect, use,
        and protect your personal information through the use of cookies when
        you visit our website or use our services.`}
      </p>
    ),
  },
  {
    title: "1. What are cookies?",
    content: (
      <p>
       {` Cookies are small text files that are placed on your device (computer,
        smartphone, or tablet) when you visit a website. They help websites
        recognize your device and remember certain information about your visit.
        Cookies can be "session cookies" or "persistent cookies." Session
        cookies are temporary and are deleted when you close your browser, while
        persistent cookies remain on your device for a longer period or until
        you delete them manually.`}
      </p>
    ),
  },
  {
    title: "2. How we use cookies",
    content: (
      <div>
        <p>We use cookies and similar technologies for various purposes,
        including:</p>
        <ul>
          <li>
            a. Essential cookies: These cookies are necessary for the functioning
            of our website and enable you to navigate our site and use its
            features. Without these cookies, certain services may not be
            available to you.
          </li>
          <li>
            {`b. Performance and analytics cookies: These cookies help us understand
            how visitors interact with our website by collecting anonymous
            information. We use this data to improve our website's performance,
            functionality, and user experience.`}
          </li>
          <li>
            c. Advertising and targeting cookies: We may use these cookies to
            deliver personalized advertisements and content based on your
            interests and browsing behavior. These cookies help us show you
            relevant ads and measure the effectiveness of our marketing
            campaigns.
          </li>
          <li>
            d. Third-party cookies: We may allow third-party service providers to
            place cookies on our website to assist us in analyzing and improving
            our services. These third parties may have their own privacy
            policies and cookie practices, which we encourage you to review.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. Cookie consent",
    content: (
      <p>
        By using our website, you consent to the placement of cookies on your
        device, as described in this Policy. You can manage or disable cookies
        by adjusting your browser settings. Please note that disabling certain
        cookies may affect the functionality of our website or limit your access
        to certain features.
      </p>
    ),
  },
  {
    title: "4. Your choices",
    content: (
      <p>
       {` You have the right to control and manage your cookie preferences. Most
        web browsers allow you to accept, decline, or delete cookies. You can
        usually find these settings in the "options" or "preferences" menu of
        your browser. Please refer to your browser's help documentation for
        more information on managing cookies.`}
      </p>
    ),
  },
  {
    title: "5. Updates to this policy",
    content: (
      <p>
        {`We may update this Cookie Policy from time to time to reflect changes in
        our practices or for legal or regulatory reasons. We encourage you to
        review this Policy periodically for any updates. The "Effective Date" at
        the top of this Policy indicates when it was last revised.`}
      </p>
    ),
  },
  {
    title: "6. Contact us",
    content: (
      <p>
        If you have any questions or concerns about this Cookie Policy or our
        use of cookies, please contact us at work@voltroxhq.com. By continuing
        to use our website, you acknowledge that you have read and understood
        this Cookie Policy and consent to the use of cookies as described
        herein.
      </p>
    ),
  },
];



// Privacy Policy Component
const PrivacyPolicy = () => {
  return (
    <div>
      {privacyPolicyContent.map((section, index) => (
        <div key={index}>
          <h3 className="mb-6 text-2xl md:mb-7 md:text-4xl" >{section.title}</h3>
          <div className="mx-auto text-sm text-primary-text mb-6 md:mb-7 md:text-lg">{section.content}</div>
        </div>
      ))}
    </div>
  );
};

// Cookies Policy Component
const CookiesPolicy = () => {
  return (
    <div>
      {cookiesPolicyContent.map((section, index) => (
        <div key={index}>
          <h3 className="mb-6 text-2xl md:mb-7 md:text-4xl" >{section.title}</h3>
          <div className="mx-auto text-sm text-primary-text mb-6 md:mb-7 md:text-lg" >{section.content}</div>
        </div>
      ))}
    </div>
  );
};

export const Interface = () => {
  return (
      <div className="pt-navigation-height max-w-[80rem] mx-[2rem] md:mx-auto mb-[16rem] md:mb-[8rem] mt-[2rem] md:mt-[8rem]">
        <h2 id="hero-section" className="mb-6 text-4xl md:mb-7 md:text-7xl" >Privacy Policy</h2>
        <PrivacyPolicy />
        <h2 className="mb-6 mt-[4rem] text-4xl md:mb-7 md:mt-[8rem] md:text-7xl">Cookies Policy</h2>
        <CookiesPolicy />
      </div>
    
  );
};
