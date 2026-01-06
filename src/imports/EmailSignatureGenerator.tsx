import svgPaths from "./svg-gs9t8rqey4";
import imgLogoExplorance20261 from "figma:asset/7d15e392d27444305efef2a961627aab3f97e27d.png";

function Container1() {
  return (
    <div className="h-full relative shrink-0 w-px" data-name="Container 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] size-full" />
      </div>
    </div>
  );
}

function LogoExplorance() {
  return (
    <div className="h-[20.388px] relative shrink-0 w-[116px]" data-name="Logo Explorance 2024">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 21">
        <g id="Logo Explorance 2024">
          <path d={svgPaths.p6271500} fill="var(--fill-0, #161525)" id="Vector" />
          <path d={svgPaths.p388ab300} fill="var(--fill-0, #161525)" id="Vector_2" />
          <path d={svgPaths.p325cc3d0} fill="var(--fill-0, #161525)" id="Vector_3" />
          <path d={svgPaths.p30dcc500} fill="var(--fill-0, #161525)" id="Vector_4" />
          <path d={svgPaths.p21f6c100} fill="var(--fill-0, #161525)" id="Vector_5" />
          <path d={svgPaths.p3816c1a0} fill="var(--fill-0, #161525)" id="Vector_6" />
          <path d={svgPaths.p31183d00} fill="var(--fill-0, #161525)" id="Vector_7" />
          <path d={svgPaths.p39cd2400} fill="var(--fill-0, #161525)" id="Vector_8" />
          <path d={svgPaths.p152d0100} fill="var(--fill-0, #161525)" id="Vector_9" />
          <path d={svgPaths.p1899adc0} fill="var(--fill-0, #161525)" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.pd8ccf00} fill="var(--fill-0, #161525)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p176e5800} fill="var(--fill-0, #161525)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p25a88600} fill="var(--fill-0, #0064F0)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p320f10f0} fill="var(--fill-0, #161525)" fillRule="evenodd" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[12px] relative shrink-0" data-name="Left">
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
      </div>
      <LogoExplorance />
    </div>
  );
}

function LineSeparation() {
  return (
    <div className="h-px relative w-[75px]" data-name="Line - Separation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 1">
        <g id="Line - Separation"></g>
      </svg>
    </div>
  );
}

function Buttons() {
  return <div className="basis-0 content-stretch flex gap-[24px] grow items-center justify-end min-h-px min-w-px shrink-0" data-name="Buttons" />;
}

function MainNavAdminDesktopMedium() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Main_Nav_Admin_Desktop_Medium">
      <Left />
      <div className="flex h-[75px] items-center justify-center relative shrink-0 w-px" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <LineSeparation />
        </div>
      </div>
      <Buttons />
    </div>
  );
}

function LineSeparation1() {
  return (
    <div className="h-0 relative shrink-0 w-[1440px]" data-name="Line - Separation">
      <div className="absolute inset-[-0.5px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
          <g id="Line - Separation">
            <line id="Separation" stroke="var(--stroke-0, #E5E8EB)" strokeWidth="0.5" x2="1440" y1="0.25" y2="0.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col h-[75px] items-start justify-between relative shrink-0 w-full" data-name="Header">
      <MainNavAdminDesktopMedium />
      <LineSeparation1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Enter Your Details</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Full Name *</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px]">Arnaud Friedel</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Job Title *</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px]">{`VP Brand & Product Experience`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Email Address *</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px]">john.doe@company.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <EmailInput />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Office Location *</p>
    </div>
  );
}

function Ico() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ico">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Ico">
          <path d={svgPaths.p1e183f00} fill="var(--fill-0, #001C3B)" id="bg" />
        </g>
      </svg>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[2px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] w-[39px]" data-name="CTA">
      <Ico />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="absolute flex h-[39px] items-center justify-center right-[3.5px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[32px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Cta />
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap top-[11.5px] tracking-[-0.3125px]">Montréal</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[71px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Dropdown />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Office Address</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f9fafb] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[9.5px] tracking-[-0.1504px]">1470 Rue Peel, Suite 500, Montréal, QC, Canada H3A 1T1</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Container5 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Phone Number (Office)</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[17px] not-italic text-[#4a5565] text-[16px] text-nowrap top-[8.5px] tracking-[-0.3125px]">+1.514.938.2111</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container7 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Cell Phone Number</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Phone Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px]">+1.514.713.5327</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <PhoneInput />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">LinkedIn Profile URL</p>
    </div>
  );
}

function UrlInput() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="URL Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px]">https://linkedin.com/in/yourprofile</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <UrlInput />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Company Website</p>
    </div>
  );
}

