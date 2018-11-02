import {
  fullWidthStyle,
  printTextStyle,
  nameTextStyle,
  titleTextStyle,
  formatCertName,
  formatCertID,
  formatDate,
  IMG_LOGO_NP,
  IMG_LOGO_SEED,
  IMG_SIG_TANG_KIN_FEI,
  IMG_CERTIFICATE_SEAL,
  IMG_SIG_TI_BOON_WEE,
  IMG_SIG_CHAN_TEE_SENG
} from "../common";

const Template = certificate => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-1" />
        <div className="col-5">
          <img style={fullWidthStyle} src={IMG_LOGO_NP} />
        </div>
        <div className="col-5">
          <img style={fullWidthStyle} src={IMG_LOGO_SEED} />
        </div>
        <div className="col-1" />
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      >
        <p style={printTextStyle}>It is hereby certified that</p>
      </div>
      <div className="row d-flex justify-content-center">
        <p style={nameTextStyle}>{certificate.recipient.name}</p>
      </div>
      <div className="row d-flex justify-content-center">
        <p style={printTextStyle}>
          having successfully completed the course of study <br />
          was awarded the
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <div style={titleTextStyle}>
          {formatCertName(certificate.name, certificate.additionalData.merit)}
        </div>
      </div>
      <div
        className="row d-flex justify-content-center align-items-end"
        style={{ marginTop: "8rem", marginBottom: "1rem" }}
      >
        <div className="col-6" />
        <div className="col-4">
          <div className="px-4">
            <img style={fullWidthStyle} src={IMG_SIG_TANG_KIN_FEI} />
            <hr />
          </div>
          <div className="text-center">Tang Kin Fei</div>
          <div className="text-center">Council Chairman</div>
          <div className="text-center">Ngee Ann Polytechnic</div>
        </div>
        <div className="col-2" />
      </div>
      <div
        className="row d-flex justify-content-center align-items-end"
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        <div className="col-4">
          <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
        </div>

        <div className="col-4">
          <div className="px-4">
            <img style={fullWidthStyle} src={IMG_SIG_TI_BOON_WEE} />
            <hr />
          </div>
          <div className="text-center">Ti Boon Wee</div>
          <div className="text-center">Principal</div>
          <div className="text-center">Ngee Ann Polytechnic</div>
        </div>

        <div className="col-4">
          <div className="px-4">
            <img style={fullWidthStyle} src={IMG_SIG_CHAN_TEE_SENG} />
            <hr />
          </div>
          <div className="text-center">Chan Tee Seng</div>
          <div className="text-center">Chief Executive Officer</div>
          <div className="text-center">
            NTUC First Campus Co-operative Ltd & Director, SEED Institute Pte
            Ltd
          </div>
        </div>
      </div>
      <div>
        <div>{formatDate(certificate.issuedOn)}</div>
      </div>
    </div>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 text-left">
          {certificate.additionalData.additionalCertId}
        </div>
        <div className="col-6 text-right">{formatCertID(certificate.id)}</div>
      </div>
    </div>
  </div>
);

export default Template;
