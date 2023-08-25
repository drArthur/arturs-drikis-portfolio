import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../Animation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Icon } from '../Icon';
import { ImageObject } from '../../types';
import * as classes from './style.module.css';

enum LinkType {
    External = 'external',
    Github = 'github',
}

export interface Award {
    category?: string;
    title: string;
    description?: string[];
    image: ImageObject & { linkTo?: string };
    tags?: string[];
    links?: {
        type: LinkType;
        url: string;
    }[];
    visible: boolean;
}

interface AwardProps {
    data: Award;
    index: number;
}

export function Award(props: AwardProps): React.ReactElement {
    return (
        <Animation type="fadeUp" className={classes.Award}>
            <div className={classes.Details}>
                <span className={classes.Category}>{props.data.category}</span>
                <h4 className={classes.Title}>{props.data.title}</h4>
                <div className={classes.Description}>
                    {props.data.description &&
                        props.data.description.length !== 0 &&
                        props.data.description.map((tag, key) => {
                            return <p key={key} dangerouslySetInnerHTML={{ __html: tag }} />;
                        })}
                </div>
                <div className={classes.Links}>
                    {props.data.links &&
                        props.data.links.length !== 0 &&
                        props.data.links.map((link, key) => {
                            return (
                                <a
                                    key={key}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <Icon name={link.type} color="var(--subtext-color)" />
                                    <span>{link.url.replace(/^https?:\/\/www\./, '').split('/')[0]}</span>
                                </a>
                            );
                        })}
                </div>
            </div>
            {props.data.image.src && props.data.image.linkTo && (
                <a href={props.data.image.linkTo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <GatsbyImage
                        className={classes.AwardImageWrapper}
                        imgClassName={classes.AwardImage}
                        objectFit={props.data.image.objectFit}
                        image={props.data.image.src.childImageSharp.gatsbyImageData}
                        alt={props.data.image.alt || `Award ${props.data.title}`}
                    />
                </a>
            )}
            {props.data.image.src && !props.data.image.linkTo && (
                <GatsbyImage
                    className={classes.AwardImageWrapper}
                    imgClassName={classes.AwardImage}
                    objectFit={props.data.image.objectFit}
                    image={props.data.image.src.childImageSharp.gatsbyImageData}
                    alt={props.data.image.alt || `Award ${props.data.title}`}
                />
            )}
        </Animation>
    );
}
