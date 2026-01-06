import type { SignatureData, Office, Banner, AdminSettings } from "../types";

export function generateSignatureHTML(
  data: SignatureData,
  office: Office | undefined,
  banner: Banner | undefined,
  settings: AdminSettings
): string {
  const { fullName, jobTitle, cellPhone, companyWebsite, email, linkedin } = data;

  // Build the signature HTML with exact Figma specifications
  let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; max-width: 600px;">
    <tr>
      <td style="padding: 0;">
        <table cellpadding="0" cellspacing="0" border="0">`;

  // Name - Arial Bold 15px, line-height 22.5px
  if (fullName) {
    html += `
          <tr>
            <td style="padding: 0 0 4px 0;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 15px; line-height: 22.5px; font-weight: bold; color: #000000;">
                ${escapeHtml(fullName)}
              </p>
            </td>
          </tr>`;
  }

  // Job Title - Arial Regular 14px, line-height 21px
  if (jobTitle) {
    html += `
          <tr>
            <td style="padding: 0 0 8px 0;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 21px; color: #000000;">
                ${escapeHtml(jobTitle)}
              </p>
            </td>
          </tr>`;
  }

  // Company Logo - 36.5px height
  if (settings.companyLogoUrl) {
    html += `
          <tr>
            <td style="padding: 0 0 8px 0;">
              <img src="${escapeHtml(settings.companyLogoUrl)}" alt="Company Logo" style="height: 36.5px; display: block; margin: 0;" />
            </td>
          </tr>`;
  }

  // Office Address - Arial Regular 13px, line-height 19.5px
  if (office) {
    html += `
          <tr>
            <td style="padding: 0;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; line-height: 19.5px; color: #000000;">
                ${escapeHtml(office.address)}
              </p>
            </td>
          </tr>`;

    // Phone numbers - Arial Regular 13px, line-height 19.5px
    if (office.phone || cellPhone) {
      let phoneText = "";
      if (office.phone) {
        phoneText = `Tel.: ${escapeHtml(office.phone)}`;
      }
      if (cellPhone) {
        if (phoneText) phoneText += " | ";
        phoneText += `Cell.: ${escapeHtml(cellPhone)}`;
      }

      html += `
          <tr>
            <td style="padding: 0;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; line-height: 19.5px; color: #000000;">
                ${phoneText}
              </p>
            </td>
          </tr>`;
    }
  }

  // Email / Website / LinkedIn on same line - Arial Regular 13px, underlined, color #0077b5
  if (email || companyWebsite || linkedin) {
    let linkText = "";
    
    if (email) {
      linkText += `<a href="mailto:${escapeHtml(email)}" style="color: #0077b5; text-decoration: underline;">${escapeHtml(email)}</a>`;
    }
    
    if (companyWebsite) {
      if (linkText) linkText += " | ";
      const displayUrl = companyWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
      linkText += `<a href="${escapeHtml(companyWebsite)}" style="color: #0077b5; text-decoration: underline;">${escapeHtml(displayUrl)}</a>`;
    }
    
    if (linkedin) {
      if (linkText) linkText += " | ";
      linkText += `<a href="${escapeHtml(linkedin)}" style="color: #0077b5; text-decoration: underline;">LinkedIn</a>`;
    }

    html += `
          <tr>
            <td style="padding: 0;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; line-height: 19.5px;">
                ${linkText}
              </p>
            </td>
          </tr>`;
  }

  // Disclaimer - Arial Regular 11px, line-height 16.5px, color #666, border-top #e0e0e0
  if (settings.disclaimerEnglish || settings.disclaimerFrench) {
    let disclaimerText = "";
    
    if (data.disclaimerLanguage === "english") {
      disclaimerText = settings.disclaimerEnglish;
    } else if (data.disclaimerLanguage === "french") {
      disclaimerText = settings.disclaimerFrench;
    } else if (data.disclaimerLanguage === "both") {
      disclaimerText = settings.disclaimerEnglish;
      if (settings.disclaimerEnglish && settings.disclaimerFrench) {
        disclaimerText += "\n\n" + settings.disclaimerFrench;
      } else if (settings.disclaimerFrench) {
        disclaimerText = settings.disclaimerFrench;
      }
    }
    
    if (disclaimerText) {
      html += `
          <tr>
            <td style="padding: 7.5px 0 0 0; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; line-height: 16.5px; color: #666666; white-space: pre-wrap;">
${escapeHtml(disclaimerText)}
              </p>
            </td>
          </tr>`;
    }
  }

  // Banner (if selected)
  if (banner && banner.imageUrl) {
    html += `
          <tr>
            <td style="padding: 16px 0 0 0;">
              <img src="${escapeHtml(banner.imageUrl)}" alt="${escapeHtml(banner.name)}" style="max-width: 100%; height: auto; display: block; border-radius: 4px;" />
            </td>
          </tr>`;
  }

  html += `
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return html;
}

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}