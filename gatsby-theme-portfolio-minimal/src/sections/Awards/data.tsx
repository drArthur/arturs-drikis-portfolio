import { graphql, useStaticQuery } from 'gatsby';
import { Award } from '../../components/Award';

interface AwardsSectionQueryResult {
    allAwardsJson: {
        sections: {
            button: {
                label: string;
                url: string;
                visible: boolean;
            };
            awards: Award[];
        }[];
    };
}

export const useLocalDataSource = (): AwardsSectionQueryResult => {
    return useStaticQuery(graphql`
        query AwardsSectionQuery {
            allAwardsJson {
                sections: nodes {
                    button {
                        label
                        url
                        visible
                    }
                    awards {
                        category
                        description
                        image {
                            alt
                            linkTo
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 800)
                                }
                            }
                            objectFit
                        }
                        links {
                            type
                            url
                        }
                        tags
                        title
                        visible
                    }
                }
            }
        }
    `);
};
