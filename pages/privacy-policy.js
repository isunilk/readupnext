import Link from "next/link";
import Seo from "../components/common/Seo";
import DefaultFooter from "../components/footer/DefaultFooter";
import Header1 from "../components/header/Header1";

const privacyPolicy = () => {
    return (
        <>
            <Seo
                pageTitle="Privacy Policy"
                descr="website privacy policy"
            />
            <Header1 />
            <div className="container d-flex justify-content-center pt-150 sm-pt-120 ">
                <div className="col-lg-8">
                    <div className="mb-50">
                        <h1 className="fs-1 mb-20 tx-new">Privacy Policy</h1>
                        <span className="fs-15 fst-italic">Last updated: 24th Aug 2023</span>
                        <p className="mt-20">Welcome to ReadUpNext.com. We respect the privacy of our visitors and are committed to preserving your online safety by preserving your privacy at anytime you visit or communicate with our site.</p>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">1. Information We Collect</h2>
                        <ul className="ps-5">
                            <li>General Data: Like many other websites, we collect non-personally identifying information such as browser type, language preference, referring site, and the date and time of each visitor's request.</li>
                            <li>Personal Data: If you sign up for our newsletter, contact us, or participate in other site features, we may require your name, email address, or other personal details.</li>
                        </ul>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">2. Use of Your Information</h2>
                        <p>The information we collect from you may be used to:</p>
                        <ul className="ps-5">
                            <li>Personalize your experience and respond to your individual needs.</li>
                            <li>Improve our website.</li>
                            <li>Administer promotions, surveys, or other site features.</li>
                            <li>Send periodic emails (if you decide to opt-in to our mailing list).</li>
                        </ul>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">3. Cookie Use</h2>
                        <p>We use cookies to enhance the performance and functionality of our site but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</p>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">4. Information Disclosure</h2>
                        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">5. Third Party Links</h2>
                        <p>We may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.</p>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">6. Amazon Affiliate</h2>
                        <p>ReadUpNext.com participates in the Amazon Associates Program. As an Amazon Associate, we earn from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc., or its affiliates.</p>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">7. Consent</h2>
                        <p>By using our website, you hereby consent to our privacy policy and agree to its terms.</p>
                    </div>
                    <div className="mb-50">
                        <h2 className="fs-3 tx-new">8. Changes to our Privacy Policy</h2>
                        <p>If we decide to change our privacy policy, we will post those changes on this page.</p>
                    </div>
                    <div className="mb-150">
                        <h2 className="fs-3 tx-new">9. Contact Us</h2>
                        <p>If you have any questions regarding this privacy policy, you can <Link href="/contact" className='text-decoration-underline'>contact</Link>.</p>
                    </div>
                </div>
            </div>
            <DefaultFooter />
        </>
    )
}

export default privacyPolicy;