import svgPaths from "./svg-0fiib268dh";

function Pointer() {
  return (
    <div className="h-[8px] relative shrink-0 w-[32px]" data-name="Pointer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 8">
        <g id="Pointer">
          <path d="M16 8L8 0L0 8H16Z" fill="var(--fill-0, white)" id="Pointer_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Lato:Bold',sans-serif] grow h-[23px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0f131c] text-[14px]">
        <p className="leading-[normal]">Notifications</p>
      </div>
    </div>
  );
}

function TitleMenuItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="_Title Menu Item">
      <div className="content-stretch flex items-start pl-[24px] pr-[16px] py-[16px] relative w-full">
        <Frame8 />
      </div>
    </div>
  );
}

function Ico() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ico">
      <div className="absolute inset-[0_-23.53%_-35.29%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
          <g id="Ico">
            <path d={svgPaths.p2c3a5c00} fill="var(--fill-0, #001C3B)" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[999px] shrink-0" data-name="Icon">
      <Ico />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-[#0f131c]">
      <p className="font-['Lato:Bold',sans-serif] leading-[normal] relative shrink-0 text-[14px] w-full">Title</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[13px] relative shrink-0 text-[12px] w-full">Description goes here</p>
    </div>
  );
}

function Ico1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Ico">
      <div className="absolute inset-[-0.04%_-66.18%_-84.65%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.604 24.0098">
          <g id="Ico">
            <path d={svgPaths.p2c99b100} fill="var(--fill-0, #001C3B)" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[9px] relative rounded-[999px] shrink-0" data-name="CTA">
      <div aria-hidden="true" className="absolute border border-[#e5e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[999.5px]" />
      <Ico1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Icon />
      <Frame />
      <Cta />
    </div>
  );
}

function TagsDark() {
  return (
    <div className="bg-[#d0e0ca] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tags_Dark">
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(67, 132, 43, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #43842B)" id="Ellipse 5" r="4" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Bold',sans-serif] leading-[13px] not-italic relative shrink-0 text-[#224216] text-[10px] text-nowrap">Ready to download</p>
    </div>
  );
}

function ListMenuItem() {
  return (
    <div className="bg-[#f2f6fb] relative shrink-0 w-full" data-name="_List Menu Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <Frame4 />
          <TagsDark />
        </div>
      </div>
    </div>
  );
}

function Ico2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ico">
      <div className="absolute inset-[-0.03%_-41.2%_-41.2%_-0.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0098 24.0098">
          <g id="Ico">
            <path d={svgPaths.p212a2200} fill="var(--fill-0, #001C3B)" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[999px] shrink-0" data-name="Icon">
      <Ico2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-[#0f131c]">
      <p className="font-['Lato:Bold',sans-serif] leading-[normal] relative shrink-0 text-[14px] w-full">Title</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[13px] relative shrink-0 text-[12px] w-full">Description goes here</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <Icon1 />
      <Frame1 />
    </div>
  );
}

function ListMenuItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="_List Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Ico3() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ico">
      <div className="absolute inset-[0_-41.18%_-33.57%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.7062">
          <g id="Ico">
            <path d={svgPaths.p927c180} fill="var(--fill-0, #001C3B)" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[999px] shrink-0" data-name="Icon">
      <Ico3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-[#0f131c]">
      <p className="font-['Lato:Bold',sans-serif] leading-[normal] relative shrink-0 text-[14px] w-full">Title</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[13px] relative shrink-0 text-[12px] w-full">Description goes here</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <Icon2 />
      <Frame2 />
    </div>
  );
}

function ListMenuItem2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="_List Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Ico4() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ico">
      <div className="absolute inset-[0_-23.53%_-35.29%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
          <g id="Ico">
            <path d={svgPaths.p2c3a5c00} fill="var(--fill-0, #001C3B)" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex gap-[8px] items-start p-[12px] relative rounded-[999px] shrink-0" data-name="Icon">
      <Ico4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f131c] text-[14px] text-nowrap">Title</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame9 />
      <p className="font-['Lato:Regular',sans-serif] leading-[13px] min-w-full not-italic relative shrink-0 text-[#0f131c] text-[12px] w-[min-content]">Description goes here</p>
    </div>
  );
}

function Ico5() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Ico">
      <div className="absolute inset-[-0.04%_-66.18%_-84.65%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.604 24.0098">
          <g id="Ico">
            <path d={svgPaths.p2c99b100} fill="var(--fill-0, #667789)" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[#e5e8eb] content-stretch flex gap-[8px] items-center justify-center p-[9px] relative rounded-[999px] shrink-0" data-name="CTA">
      <div aria-hidden="true" className="absolute border border-[#e5e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[999.5px]" />
      <Ico5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Icon3 />
      <Frame3 />
      <Cta1 />
    </div>
  );
}

function TagsDark1() {
  return (
    <div className="bg-[#efc9c1] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tags_Dark">
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(189, 41, 6, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #BD2906)" id="Ellipse 5" r="4" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Bold',sans-serif] leading-[13px] not-italic relative shrink-0 text-[#5e1403] text-[10px] text-nowrap">Not available</p>
    </div>
  );
}

function ListMenuItem3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="_List Menu Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <Frame7 />
          <TagsDark1 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e8eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pl-[16px] pr-[24px] py-[16px] relative w-full">
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0050c1] text-[14px] text-nowrap text-right">View All Notifications</p>
        </div>
      </div>
    </div>
  );
}

function ListingItems() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Listing Items">
      <TitleMenuItem />
      <div className="bg-[#e5e8eb] h-px shrink-0 w-full" data-name="Separation" />
      <ListMenuItem />
      <div className="bg-[#e5e8eb] h-px shrink-0 w-full" data-name="Separation" />
      <ListMenuItem1 />
      <div className="bg-[#e5e8eb] h-px shrink-0 w-full" data-name="Separation" />
      <ListMenuItem2 />
      <div className="bg-[#e5e8eb] h-px shrink-0 w-full" data-name="Separation" />
      <ListMenuItem3 />
      <Footer />
    </div>
  );
}

export default function Notifications() {
  return (
    <div className="content-stretch flex flex-col items-end relative shadow-[0px_4px_4px_0px_rgba(54,74,113,0.04),0px_0px_32px_0px_rgba(54,74,113,0.16)] size-full" data-name="*** Notifications ***">
      <Pointer />
      <ListingItems />
    </div>
  );
}