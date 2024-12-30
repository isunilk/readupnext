import Head from 'next/head'
import React from 'react'

export const Seo = ({ pageTitle, descr, metaTitle, canonical, ogImage }) => {
    return (
        <Head>
            <title>{`${pageTitle} | Readupnext.com`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="kw-vrpsX8wC6a9o_YVRcf0f6cpJk-dmn9ANV4eSex9Y" />
            <meta name="title" content={`${metaTitle} | ReadUpNext.com`}></meta>
            <meta name="twitter:title" content={`${pageTitle} | Readupnext.com`} />
            <meta name="twitter:description" content={descr} />
            <meta name="description" content={descr} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={pageTitle} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:secure_url" content={ogImage} />
            <meta property="og:image:alt" content={pageTitle} />
            <link rel="canonical" href={"https://www.readupnext.com" + canonical} />
        </Head>
    )
}
