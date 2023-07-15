"use client";

import { Section } from "../global/Section";
import { Features } from "../global/features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
  AssignToIcon,
  AddLabels,
  BacklogIcon
} from "../global/icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <div className="w-screen mt-[12rem] md:mt-[16rem] mx-auto">
      <Features color="194,97,254" colorDark="53,42,79">
        <Features.Main
          title={
            <>
              We Shine Light
              <br />
              On Your Ideas
            </>
          }
          image="img/roadmap.webp"
          text="Our agile development methodology allows us to adapt to evolving needs and deliver high-quality software within agreed timelines."
        />
        {/* <Features.Grid
          features={[
            {
              icon: ParentSubIcon,
              title: "Custom Software",
              text: "We specialize in developing custom software solutions tailored to your specific business needs. ",
            },
            {
              icon: AutomatedBacklogIcon,
              title: "Web Development",
              text: "Our web development services encompass front-end and back-end development, ensuring visually appealing and functional websites.",
            },
            {
              icon: WorkflowsIcon,
              title: "Software Integration",
              text: "We specialize in integrating software systems, ensuring seamless data exchange and communication between different applications.",
            },
            {
              icon: CustomViewsIcon,
              title: "Mobile App Development",
              text: "We create user-friendly and feature-rich mobile applications for iOS and Android platforms.",
            },
            {
              icon: DiscussionIcon,
              title: "Consulting.",
              text: "We offer consulting services to help businesses make informed decisions regarding technology solutions.",
            },
            {
              icon: IssuesIcon,
              title: "UI/UX Design",
              text: "We focus on delivering exceptional user experiences through intuitive and visually appealing user interfaces.",
            },
            {
              icon: AssignToIcon,
              title: "Branding Services.",
              text: "We work closely with our clients to capture their vision and values, ensuring that the branding reflects their unique identity and resonates with their target audience.",
            },
            {
              icon: AddLabels,
              title: "3D Modeling and Animation",
              text: " Whether you need product visualizations, architectural renderings, character modeling, or interactive 3D experiences, we can bring your ideas to life.",
            },
            {
              icon: BacklogIcon,
              title: "Digital Marketing Services",
              text: " offers a comprehensive range of digital marketing services to help businesses establish a strong online presence, increase brand visibility, and drive targeted traffic to their websites.",
            },
          ]}
        /> */}
        {/* <Features.Cards
          features={[
            {
              image: "/card-board.webp",
              imageClassName: "top-[55%] md:top-[40%] w-[200%]",
              title: "List and board",
              text: "Switch between list and board layout to view work from any angle.",
            },
            {
              image: "/card-views.webp",
              imageClassName:
                "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
              title: "Make it yours",
              text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
            },
          ]}
        /> */}
      </Features>
    </div>
  );
};
