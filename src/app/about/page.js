import { Navbar } from '@/component/Navbar/Navbar'
import Link from 'next/link'

const about = () => {
  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center my-5 about">
        <div className='col-lg-8'>
          <div className='mb-4'>
            <h1 className='tx-new fw-bold mb-20 fs-1'>About Us</h1>
            <h2 className='fs-3'>The Return of a Favorite</h2>
            <p>Remember <Link href="http://www.yournextread.com" rel='nofollow' target="_blank" className='text-decoration-underline' style={{ color: '#c475e3' }}>YourNextRead.com?</Link> Your good old go-to book recommendation site that caught the eyes of media giants? </p>
            <p>
              Featured in the likes of <Link rel='nofollow' target="_blank" href="https://www.forbes.com/sites/suwcharmananderson/2012/04/17/do-book-recommendation-engines-work/?sh=3594347e2e1c" className='text-decoration-underline' style={{ color: '#c475e3' }}>Forbes</Link>, <Link rel='nofollow' target="_blank" href="https://techcrunch.com/2010/07/16/so-who-won-the-techcrunch-europe-summer-pitch-battle/" className='text-decoration-underline' style={{ color: '#c475e3' }}>TechCrunch</Link>, <Link rel='nofollow' target="_blank" href="https://www.theguardian.com/technology/2010/jul/03/internet-mini-movies-adam-joe" className='text-decoration-underline' style={{ color: '#c475e3' }}>The Guardian</Link>, <Link rel='nofollow' target="_blank" href="https://www.huffpost.com/entry/college-admissions-how-to_n_1284630" className='text-decoration-underline' style={{ color: '#c475e3' }}>Huffpost</Link>, <Link rel='nofollow' target="_blank" href="https://lifehacker.com/yournextread-tells-you-what-book-you-should-read-next-5566930" className='text-decoration-underline' style={{ color: '#c475e3' }}>Lifehacker</Link>, and many more, we were the talk of the literary town.
            </p>
            <p>Well, we've turned a new page! </p>
            <p>With a fresh identity and the same passion, we're back as ReadUpNext.com, ready to guide you to your next recommended read.</p>
          </div>
          <div className='mb-4'>
            <h2 className='fs-3 tx-new'>Why the New Look?</h2>
            <p>The world of books is ever-changing, just like its readers. We wanted to stay in tune with what you, the modern reader, are looking for. </p>
            <p>So, we’ve given ourselves a bit of a makeover and are even prepping to launch an AI book buddy (an <strong>AI book recommendation engine</strong>) to help you find your next read. </p>
            <p>All in a day’s work to make sure your visit here is top-notch!</p>
          </div>
          <div className='mb-4'>
            <h2 className='fs-3 mb-20 tx-new'>Our Ever Expanding Bookshelf</h2>
            <ul>
              <li className='mb-10'><Link style={{ color: '#c475e3' }} href="https://www.readupnext.com/series"><strong>6,000+ Series in Order</strong>:</Link> All your favorite book series, neatly organized from start to finish, with new ones added regularly.</li>
              <li className='mb-10'><Link style={{ color: '#c475e3' }} href="https://www.readupnext.com/people"><strong>750+ Influential People</strong>:</Link> See what well-known figures are reading. Our growing list continues to capture recommendations from more and more influential personalities.</li>
              <li className='mb-10'><Link style={{ color: '#c475e3' }} href="https://www.readupnext.com/author"><strong>11,000+ Authors in Order</strong>:</Link> From their first book to their latest, find an expanding collection of authors and their complete works.</li>
              <li className='mb-10'><Link style={{ color: '#c475e3' }} href="https://www.readupnext.com/list"><strong>1,300+ Categories/Lists</strong>:</Link> Whether you're into romance, thrillers, or something niche, our ever-growing lists are here to cater to your reading whims.</li>
              <li className='mb-10'><Link style={{ color: '#c475e3' }} href="https://www.readupnext.com/quotes"><strong>Bookish Quotes</strong>:</Link> Browse our collection of standout quotes from your favorite books and authors. Perfect for a quick dose of literary inspiration.</li>
            </ul>
            <p className='mt-30'>And that's not all. We're always on the hunt to add more to our collection, making sure you've got plenty of choices.</p>
          </div>
          <div className='mb-4'>
            <h2 className='fs-3 tx-new'>Our North Star</h2>
            <p>At our core, it's simple: We're here for you, the book lover. We want to make your quest for that next page-turner as smooth as flipping to the next chapter.</p>
            <p>Books? They're portals to incredible worlds. Think of us as your trusty guide on this epic literary journey.</p>
          </div>
          <div className='mb-4'>
            <h2 className='fs-3 tx-new'>Join Our Bookish Family</h2>
            <p>Books are more than just words on a page; they're about community. Dive into our world, stay updated through our social channels, and be a part of our story.</p>
            <p>And hey, if you’ve got thoughts or suggestions to make things even better around here, do <Link href="https://www.readupnext.com/contact" className='text-decoration-underline' style={{ color: '#c475e3' }}>reach out</Link>.</p>
            <p>We're always up for a chat.</p>
          </div>
          <div className='mb-4'>
            <h2 className='fs-3 tx-new'>Follow Us on Social Media</h2>
            <ul className='list-unstyled'>
              <li><Link className='socialMediaLink' href="https://www.instagram.com/readupnext/" target='_blank'><i className="bi bi-instagram"></i><span className='ms-2'>Instagram</span></Link></li>
              <li><Link className='socialMediaLink' href="http://www.pinterest.com/readupnext" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
              </svg><span className='ms-2'>Pinterest</span></Link></li>
              <li>
                <Link className='socialMediaLink' href="https://twitter.com/readupnext" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                  <span className='ms-2'>Twitter</span>
                </Link>
              </li>
              <li><Link className='socialMediaLink' href="https://www.facebook.com/readupnext" target='_blank'><i className="bi bi-facebook"></i><span className='ms-2'>Facebook</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default about