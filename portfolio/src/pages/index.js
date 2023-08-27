import React from 'react';
import {
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    VideoSection,
    Seo,
    AboutSection,
    AwardsSection,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Arturs Drikis Portfolio" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                {/* <VideoSection sectionId="video" /> */}
                <ProjectsSection sectionId="projects" heading="Projects" />
                <InterestsSection sectionId="skills" heading="Skills" />
                <AboutSection sectionId="about" heading="About Me" /> 
                <AwardsSection sectionId="awards" heading="Education & Awards" />
                <ContactSection sectionId="contacts" heading="Let's collaborate!" />
                
            </Page>
        </>
    );
}
