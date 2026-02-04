import type { SignatureData, Office, Banner, AdminSettings } from "../types";

export function generateSignatureHTML(
  data: SignatureData,
  office: Office | undefined,
  banner: Banner | undefined,
  settings: AdminSettings,
  isRetina: boolean = false
): string {
  const { fullName, jobTitle, cellPhone, companyWebsite, email, linkedin } = data;

  // Build the signature HTML with table-based structure for maximum Outlook compatibility
  // Tables ensure consistent spacing across all email clients (Outlook Windows/Mac, Gmail, etc.)
  let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; background-color: transparent;">
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; max-width: 600px; border-collapse: collapse; background-color: transparent; border: 0;">
    <tbody>`;

  // Name - Arial Bold 15px, line-height 22.5px
  if (fullName) {
    html += `
      <tr>
        <td style="padding: 0 0 4px 0; font-family: Arial, sans-serif; font-size: 15px; line-height: 22.5px; font-weight: bold; color: #000000;">
          ${escapeHtml(fullName)}
        </td>
      </tr>`;
  }

  // Job Title - Arial Regular 14px, line-height 21px
  if (jobTitle) {
    html += `
      <tr>
        <td style="padding: 0 0 8px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 21px; color: #000000;">
          ${escapeHtml(jobTitle)}
        </td>
      </tr>`;
  }

  // Company Logo - width 155px, auto height, maintains aspect ratio
  // For Retina displays (Mac), use 2x size image displayed at 1x for crisp rendering
  if (settings.companyLogoUrl) {
    const logoWidth = isRetina ? 310 : 155;
    const logoStyle = isRetina 
      ? "width: 155px; max-width: 155px; height: auto; display: block; border: 0;" 
      : "max-width: 155px; height: auto; display: block; border: 0;";
    
    html += `
      <tr>
        <td style="padding: 0 0 8px 0;">
          <a href="https://www.explorance.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border: 0;">
            <img src="${escapeHtml(settings.companyLogoUrl)}" alt="Company Logo" width="${logoWidth}" style="${logoStyle}" />
          </a>
        </td>
      </tr>`;
  }

  // Office Address - Arial Regular 13px, line-height 19.5px
  if (office) {
    html += `
      <tr>
        <td style="padding: 0; font-family: Arial, sans-serif; font-size: 13px; line-height: 19.5px; color: #000000;">
          ${escapeHtml(office.address)}
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
        <td style="padding: 0; font-family: Arial, sans-serif; font-size: 13px; line-height: 19.5px; color: #000000;">
          ${phoneText}
        </td>
      </tr>`;
    }
  }

  // Email / Website / LinkedIn on same line - Arial Regular 13px, underlined, color #0077b5
  if (email || companyWebsite || linkedin) {
    let linkText = "";
    
    if (email) {
      linkText += `<a href="mailto:${escapeHtml(email)}" style="color: #0077b5; text-decoration: underline; font-family: Arial, sans-serif; font-size: 13px;">${escapeHtml(email)}</a>`;
    }
    
    if (companyWebsite) {
      if (linkText) linkText += " | ";
      const displayUrl = companyWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
      linkText += `<a href="${escapeHtml(companyWebsite)}" style="color: #0077b5; text-decoration: underline; font-family: Arial, sans-serif; font-size: 13px;">${escapeHtml(displayUrl)}</a>`;
    }
    
    if (linkedin) {
      if (linkText) linkText += " | ";
      linkText += `<a href="${escapeHtml(linkedin)}" style="color: #0077b5; text-decoration: underline; font-family: Arial, sans-serif; font-size: 13px;">LinkedIn</a>`;
    }

    html += `
      <tr>
        <td style="padding: 0; font-family: Arial, sans-serif; font-size: 13px; line-height: 19.5px;">
          ${linkText}
        </td>
      </tr>`;
  }

  // Banner (if selected) - with optional clickable link, max-width 400px, auto height, maintains aspect ratio
  // For Retina displays (Mac), use 2x size image displayed at 1x for crisp rendering
  if (banner && banner.imageUrl) {
    const bannerWidth = isRetina ? 800 : 400;
    const bannerStyle = isRetina
      ? "width: 400px; max-width: 400px; height: auto; display: block; border: 0; border-radius: 4px;"
      : "max-width: 400px; height: auto; display: block; border: 0; border-radius: 4px;";
    
    const bannerImg = `<img src="${escapeHtml(banner.imageUrl)}" alt="${escapeHtml(banner.name)}" width="${bannerWidth}" style="${bannerStyle}" />`;
    
    html += `
      <tr>
        <td style="padding: 16px 0 0 0;">`;
    
    // Wrap in link if banner has a URL
    if (banner.link) {
      html += `
          <a href="${escapeHtml(banner.link)}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border: 0;">
            ${bannerImg}
          </a>`;
    } else {
      html += `
          ${bannerImg}`;
    }
    
    html += `
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
      // Convert line breaks to <br/> tags for HTML rendering
      const disclaimerHtml = escapeHtml(disclaimerText).replace(/\n/g, '<br/>');
      
      html += `
      <tr>
        <td style="padding: 16px 0 0 0; border-top: 1px solid #e0e0e0;">
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 16px 0 0 0; font-family: Arial, sans-serif; font-size: 11px; line-height: 16.5px; color: #666666;">
                  ${disclaimerHtml}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>`;
    }
  }

  html += `
    </tbody>
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