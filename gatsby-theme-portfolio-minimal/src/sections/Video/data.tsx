import { graphql, useStaticQuery } from 'gatsby';

interface VideoSectionQueryResult {
    allVideoJson: {
        sections: {
            url: string;
        }[];
    };
}

export const useLocalDataSource = (): VideoSectionQueryResult => {
    return useStaticQuery(graphql`
        query VideoSectionQuery {
            allVideoJson {
                sections: nodes {
                    url
                }
            }
        }
    `);
};
