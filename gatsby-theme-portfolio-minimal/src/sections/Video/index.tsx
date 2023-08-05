import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function VideoSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const videoUrl = response.allVideoJson.sections[0].url; // Assuming the video URL is fetched from data.tsx

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.VideoContainer}>
                    <iframe
                        className={classes.Video}
                        src={`https://www.youtube.com/embed/${videoUrl}`}
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        // allowfullscreen
                    />
                </div>
            </Section>
        </Animation>
    );
}
