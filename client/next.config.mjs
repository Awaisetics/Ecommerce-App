// Import the Next.js configuration function from the next-with-less package
import withLess from 'next-with-less';

const nextConfig = withLess({
    lessLoaderOptions: {
        lessOptions: {
            modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
            },
            javascriptEnabled: true,
        },
    },
});

export default nextConfig;
