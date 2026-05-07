import React from "react";
import { TiltFlipCard, ArrowBtn, CardBack } from "./TiltFlipCard";

function CardFront({ children, minHeight, extraTopPad = false }) {
  return (
    <div
      className="relative p-8 flex flex-col justify-center"
      style={{ minHeight, paddingTop: extraTopPad ? 48 : 32 }}
    >
      {children}
    </div>
  );
}

export function Pricing() {
  return (
    <div className="pt-16 pb-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Affordable Plans for Everyone
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Choose the best fit for you
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-end">
        <TiltFlipCard
          minHeight={320}
          front={
            <div
              className="relative p-8 flex flex-col justify-center"
              style={{ minHeight: 320 }}
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-[#111] rounded-full text-sm font-semibold text-white mb-5">
                  3 Month
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Coupon: OFFER25
                  </span>
                  <span className="bg-[#111] text-white text-xs font-bold px-2 py-0.5 rounded">
                    25% OFF
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-[#111]">
                    ₹849
                  </span>
                  <span className="text-xl text-gray-400 line-through font-semibold">
                    ₹1099
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  3 Months full access to Kompile company sheets.
                </p>
              </div>

              <div className="absolute bottom-6 right-6">
                <ArrowBtn dark />
              </div>
            </div>
          }
          back={
            <CardBack
              price="₹283/month"
              label="Billed as ₹849 for 3 months"
              bg="#f0eeeb"
              textColor="#111"
              arrowDark
            />
          }
        />

        <TiltFlipCard
          accent
          minHeight={370}
          front={
            <div
              className="relative p-8 flex flex-col justify-center"
              style={{ minHeight: 370 }}
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-black/25 border border-white/20 rounded-full text-sm font-semibold text-white mb-5">
                  6 Month
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-widest text-white/80 uppercase">
                    Coupon: OFFER25
                  </span>
                  <span className="bg-[#111] text-white text-xs font-bold px-2 py-0.5 rounded">
                    25% OFF
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-white">
                    ₹1299
                  </span>
                  <span className="text-xl text-white/60 line-through font-semibold">
                    ₹1899
                  </span>
                </div>
                <p className="text-sm text-white/80">
                  6 Months full access to Kompile company sheets.
                </p>
              </div>
              {/* Arrow pinned bottom-right */}
              <div className="absolute bottom-6 right-6">
                <ArrowBtn dark={false} />
              </div>
            </div>
          }
          back={
            <CardBack
              price="₹216/month"
              label="Billed as ₹1299 for 6 months"
              bg="#f97316"
              textColor="#fff"
              arrowDark={false}
            />
          }
        />

        <div className="relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-white text-[#111] px-5 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
            Most Popular
          </div>
          <TiltFlipCard
            featured
            minHeight={420}
            front={
              <div
                className="relative p-8 pt-12 flex flex-col justify-center"
                style={{ minHeight: 420 }}
              >
                <div>
                  <div className="inline-block px-4 py-1.5 bg-white text-[#111] rounded-full text-sm font-semibold mb-5">
                    Unlimited Access
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Coupon: OFFER25
                    </span>
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      25% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">
                      ₹1499
                    </span>
                    <span className="text-xl text-gray-500 line-through font-semibold">
                      ₹2199
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Unlimited Access to Kompile company sheets.
                  </p>
                </div>

                <div className="absolute bottom-6 right-6">
                  <ArrowBtn dark={false} />
                </div>
              </div>
            }
            back={
              <CardBack
                price="₹1499 once"
                label="Lifetime unlimited access"
                bg="#111111"
                textColor="#fff"
                arrowDark={false}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
