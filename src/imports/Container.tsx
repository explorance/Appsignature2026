import imgLogoExplorance20261 from "figma:asset/7d15e392d27444305efef2a961627aab3f97e27d.png";

function TableCell() {
  return (
    <div className="absolute h-[24.5px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[15px] text-black text-nowrap top-px">Arnaud Friedel</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[33px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px]">{`VP Brand & Product Experience`}</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="h-[33px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell1 />
    </div>
  );
}

function ImageCompanyLogo() {
  return <div className="absolute h-[29.109px] left-0 top-0 w-[139.961px]" data-name="Image (Company Logo)" />;
}

function TableCell2() {
  return (
    <div className="absolute h-[41.109px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <ImageCompanyLogo />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="h-[41.109px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell2 />
      <div className="absolute h-[36.5px] left-0 top-[calc(50%+0.2px)] translate-y-[-50%] w-[175.5px]" data-name="Logo-explorance-2026 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoExplorance20261} />
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[31.5px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-black text-nowrap top-[8px]">1470 Rue Peel, Suite 500, Montréal, QC, Canada H3A 1T1</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell3 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[2px] w-[27.461px]" data-name="Text">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[19.5px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-black">Tel.:</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[27.46px] top-[2px] w-[96.031px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[13px] text-black text-nowrap">+1.514.938.2111</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[123.49px] top-[2px] w-[10.602px]" data-name="Text">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[19.5px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-black">|</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[134.09px] top-[2px] w-[33.234px]" data-name="Text">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[19.5px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-black">Cell.:</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[167.33px] top-[2px] w-[97.961px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[13px] text-black text-nowrap">+1.514.713.5327</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[23.5px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <Text />
      <Link />
      <Text1 />
      <Text2 />
      <Link1 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="h-[23.5px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell4 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[6px] w-[91.773px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0077b5] text-[13px] text-nowrap underline">explorance.com</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <Link2 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[115.5px] left-0 top-[7.5px] w-[450.5px]" data-name="Paragraph">
      <div className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#666] text-[11px] top-0 w-[445px]">
        <p className="mb-0">Confidentiality Notice: This email contains confidential information intended only for the recipient. Unauthorized use is prohibited. If you received it in error, please delete it and notify the sender immediately.</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Avis de Confidentialité : Ce courriel contient des informations confidentielles destinées uniquement au destinataire. Toute utilisation non autorisée est interdite. Si vous l'avez reçu par erreur, veuillez le détruire et en informer l'expéditeur immédiatement.`}</p>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid h-[124px] left-0 top-0 w-[450.5px]" data-name="Table Cell">
      <Paragraph />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="h-[124px] relative shrink-0 w-[450.5px]" data-name="Table Row">
      <TableCell6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
          <TableRow />
          <TableRow1 />
          <TableRow2 />
          <TableRow3 />
          <TableRow4 />
          <TableRow5 />
          <TableRow6 />
        </div>
      </div>
    </div>
  );
}