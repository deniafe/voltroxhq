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
      </Features>
    </div>
  );
};
