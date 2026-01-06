import svgPaths from "./svg-5wfqvijomx";

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#081734] text-[16px] text-nowrap">
        <p className="leading-[1.32]">Dialogue box</p>
      </div>
    </div>
  );
}

function IcoRight() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Ico Right">
      <div className="absolute inset-[0_-78.64%_-84.65%_-0.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2283 24.005">
          <g id="Ico Right">
            <path clipRule="evenodd" d={svgPaths.p4f33b00} fill="var(--fill-0, #001C3B)" fillRule="evenodd" id="bg" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex gap-[8px] items-center justify-center p-[9px] relative rounded-[36px] shrink-0" data-name="CTA">
      <IcoRight />
    </div>
  );
}

function TitleMenuItem() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Title Menu Item">
      <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
        <Content />
        <Cta />
      </div>
    </div>
  );
}

function TitleMenuItem1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Title Menu Item">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f131c] text-[14px] text-nowrap">
        <p className="leading-[normal]">Short description</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49px] items-start relative shrink-0">
      <TitleMenuItem1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[12px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-[#e5e8eb] h-px shrink-0 w-full" data-name="Separation" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="bg-[#e5e8eb] h-px shrink-0 w-full" data-name="Separation" />
      <Frame />
    </div>
  );
}

function Cta1() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[36px] shrink-0" data-name="CTA">
      <div aria-hidden="true" className="absolute border border-[#e5e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[36.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f131c] text-[14px] text-center text-nowrap">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Cta2() {
  return (
    <div className="basis-0 bg-[#0050c1] grow h-full min-h-px min-w-px relative rounded-[36px] shrink-0" data-name="CTA">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">Apply</p>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-[41px] items-center min-h-px min-w-px relative shrink-0" data-name="Actions">
      <Cta1 />
      <Cta2 />
    </div>
  );
}

function Controls() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Controls">
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex items-end justify-end px-[24px] py-[16px] relative w-full">
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Controls />
    </div>
  );
}

export default function FiltersCategories() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(54,74,113,0.04),0px_0px_32px_0px_rgba(54,74,113,0.16)] size-full" data-name="Filters categories">
      <TitleMenuItem />
      <Content1 />
      <Footer />
    </div>
  );
}