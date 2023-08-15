const modal = () => {
  const companyLogo = document.querySelector(
    ".org-top-card-primary-content__logo-container img"
  ).src
  const companyTitle = document.querySelector("h1")?.textContent?.trim()
  const companyOverview = document.querySelector(
    ".artdeco-card.org-page-details-module__card-spacing.artdeco-card.org-about-module__margin-bottom p"
  )?.textContent
  const industry = document.querySelector(
    ".artdeco-card.org-page-details-module__card-spacing.artdeco-card.org-about-module__margin-bottom dl"
  ).children[3].textContent
  const employeeNumbers = document.querySelector(
    ".artdeco-card.org-page-details-module__card-spacing.artdeco-card.org-about-module__margin-bottom dl"
  ).children[5].textContent
  const specialties = document
    .querySelector(
      ".artdeco-card.org-page-details-module__card-spacing.artdeco-card.org-about-module__margin-bottom dl"
    )
    .children[12].textContent?.trim()
    ?.split(",")
  const headquarters = document.querySelector(
    ".artdeco-card.org-page-details-module__card-spacing.artdeco-card.org-about-module__margin-bottom dl"
  ).children[8].textContent
  const founded = document.querySelector(
    ".artdeco-card.org-page-details-module__card-spacing.artdeco-card.org-about-module__margin-bottom dl"
  ).children[10].textContent

  const modal = document.createElement("dialog")
  modal.setAttribute(
    "style",
    `
      position: fixed;
      right: 0;
      top: 0;
      height: 760px;
      overflow-y:auto;
      width: 450px;
      background-color: #FFFFFF;
      border-radius: 20px;
      border: none;
  `
  )

  modal.innerHTML = `
      <div>
          <div style="display:flex; justify-content:space-between; padding: 10px 20px; " class="flex items-center">
              <div class="cursor-pointer">
                  <img id='logo' src="Fortmatic.png" />
              </div>
              <div>
                  <img id='setting' src class="cursor-pointer" />
                  <img id='close' src class="cursor-pointer" />
              </div>
          </div>
          <div style="padding: 0 30px; margin-top:10px;">
              <img src=${companyLogo} style="height: 80px; border-radius: 10px;" />
              <h4 style="font-weight: 600; font-size: 28px;">${companyTitle}</h4>
              <div style="font-size:14px; margin-top: 5px;">
              ${companyOverview}
              </div>
              <div style="margin-top: 20px;">
                <div style="display: flex; justify-content: space-between;">
                  <div style="display:flex; align-items:center; gap: 10px;">
                    <img id="employee-no" src="assets/setting.png" />
                    <p style="color: #828282;">Employees</p>
                  </div>
                  <div style="font-size:14px;">
                    ${employeeNumbers?.replace("employees", "")}
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                  <div style="display:flex; align-items:center; gap: 10px;">
                    <img id="industry" src />
                    <p style="color: #828282;">Industry</p>
                  </div>
                  <div style="font-size:14px;">
                    ${industry}
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 15px;">
                  <div style="display:flex; align-items:center; gap: 10px;">
                    <img id="specialties" src />
                    <p style="color: #828282;">Specialties</p>
                  </div>
                  <div id="speciality-items">
                    ${specialties
                      .map((item) => {
                        return `<div style="margin-bottom: 15px; background-color: #F3F4F6; color: #4B5563; font-weight: 600; text-transform: capitalize; padding: 5px; border-radius: 5px; font-size:14px;">${item?.replace(
                          "and",
                          ""
                        )}</div>`
                      })
                      .join("")}
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                  <div style="display:flex; align-items:center; gap: 10px;">
                    <img id="headquarter" src />
                    <p style="color: #828282;">Headquarters</p>
                  </div>
                  <div style="font-size:14px;">
                    ${headquarters}
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                  <div style="display:flex; align-items:center; gap: 10px;">
                    <img id="founded" src />
                    <p style="color: #828282;">Founded</p>
                  </div>
                  <div style="font-size:14px;">
                    ${founded}
                  </div>
                </div>
              </div>
          </div>
      </div>
  `
  document.body.appendChild(modal)

  // setting assets like images
  let logo = document.getElementById("logo")
  logo.src = chrome.runtime.getURL("assets/Fortmatic.svg")
  let setting = document.getElementById("setting")
  setting.src = chrome.runtime.getURL("assets/setting.svg")
  let close = document.getElementById("close")
  close.src = chrome.runtime.getURL("assets/cross.svg")

  let employee = document.getElementById("employee-no")
  employee.src = chrome.runtime.getURL("assets/user.svg")

  let industryEl = document.getElementById("industry")
  industryEl.src = chrome.runtime.getURL("assets/industry.svg")

  let specialtiesEl = document.getElementById("specialties")
  specialtiesEl.src = chrome.runtime.getURL("assets/spciality.svg")

  let headquarterEl = document.getElementById("headquarter")
  headquarterEl.src = chrome.runtime.getURL("assets/gps.svg")

  let foundedEL = document.getElementById("founded")
  foundedEL.src = chrome.runtime.getURL("assets/founded.svg")
}

const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  console.log("[content.js]. Message received", msg)

  if (msg.type === "show-modal") {
    modal()

    let close = document.getElementById("close")
    const modalEl = document.querySelector("dialog")
    modalEl.showModal()

    close.onclick = () => {
      modalEl.close()
    }
  }
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener)
