
"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Search,
  MapPin,
  ReceiptText,
} from "lucide-react";

import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const federalRefund = {
  title: "Federal Tax Refund",
  description:
    "Check the status of your federal income tax refund directly through the Internal Revenue Service.",
  url: "https://sa.www4.irs.gov/wmr/",
};

const stateRefunds = [
  { state: "Alabama", url: "https://myalabamataxes.alabama.gov/tap/_/" },
  { state: "Arizona", url: "https://www.aztaxes.gov/Home/CheckRefund?" },
  { state: "Arkansas", url: "https://atap.arkansas.gov/_/#1" },
  { state: "California", url: "https://www.ftb.ca.gov/refund/index.asp?WT.mc_id=akRefund" },
  { state: "Colorado", url: "https://www.colorado.gov/revenueonline/_/#1" },
  { state: "Connecticut", url: "https://portal.ct.gov/drs/individuals/individual-tax-page/status-of-refund" },
  { state: "Delaware", url: "https://tax.delaware.gov/rptp/portal/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zijS0MnN09DIy83EODjQwc_R1DTcIcvYAsE_1wQgqigNIGOICjAVB_FCElXvpR6Tn5SRDXOOYlGVuk60cVpaalFqUW5ZUWAYUzSkoKiq1UDVQNilNzUpNLKvOBwolAskQvOT9X1QCbxoz84hL9CGzq9QtyIwx0o5Iqyx0VFQEKP1x5/dz/d5/L2dBISEvZ0FBIS9nQSEh/" },
  { state: "Georgia", url: "https://gtc.dor.ga.gov/_/#1" },
  { state: "Hawaii", url: "https://hitax.hawaii.gov/_/" },
  { state: "Idaho", url: "https://idahotap.gentax.com/TAP/_/" },
  { state: "Illinois", url: "https://mytax.illinois.gov/_/" },
  { state: "Iowa", url: "https://govconnect.iowa.gov/TAP/_/" },
  { state: "Kentucky", url: "https://refund.ky.gov/" },
  { state: "Louisiana", url: "https://latap.revenue.louisiana.gov/_/" },
  { state: "Maine", url: "https://revenue.maine.gov/_/" },
  { state: "Maryland", url: "https://interactive.marylandtaxes.gov/INDIV/refundstatus/home.aspx" },
  { state: "Massachusetts", url: "https://www.mass.gov/how-to/check-the-status-of-your-ma-income-tax-refund" },
  { state: "Michigan", url: "https://www.michigan.gov/taxes/iit/refund" },
  { state: "Minnesota", url: "https://www.revenue.state.mn.us/wheres-my-refund" },
  { state: "Mississippi", url: "https://tap.dor.ms.gov/_/" },
  { state: "Missouri", url: "https://mytax.mo.gov/rptp/portal/home/return-tracker" },
  { state: "Montana", url: "https://tap.dor.mt.gov/_/" },
  { state: "New Jersey", url: "https://www20.state.nj.us/TYTR_TGI_INQ/jsp/prompt.jsp" },
  { state: "New York", url: "https://www8.tax.ny.gov/PRIS/prisStart" },
  { state: "North Dakota", url: "https://apps.nd.gov/tax/tap/_/" },
  { state: "Ohio", url: "https://tax.ohio.gov/individual/get-a-refund" },
  { state: "Oklahoma", url: "https://oktap.tax.ok.gov/oktap/web/_/#1" },
  { state: "Oregon", url: "https://revenueonline.dor.oregon.gov/tap/_/#1" },
  { state: "Pennsylvania", url: "https://www.pa.gov/services/revenue/track-status-of-pennsylvania-income-tax-refund" },
  { state: "Rhode Island", url: "https://taxportal.ri.gov/rptp/portal/home/wheresmyrefund/!ut/p/z1/jY9BC4JAEIV_SwevzqyWSLclwjTLIEzbS6yxWbG5opvQv2-xjibNYZj3-N6DAQY5sIp3t5Lrm6q4NPrIvFMYzpwwQUJW290SPbKO6XrjEkSErAfwx1AE9k9-BGDj9RmwHnF9XAQrdKIg3TtIE5pODzQy1_QLjHREwEqpis-7tCpcvwTWiItoRGM_G2Nfta7buYUWtkKKs34pY3OztX1WDwuHglfVasiHeKgfaY73mexiOnkDBdRbyw!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/" },
  { state: "South Carolina", url: "https://mydorway.dor.sc.gov/_/" },
  { state: "Utah", url: "https://tap.tax.utah.gov/TaxExpress/_/" },
  { state: "Vermont", url: "https://myvtax.vermont.gov/_/" },
  { state: "Virginia", url: "https://www.individual.tax.virginia.gov/IOP/#/refund?CFID=5992253&CFTOKEN=f3f928d62760fcdc-1B1D8A27-A8EB-C341-5C8820241275A1A2" },
  { state: "West Virginia", url: "https://mytaxes.wvtax.gov/_/#1" },
];

const states = [
  "All States",
  ...stateRefunds.map((item) => item.state),
];

