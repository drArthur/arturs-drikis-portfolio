import React from 'react';
import {
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    VideoSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Gatsby Theme Portfolio Minimal" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <VideoSection sectionId="video" />
                <ProjectsSection sectionId="projects" heading="Projects" />
                <InterestsSection sectionId="skills" heading="Skills" />

                {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" /> */}

                <ContactSection sectionId="contacts" heading="Let's collaborate!" />
            </Page>
        </>
    );
}
