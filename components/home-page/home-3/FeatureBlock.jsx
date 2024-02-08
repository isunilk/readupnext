const featuresData = [
  {
    icon: "/images/icon/icon_124.svg",
    title: "Explore 15,000+ Books",
    subtitle: "In Different Categories",
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "300,000+ Books in Series",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "700+ Recommenders",
  }
  
];

const FeatureBlock = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card-style-seventeen d-flex align-items-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0">{feature.title}</h4>
              {index=0?<p className="m0">{feature.subtitle}</p>:null}
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}
    </>
  );
};

export default FeatureBlock;
