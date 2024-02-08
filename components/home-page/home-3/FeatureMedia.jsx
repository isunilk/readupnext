import Link from "next/link"

export const FeatureMedia = () => {
  return (
    <div>
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="col-md-1" href="https://www.forbes.com/sites/suwcharmananderson/2012/04/17/do-book-recommendation-engines-work/?sh=3594347e2e1c">
          <img src="/images/icon/forbes.svg" alt="" className="w-100" />
        </Link>
        <Link className="col-md-1" href="https://techcrunch.com/2010/07/16/so-who-won-the-techcrunch-europe-summer-pitch-battle/ ">
          <img src="/images/icon/techcrunch.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://www.theguardian.com/technology/2010/jul/03/internet-mini-movies-adam-joe">
          <img src="/images/icon/theguardian.svg" alt="" />
        </Link>
        {/* <Link className="col-md-1" href="https://bookriot.com/readers-advisory-tools/">
          <img src="/images/icon/bookriot.webp" alt="" />
        </Link> */}
        <Link className="col-md-1" href="https://www.huffpost.com/entry/college-admissions-how-to_n_1284630">
          <img src="/images/icon/huffpost.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://www.howtogeek.com/131032/what-you-said-how-you-find-new-books/">
          <img src="/images/icon/how-to-geek.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://lifehacker.com/yournextread-tells-you-what-book-you-should-read-next-5566930">
          <img src="/images/icon/lifehacker.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://www.buzzfeed.com/christinalan/ways-to-relieve-your-boredom-that-wont-spoil-y">
        <img src="/images/icon/buzzfeed.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://preply.com/en/blog/14-daily-english-exercises-to-improve-your-skills/">
        <img src="/images/icon/preply.svg" alt="" />
        </Link>
        {/* <Link className="col-md-1" href="https://www.bustle.com/articles/20500-10-websites-to-help-you-find-your-new-favorite-book">
        <img src="/images/icon/bustle.svg" alt="" />
        </Link> */}
        <Link className="col-md-1" href="https://www.hercampus.com/school/columbia-barnard/perfect-websites-procrastination/">
        <img src="/images/icon/hercampus.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://goodereader.com/blog/e-book-news/the-best-websites-to-discover-new-books">
        <img src="/images/icon/goodreader.svg" alt="" />
        </Link>
        <Link className="col-md-1" href="https://ed.ted.com/on/FpXcrDC2#digdeeper">
        <img src="/images/icon/teded.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}
