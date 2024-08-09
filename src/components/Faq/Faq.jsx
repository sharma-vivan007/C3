export default function Faq() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div
        id="bootstrap-accordion_12"
        class="panel-group accordionStyles accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <div class="card">
          <div class="card-header" role="tab" id="headingOne">
            <a
              role="button"
              class="panel-title collapsed"
              data-toggle="collapse"
              data-bs-toggle="collapse"
              data-core=""
              href="#collapse1_12"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              <h4 class="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-4">
                What is the Programming Club about?
              </h4>
              <span class="sign mbr-iconfont mobi-mbri-arrow-down"></span>
            </a>
          </div>
          <div
            id="collapse1_12"
            class="panel-collapse noScroll collapse"
            role="tabpanel"
            aria-labelledby="headingOne"
            data-parent="#accordion"
            data-bs-parent="#bootstrap-accordion_12"
          >
            <div class="panel-body">
              <p class="mbr-fonts-style panel-text display-7">
                We’re the coolest coding crew at CTAE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
