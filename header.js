const generateHeader = (name, phone, email, addrLine1, addrLine2) => {
    let resumeHeader = document.getElementById('resumeHeader');
    resumeHeader.innerHTML =
        `<div style="width:100%">
            <div style="width:100%; text-align:center;">
                <div style="display:inline; font-weight: bold; font-size: 1.666666666666667em;">
                    <span>${name}</span>
                </div>
                <div class="doubleUnderline"></div>
            </div>
            <div style="float:right; width:50%; text-align:right;">
                <div>${phone}</div>
                <div>${email}</div>
            </div>
            <div style="float:left; width:50%; text-align:left;">
                <div>${addrLine1}</div>
                <div>${addrLine2}</div>
            </div>
        </div>`
}