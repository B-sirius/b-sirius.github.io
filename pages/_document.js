import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#000" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://s2.loli.net/2023/01/18/42YTZxzePtR7jy9.png" />
                <meta property="og:url" content="https://b-sirius.github.io" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}