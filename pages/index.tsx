import Layout from '@components/layout';
import PlaceList from '@components/placeList';

import httpAdapter from '@utils/httpAdapter';

export const Home = ({ data }) => {
    return (
        <Layout>
            <PlaceList places={data} />
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await httpAdapter.get('api');
    return {
        props: {
            ...data
        }
    };
}

export default Home;
