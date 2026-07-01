import { createFileRoute, Link } from "@tanstack/react-router";
import qrCodeImg from "../assets/qr-code.png";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Bani_Live — Make Payment to Enroll" },
      { name: "description", content: "Make payment via QR Code or RazorPay to enroll in the Vedic Astrology Course." },
    ],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Basic anchor click to download the imported qr-code image asset
  };

  return (
    <div className="min-h-screen bg-[#FDFAF6] py-8 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-center font-sans">
      <div className="relative w-full max-w-[1000px] bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-[#EBE5DC]">
        {/* Close Button redirects back home */}
        <Link
          to="/"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-50 border border-stone-200 transition-colors"
          aria-label="Back to Home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>

        {/* Title */}
        <h1 className="font-display semibold text-[24px] leading-[30px] text-[#BA7530] mb-8 pr-12">
          Make Payment to Enroll in Class
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-12 items-start">
          {/* Left Column: Info & Steps */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[16px] sm:text-[18px] text-[#48603F] font-medium leading-[30px]">
                Amount to Pay : <span className="font-semibold">₹17,700</span> ( 15,000 + GST )
              </p>
              <p className="text-[16px] sm:text-[18px] text-[#1C1C1C] font-medium leading-[30px] text-[#48603F]">
                A/c Holder : <span className="font-semibold ">Clarity Ventures Private Limited.</span>
              </p>
            </div>

            <div className="space-y-4 text-[#00000099]">
              <h2 className="text-[13px] uppercase tracking-wider font-semibold ">
                Steps to Do
              </h2>
              <ol className="space-y-3 text-[14px] leading-[1.6]">
                <li className="flex gap-2">
                  <span className="font-semibold">1.</span>
                  <span>Scan the QR code from your Mobile or take Screenshot to Pay</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">2.</span>
                  <span>Make Payment of Rupees ₹17,700 to the linked A/c</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">3.</span>
                  <div>
                    <span>Once Successful, Share the success screenshot on Whatsapp No.</span>
                    <a
                      href="https://wa.me/919289241133"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-semibold  hover:underline mt-0.5"
                    >
                      +919289241133
                    </a>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">4.</span>
                  <span>Sales team will confirm your payment and share the next steps</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: QR Code & VPA */}
          <div className="flex flex-col items-center md:items-center">
            <div className="relative bg-[#FAF9F6] p-5 rounded-2xl border border-stone-200/60 max-w-[280px] w-full flex flex-col items-center shadow-sm">
              <a
                href="upi://pay?pa=clarityventures@sc&pn=Clarity%20Ventures%20Private%20Limited&am=17700&cu=INR"
                className="w-full aspect-square block relative group cursor-pointer"
                title="Tap to pay via UPI app (Mobile)"
              >
                <img src={qrCodeImg} alt="Payment QR Code" className="w-full h-full object-contain rounded-lg transition-transform group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <span className="text-[11px] bg-black/75 text-white px-2.5 py-1.5 rounded font-sans tracking-wide font-medium">Tap to Pay via App</span>
                </div>
              </a>

              {/* VPA and ID */}
              <div className="mt-4 text-center w-full">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">UPI VPA</span>
                <a
                  href="upi://pay?pa=clarityventures@sc&pn=Clarity%20Ventures%20Private%20Limited&am=17700&cu=INR"
                  className="text-[13px] text-stone-800 font-mono font-medium block mt-0.5 hover:text-[#BA7530] transition-colors"
                  title="Tap to pay via UPI app (Mobile)"
                >
                  clarityventures@sc
                </a>
              </div>

              {/* QR Download Button overlay/floating on bottom right of the QR image card */}
              <a
                href={qrCodeImg}
                download="bani-live-qr-code.png"
                onClick={handleDownload}
                className="absolute bottom-4 right-4 bg-white hover:bg-stone-50 border border-[#B89A5A]/50 text-[#B89A5A] w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all"
                title="Download QR Code"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider line before footer options */}
        <div className="w-full h-px bg-stone-200/80 my-8 sm:my-10" />

        {/* Bottom Options: Having trouble */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-[16px] leading-[24px] font-bold text-[#C5A059]">
              Having Trouble Paying via QR?
            </h3>
            <p className="text-[12px] text-stone-400 mt-1 font-sans">
              Alternative direct payment options are available below.
            </p>
          </div>

          <a
            href="https://pages.razorpay.com/pl_Qp0t7aUXfiRkkb/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-black text-white text-[13px] uppercase font-semibold rounded-full tracking-[0.14em] hover:bg-stone-900 transition-colors shadow-md"
          >
            Pay via RazorPay
          </a>
        </div>
      </div>
    </div>
  );
}