function UrlInput1() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="URL Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.3125px]">https://explorance.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <UrlInput1 />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Disclaimer / Legal Notice</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[#f3f4f6] h-[162px] relative rounded-[10px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(74,85,101,0.5)] text-nowrap tracking-[-0.3125px]">Confidentiality Notice: This email and any attachments are confidential...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Label9 />
      <TextArea />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1003px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function SignatureForm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1051px] items-start relative shrink-0 w-full" data-name="SignatureForm">
      <Heading />
      <Container13 />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Email Banner (Optional)</p>
    </div>
  );
}

function Ico1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ico">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Ico">
          <path d={svgPaths.p1e183f00} fill="var(--fill-0, #001C3B)" id="bg" />
        </g>
      </svg>
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] w-[39px]" data-name="CTA">
      <Ico1 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-white h-[39px] relative rounded-[10px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="absolute flex h-[39px] items-center justify-center right-[3.5px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[32px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Cta1 />
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap top-[11.5px] tracking-[-0.3125px]">Explorance World 2026</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Select a banner for your email signature:</p>
    </div>
  );
}

function ImageFrenchExploranceBannerVariant() {
  return <div className="absolute h-[80px] left-0 top-0 w-[154.828px]" data-name="Image (French Explorance banner (variant 1))" />;
}

function Container14() {
  return (
    <div className="bg-[#2b7fff] h-[24px] relative rounded-[4px] shrink-0 w-[75.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-nowrap text-white top-[5px]">✓ Selected</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[80px] items-center justify-center left-0 pl-0 pr-[0.008px] py-0 top-0 w-[154.828px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-black h-[24px] left-0 top-[56px] w-[154.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[77.51px] not-italic text-[12px] text-center text-nowrap text-white top-[5px] translate-x-[-50%]">FR (1)</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#2b7fff] border-solid h-[84px] left-0 overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[158.828px]" data-name="Container">
      <ImageFrenchExploranceBannerVariant />
      <Container15 />
      <Container16 />
    </div>
  );
}

function ImageFrenchExploranceBannerVariant1() {
  return <div className="absolute h-[80px] left-0 top-0 w-[154.836px]" data-name="Image (French Explorance banner (variant 2))" />;
}

function Container18() {
  return (
    <div className="absolute bg-black h-[24px] left-0 top-[56px] w-[154.836px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[77.67px] not-italic text-[12px] text-center text-nowrap text-white top-[5px] translate-x-[-50%]">FR (2)</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute border-2 border-[#d1d5dc] border-solid h-[84px] left-[170.83px] overflow-clip rounded-[10px] top-0 w-[158.836px]" data-name="Container">
      <ImageFrenchExploranceBannerVariant1 />
      <Container18 />
    </div>
  );
}

function ImageEnglishExploranceBanner() {
  return <div className="absolute h-[80px] left-0 top-0 w-[154.828px]" data-name="Image (English Explorance banner)" />;
}

function Container20() {
  return (
    <div className="absolute bg-black h-[24px] left-0 top-[56px] w-[154.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[77.88px] not-italic text-[12px] text-center text-nowrap text-white top-[5px] translate-x-[-50%]">EN</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute border-2 border-[#d1d5dc] border-solid h-[84px] left-[341.66px] overflow-clip rounded-[10px] top-0 w-[158.828px]" data-name="Container">
      <ImageEnglishExploranceBanner />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
      <Container21 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Click any banner to select. Click again to deselect.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container22 />
      <Paragraph1 />
    </div>
  );
}

function BannerUpload() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="BannerUpload">
      <Label10 />
      <Dropdown1 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <BannerUpload />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[564.5px]" data-name="Main Content">
      <SignatureForm />
      <Container24 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Preview</p>
    </div>
  );
}

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

function Paragraph2() {
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
      <Paragraph2 />
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

function Container25() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
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

function SignaturePreview() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="SignaturePreview">
      <Heading1 />
      <Container25 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_13509)" id="Icon">
          <path d={svgPaths.p1a039080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b428080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_13509">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[114.023px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[57px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">Copy Signature</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[56px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
          <Icon />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 12.5V2.5" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3053b100} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p37dcb700} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[61.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">Download HTML</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f3f4f6] h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-px pr-[1.008px] py-px relative size-full">
          <Icon1 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function ExportActions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[126px] items-start relative shrink-0 w-full" data-name="ExportActions">
      <Button />
      <Button1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[151px] items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ExportActions />
    </div>
  );
}

function App() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[564.5px]" data-name="App">
      <SignaturePreview />
      <Container26 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[44px] items-start justify-center p-[44px] relative w-full">
          <MainContent />
          <App />
        </div>
      </div>
    </div>
  );
}

export default function EmailSignatureGenerator() {
  return (
    <div className="bg-[#f0f1f5] content-stretch flex flex-col items-start relative size-full" data-name="Email Signature Generator">
      <Header />
      <Frame />
    </div>
  );
}