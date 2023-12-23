import { MdLocationPin, MdCall, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <section className="h-80 w-screen bg-grey text-white flex flex-col items-center justify-center gap-10 ">
      <div className="flex w-4/5 container items-center justify-between">
        <div className="flex flex-col gap-7">
          LOGO
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <MdLocationPin className="text-accent text-xl" />
              <p>example@email.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MdCall className="text-accent text-xl" />
              <p>+32 48676735</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-accent text-xl" />
              <p>straat nr. , regio postcode</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-base font-semibold">OVER ONS</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>Over ons</li>
            <li>Het team</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-base font-semibold">OVER ONS</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>Over ons</li>
            <li>Het team</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-base font-semibold">OVER ONS</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>Over ons</li>
            <li>Het team</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-base font-semibold">OVER ONS</h1>
          <ul className="text-sm flex flex-col gap-4">
            <li>Over ons</li>
            <li>Het team</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="w-4/5 border-t-[1px] border-accent text-sm text-white/75 flex items-center justify-between pt-4">
        <div>
          Designed and developed by{" "}
          <span className="text-accent">Looper Media Group LLC.</span> 2023 -
          2024
        </div>
        <div className="flex items-center justify-between gap-8">
          <a href="">Site Map</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
}
