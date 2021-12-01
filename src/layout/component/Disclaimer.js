import Contact from "./Contact";
import Gif5 from "./Gif5.webp";
import NavBar from "./NavBar";
function Disclaimer(){
    let disclaimerStyle = {
        marginLeft: "450px",
      };
    return(
<div>
    {/* <NavBar/> */}
  <div className="container mt-5">
  <div className="row">
    <div className="col-sm-8">
      <h1 id="disclaimer" className="mb-5" style={disclaimerStyle}>
        DISCLAIMER
      </h1>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-info mt-3 "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Transplant Disclaimer
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              It has been brought to our notice that some people have
              received emails purporting to offer money for kidney
              donation and misusing the name of Care Crew Hospitals. The
              public in general and kidney patients in particular are
              hereby cautioned that these are fake phishing emails and
              that these mails are neither sent by Care Crew  Hospitals nor
              is involved in any such scheme. These fraudulent and
              suspicious emails are only a scheme to extract payments from
              gullible individuals by misleading them using the names of
              reputed hospitals. The Care Crew  Hospitals transplant program
              is carried out in accordance with the Transplantation of
              Human Organs Act 1994 with amendments thereafter, and the
              Transplantation of Human Organs and Tissues Rules 2014. Any
              buying and selling of human organs are illegal and
              punishable under the law. The general public is hereby
              warned to report such emails to the concerned authorities
              and not to deal/engage in any manner with any person/agency
              offering any benefits in cash or kind for kidney donation.
              Care Crew Hospitals does not solicit donation of human organs
              from the general public through social media or through
              phone calls. Care Crew  Hospitals is taking appropriate legal
              action in this matter.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-info collapsed  mt-3"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Recruitment Disclaimer
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div class="card-body">
            Care Crew  Hospitals Enterprise Limited (“Company”) brings to
              your attention that certain persons are circulating/posting
              fake advertisements inviting applications from candidates
              for employment in the Company through e-mails, WhatsApp
              messages and on leading job portals. Such advertisements
              demanding payments through various online platforms and
              portals in exchange for appointments for interviews and
              offer letters are fraudulent and the Company categorically
              states that it does not entertain such practices in its
              recruitment process. These persons do not represent the
              Company in any manner whatsoever.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-info collapsed  mt-3"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Price Transparency Disclaimer
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div class="card-body">
              The Hospital Price Transparency Final Rule contains no
              provisions that address waivers or hardship exemptions, and,
              irrespective of circumstances, CMS does not anticipate any
              delay in the effective date of the Hospital Price
              Transparency Final Rule requirements for any hospitals with
              respect to which the regulation applies. In the Final Rule,
              we took into consideration and agreed with commenters’
              concern regarding burden with respect to a proposed January
              1, 2020 effective date and, consequently, finalized a policy
              to delay the effective date to January 1, 2021. We believe
              this provided hospitals with sufficient time to collect and
              display the standard charge information as required under
              this rule.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 mt-5">
      <img src={Gif5} width="500px" height="300px" />
    </div>
  </div>
  </div>
  <Contact/>
  </div>
    )
}
export default Disclaimer;