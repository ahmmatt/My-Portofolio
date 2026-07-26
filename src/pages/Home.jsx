import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WelcomeScreen from "../components/WelcomeScreen";
import Profile from "../components/Profile";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceMovie from "../components/ExperienceMovie";
import SocialMedia from "../components/SocialMedia";
import WebsiteAppProject from "../components/WebsiteAppProject";
import FiveDayChallenge from "../components/FiveDayChallenge";
import Achievement from "../components/Achievement";
import ContactTimeline from "../components/ContactTimeline";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section when URL changes (e.g. initial load)
  useEffect(() => {
    const path = location.pathname;
    const sectionId = path === "/" ? "welcome" : path.replace("/", "");
    
    // Using setTimeout to ensure DOM is fully painted before scrolling on initial load
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [location.pathname]);

  // Update URL silently when scrolling through sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              const newPath = id === "welcome" ? "/" : `/${id}`;
              // Update URL without triggering a React Router navigation
              if (window.location.pathname !== newPath) {
                window.history.replaceState(null, "", newPath);
              }
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe all sections that have IDs
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="no-scrollbar h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white font-montserrat overflow-x-hidden">
      <WelcomeScreen />
      <Profile />
      <SkillsEducation />
      <ExperienceMovie />
      <SocialMedia />
      <WebsiteAppProject />
      <FiveDayChallenge />
      <Achievement />
      <ContactTimeline />
    </div>
  );
}

export default Home;
