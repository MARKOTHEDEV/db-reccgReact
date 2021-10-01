import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";

const Departments = () => {
  return (
    <div>
      <Header bgImage={heroBg3} homeTitle="All Departments" />
      <DepList
        title="ROYAL AMBASSADORS (USHERING)"
        desc=" The Ushering Department’s core responsibility is to ensure and maintain orderliness and peace in the church; thereby creating an atmosphere that is conducive to the move of the Holy Ghost and which God Himself would be proud of."
      />

      <DepList
        title="INFORMATION TECHNOLOGY (I.T)"
        desc="  This Department uses its mastery of technology to support the church’s administrative functions by acquiring, developing,and managing data relevant to the church.It also oversees the development of and manages the church’s website. It is vital in ensuring the smooth running of the Church Administration."
      />

      <DepList
        title="SANCTUARY KEEPERS"
        desc="The Sanitation Team ensures the constant cleanliness of the church and her surroundings."
      />

      <DepList
        title="DIRECTORATE OF CHRISTIAN EDUCATION"
        desc="  This department is mandated to ensure the smooth running and continued nourishment of the Church through teaching. It will organize classes that cater to the specific spiritual needs of our converts and the different stages of a believer in the church of God.This will include but not limited to the adult & children Sunday school classes, and the New Believer’s Classes and Water Baptismal Classes.The department will also prepare and train intending workers for service, and build up the existing body of workers."
      />

      <DepList
        title="HIS PRESENCE COMMUNITY RELATIONS INITIATIVE (HPCRI)."
        desc=" The mission of House of His presence community relations initiative is to touch the lives of people within the community by encouraging integration, providing services, and partnering with other organizations within the community; all this, with the aim of winning souls for Christ. HPCRI will organize food bank drive as often as possible every year at the church in order to donate nonperishable food items to the community."
      />

      <DepList
        title="VISITATION – THE CARING HEART MINISTRY"
        desc=" The mandate of the Visitation Department is in line with Paul’s words to the church in Acts 15:36.The Visitation Department acts as a channel for conveying the love and affection of the church’s leadership to the needy and those requiring special attention."
      />

      <DepList
        title="WELCOMING"
        desc=" This Team works hand in hand with the FOLLOW up team.They are responsible for welcoming all first timers immediately after the service.They hand them over to the Follow Up team."
      />

      <DepList
        title="GREETERS"
        desc="This Team works hand in hand with the Royal Ambassadors.They are responsible for greeting every member as they walk in through the door.They hand them over to the Ushers."
      />

      <DepList
        title="WISDOM GROUP (ELDERS)"
        desc="This Natural group will coordinate the affairs of all elders.They will meet as agreed and pray for their homes and the church.They will advise the Pastor as at when due.They will determine the best ways to meet specific needs,or requests for assistance by their members within the church."
      />

      <DepList
        title="WELFARE (HOSPITALITY)"
        desc=" The Welfare Team performs care and hospitality issues that arises within the church.They determine the best ways to meet specific needs, or requests for assistance by members or other departments within the church."
      />

      <DepList
        title="MARRIAGE COUNSELING"
        desc=" This Team will be responsible for counseling intending couples and married couples in accordance with the word of God.They will also mentor all youth who have attained marriageable age."
      />

      <DepList
        title="FINANCE"
        desc=" The Finance Department is responsible for all funds collected, lodged and disbursed. It is also their responsibility to provide financial reports,work with the Pastor to establish controls over the church’s funds and financial resources,and liaise with relevant external parties on behalf of the church."
      />

      <DepList
        title="POLITICAL RELATIONS DEPARTMENT"
        desc=" The Political Relations department is comprised of individuals who have a strong interest in the areas of community and political relations. This department reviews, researches, and educates the congregation on various related issues and acts as a voice in the community regarding political issues and concerns."
      />

      <DepList
        title="CATERING DEPARTMENT"
        desc="  The Catering Department is a department that handles all food functions for the church. This department is comprised of experienced chefs and homemakers. While experience is well appreciated,it is not mandatory.The staff of the Catering Department is more than willing to train and cultivate anyone to reach their greatest potential in this department."
      />

      <DepList
        title="SECURITY DEPARTMENT"
        desc=" The Security Department of RCCG House of His presence maintains safety for all members and visitors while attending services.The Security Department patrols the parking lot and surrounding streets to ensure safety.The Security Department also monitors all activities during service and is responsible for securing of the church building after each service."
      />
    </div>
  );
};

export default Departments;

// child comp

const DepList = ({ title, desc }) => {
  return (
    <div className="py-3 bg-secondary mt-5">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div></div>
          <div
            className="col-span-2 lg:rounded-tl-full lg:rounded-bl-full py-10 px-5 lg:px-16 text-white"
            style={{ backgroundColor: "#000000" }}
          >
            <h3 className="font-semibold text-lg pb-2">{title}</h3>
            <p className="text-justify">{desc}</p>

            <div className="flex justify-end">
              <Link
                to="!#"
                className="border font-semibold px-5 py-2 mt-5 text-white"
              >
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
