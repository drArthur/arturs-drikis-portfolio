import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { Slider } from '../../components/Slider';
import { Button, ButtonType } from '../../components/Button';
import { Award } from '../../components/Award';
import { PageSection } from '../../types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function AwardsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAwardsJson.sections[0];

    return (
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Awards]}>
                    {data.awards.map((award, key) => {
                        return award.visible ? <Award key={key} index={key} data={award} /> : null;
                    })}
                </Slider>
                {data.button !== undefined && data.button.visible !== false && (
                    <Animation className={classes.MoreAwards} type="fadeIn">
                        <Button
                            type={ButtonType.LINK}
                            externalLink={true}
                            url={data.button.url}
                            label={data.button.label}
                        />
                    </Animation>
                )}
            </Section>
        </Animation>
    );
}
