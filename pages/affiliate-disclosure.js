import React from 'react'
import Seo from "../components/common/Seo";
import Header1 from "../components/header/Header1";
import DefaultFooter from "../components/footer/DefaultFooter";


const affiliateDisclosure = () => {
    return (
        <>
            <Seo pageTitle="Affiliate Disclosure" />
            {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
            <Header1 />


            <div className='container d-flex justify-content-center pt-120'>
                <div className="col-lg-8">
                    <div className='mt-40 mb-40'>
                        <h1 className='fs-1 tx-new'>Affiliate Disclosure</h1>
                        {/* <h2 className='fs-2 tx-new'>
                            Affiliate Disclosure
                        </h2> */}
                        <p className='fs-15'>
                            At ReadUpNext.com, we aim to provide our readers with comprehensive, reliable, and valuable content, especially when it comes to guiding you to the perfect book or reading list. To help maintain our site and support our work, we've partnered with the Amazon Associates Program, among other potential affiliate programs.
                        </p>
                    </div>

                    <div className='mt-40 mb-40'>
                        <h2 className='fs-2 tx-new'>
                            How It Works
                        </h2>
                        <p className='fs-15'>
                            When you click on a link that directs you to Amazon from our website and make a purchase, we may receive a small commission, at no extra cost to you. This commission helps us fund ReadUpNext.com and continue to provide our readers with quality content.
                        </p>
                    </div>
                    <div className='mt-40 mb-40'>
                        <h2 className='fs-2 tx-new'>
                            Our Commitment
                        </h2>
                        <p className='fs-15'>
                            Our editorial content, including book recommendations and reviews, is not influenced by these affiliations or partnerships. We always strive to recommend books and create lists based on their merit, quality, and the value they provide to our readers. The presence of an affiliate link doesn't influence our editorial decisions; our priority is to serve our readers with trustworthy and unbiased content.
                        </p>
                    </div>
                    <div className='mt-40 mb-100'>
                        <h2 className='fs-2 tx-new'>
                            Your Trust Is Important
                        </h2>
                        <p className='fs-15'>
                            We understand the trust you place in us, and we take our responsibility as curators and reviewers seriously. We continuously strive to maintain the highest standards of integrity and transparency.
                        </p>
                        <p className='fs-15'>If you have any questions about our affiliate partnerships or any content on ReadUpNext.com, please don't hesitate to ([contact us] link to contact us page). We appreciate your understanding and continued support.</p>
                    </div>
                </div>
            </div>

            {/* Footer Se ctino  */}
            <DefaultFooter />
        </>
    )
}

export default affiliateDisclosure;