export function TaxRefundTracker() {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All States");

  const filteredStates = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return stateRefunds.filter((item) => {
      const matchesSearch = item.state.toLowerCase().includes(searchTerm);
      const matchesState =
        selectedState === "All States" ||
        item.state === selectedState;

      return matchesSearch && matchesState;
    });
  }, [query, selectedState]);

  const clearFilters = () => {
    setQuery("");
    setSelectedState("All States");
  };

  const hasFilters = query.trim().length > 0 || selectedState !== "All States";

  return (
    <section className="relative overflow-hidden border-t border-[#123C32]/15 bg-[#F7F4EC] py-24 lg:py-36">
      <PageContainer>
        {/* Heading */}
        <Reveal amount={0.3}>
          <div className="grid gap-8 border-b border-[#123C32]/15 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  Taxpayer Resources
                </p>
              </div>

              <h2 className="mt-8 max-w-[650px] font-editorial text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-tight text-[#123C32]">
                Waiting on a refund?
                <span className="block text-[#A58B55]">
                  Check its status.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-sm leading-[1.9] text-[#68736C] lg:justify-self-end lg:pb-2 lg:text-base">
              Find the official refund-status portal for your federal or
              state income tax return. Select your state to access its
              designated tax agency.
            </p>
          </div>
        </Reveal>

        {/* Federal refund feature */}
        <Reveal amount={0.3} delay={0.05}>
          <a
            href={federalRefund.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 flex flex-col justify-between gap-8 bg-[#123C32] p-7 transition-colors duration-500 hover:bg-[#174A3D] sm:p-10 lg:flex-row lg:items-center lg:p-12"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C9AD70]/40 text-[#C9AD70]">
                <ReceiptText size={22} strokeWidth={1.3} />
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9AD70]">
                  Federal Refund Tracker
                </p>

                <h3 className="mt-3 font-editorial text-3xl text-[#F7F4EC] lg:text-4xl">
                  IRS – Where's My Refund?
                </h3>

                <p className="mt-3 max-w-[520px] text-sm leading-[1.85] text-white/60">
                  Check the status of your federal income tax refund
                  directly through the Internal Revenue Service.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t border-white/15 pt-5 text-[#C9AD70] lg:border-t-0 lg:pt-0">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
                Check Federal Refund
              </span>

              <span className="flex h-10 w-10 items-center justify-center border border-[#C9AD70]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#C9AD70] group-hover:text-[#123C32]">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>
        </Reveal>

        {/* State directory heading */}
        <Reveal amount={0.3}>
          <div className="mt-20 flex flex-col gap-4 border-b border-[#123C32]/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  State Refund Portals
                </p>
              </div>

              <h3 className="mt-5 font-editorial text-3xl text-[#123C32] lg:text-4xl">
                Find your state.
              </h3>
            </div>

            <p className="max-w-[350px] text-sm leading-[1.8] text-[#68736C]">
              Choose from the available state tax agencies below to check
              your refund status.
            </p>
          </div>
        </Reveal>

        {/* Search and filter */}
        <Reveal amount={0.3} delay={0.05}>
          <div className="mt-7 flex flex-col gap-4 border-b border-[#123C32]/15 py-6 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                size={17}
                strokeWidth={1.5}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#806B3E]"
              />

              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a state..."
                aria-label="Search states"
                className="h-12 rounded-none border-[#123C32]/20 bg-transparent pl-11 text-sm text-[#123C32] placeholder:text-[#8B918A] shadow-none focus-visible:border-[#A58B55] focus-visible:ring-0"
              />
            </div>

            <div className="sm:w-[240px]">
              <Select
                value={selectedState}
                onValueChange={setSelectedState}
              >
                <SelectTrigger
                  aria-label="Select a state"
                  className="h-12 rounded-none border-[#123C32]/20 bg-transparent text-sm text-[#123C32] shadow-none focus:ring-0"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-[#806B3E]" />
                    <SelectValue placeholder="All States" />
                  </div>
                </SelectTrigger>

                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em] text-[#806B3E]">
                {filteredStates.length} of {stateRefunds.length} States
              </span>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#68736C] underline underline-offset-4 hover:text-[#123C32]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* State links */}
        {filteredStates.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStates.map((item, i) => (
              <Reveal
                key={item.state}
                amount={0.2}
                delay={(i % 3) * 0.04}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[90px] items-center justify-between border border-[#123C32]/15 bg-[#EEEAE0] px-5 py-5 transition-all duration-300 hover:border-[#123C32] hover:bg-[#123C32]"
                >
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#A58B55]">
                      State Refund
                    </p>

                    <h4 className="mt-2 font-editorial text-xl text-[#123C32] transition-colors group-hover:text-[#F7F4EC]">
                      {item.state}
                    </h4>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center border border-[#123C32]/20 text-[#806B3E] transition-all duration-300 group-hover:border-[#C9AD70] group-hover:bg-[#C9AD70] group-hover:text-[#123C32]">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal amount={0.3}>
            <div className="flex min-h-[240px] flex-col items-center justify-center border-b border-[#123C32]/15 py-14 text-center">
              <Search
                size={25}
                strokeWidth={1.3}
                className="text-[#A58B55]"
              />

              <h4 className="mt-5 font-editorial text-2xl text-[#123C32]">
                State not found.
              </h4>

              <p className="mt-2 text-sm text-[#68736C]">
                Try another state or clear your search.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 border-b border-[#A58B55] pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#806B3E]"
              >
                View all states
              </button>
            </div>
          </Reveal>
        )}

        {/* Disclaimer */}
        <Reveal amount={0.3}>
          <div className="mt-10 border-t border-[#123C32]/15 pt-6">
            <p className="max-w-[750px] text-xs leading-[1.9] text-[#68736C]">
              These links direct you to official federal and state tax
              agency websites. Refund processing times, eligibility, and
              information requirements vary by jurisdiction. You may need
              your Social Security number or taxpayer identification number,
              filing status, and refund amount to check your status.
            </p>

            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#806B3E]">
              Official government portals · Selected by Vital Industries
            </p>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
