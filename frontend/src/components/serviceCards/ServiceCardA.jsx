import React from "react";
import { ShieldCheck, Zap, BadgeCheck, Gem, ChevronLeft, Gift, Tags, Percent } from "lucide-react";

/*
  ServiceCardA (Premium v2) — Palette update only
  - المطلوب: تغيير الألوان والتدرجات فقط لتتطابق مع بطاقة I
  - لا تغيير في التخطيط أو الأبعاد أو المحتوى
  - يعتمد على لوحة الألوان الدافئة لبطاقة I (Desert Sand / Burnished Bronze)
*/

const ServiceCardA = () => {
  return (
    <div
      data-testid="service-card-a"
      className="relative w-[370px] max-w-[370px] min-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[20px] overflow-hidden"
      style={{
        // خلفية مطابقة لبطاقة I
        background:
          "radial-gradient(1000px 360px at 120% -10%, rgba(245,158,11,0.12) 0%, rgba(253,230,138,0.10) 28%, transparent 65%), linear-gradient(135deg, #FFF8ED 0%, #FCEFDA 55%, #F6E5CB 100%)",
        boxShadow:
          "0 18px 48px rgba(124,45,18,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* إطار زخرفي مع تونات برونزية */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(181,129,46,0.20), inset 0 0 0 2px rgba(214,167,86,0.18), 0 12px 40px rgba(124,45,18,0.12)",
        }}
      />

      {/* دبابيس الزوايا */}
      <div aria-hidden className="absolute inset-0">
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} m-[10px] w-4 h-4 rounded-sm`}
            style={{
              background:
                "linear-gradient(180deg, #D6A756, #B5812E)",
              boxShadow:
                "0 2px 6px rgba(120,53,15,0.25), inset 0 1px 0 rgba(255,255,255,0.75)",
            }}
          />
        ))}
      </div>

      {/* عمود معدني محسّن (احترافي للغاية) */}
      <div
        aria-hidden
        className="absolute top-4 bottom-4 right-5 rounded-full"
        style={{ width: '3px', opacity: 0.95 }}
      >
        {/* هالة اندماج ناعمة */}
        <span
          aria-hidden
          className="absolute -inset-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(214,167,86,0.18), rgba(180,83,9,0.08))",
            filter: "blur(3px)",
          }}
        />
        {/* جسم العمود الأسطواني (تدرجات متعددة لتعزيز الواقعية) */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #EBCB88 0%, #C99843 50%, #B9852F 80%, #E6C07A 100%), \
               linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 28%, rgba(0,0,0,0.08) 52%, rgba(255,255,255,0.55) 100%)",
            backgroundBlendMode: 'overlay, normal',
            boxShadow:
              "0 8px 18px rgba(212,175,55,0.18), inset 0 1px 0 rgba(255,255,255,0.85)",
            border: "1px solid rgba(214,167,86,0.35)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            filter: "saturate(105%) brightness(102%)",
          }}
        />
        {/* لمعة طولية ناعمة */}
        <span
          aria-hidden
          className="absolute inset-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.25) 100%)",
            mixBlendMode: "screen",
            opacity: 0.65,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        {/* نسيج معدني ميكروي خفيف جداً لإحساس فويل (بدون تشويش بصري) */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            opacity: 0.15,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />
      </div>

      {/* الشريط العلوي - عنوان فرعي + عنوان */}
      <div className="relative z-10 px-6 pt-6" dir="rtl">
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            aria-label=""
            data-testid="service-card-a-subtitle"
            className="inline-flex items-center gap-1 rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#3F2D17",
              background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
              boxShadow:
                "0 2px 6px rgba(120,53,15,0.18), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 2px 8px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.6)",
              border: "1px solid rgba(214,167,86,0.45)",
              padding: "8px 14px",
              minWidth: "72px",
              minHeight: "30px",
              position: "relative",
              overflow: "hidden",
              transform: "translateX(-4px)"
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "9999px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.38), rgba(255,255,255,0.08))",
                mixBlendMode: "screen",
                opacity: 0.85,
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: "2px",
                borderRadius: "9999px",
                boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.35), inset -2px -2px 6px rgba(0,0,0,0.08)",
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "9999px",
                background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
                opacity: 0.10,
                filter: "saturate(110%)",
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: "2px",
                left: "8px",
                width: "42%",
                height: "38%",
                borderRadius: "9999px",
                transform: "rotate(-18deg)",
                background: "linear-gradient(90deg, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                filter: "blur(1px)",
                opacity: 0.65,
                pointerEvents: "none"
              }}
            />
          </button>
          <div
            aria-hidden
            className="h-px flex-1 mx-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(214,167,86,0.55), transparent)",
            }}
          />
          <span className="text-[11px] text-gray-400/80 font-semibold">CARD A</span>
        </div>

        <h3
          data-testid="service-card-a-title"
          className="mt-6 text-[26px] leading-tight font-black tracking-tight"
          style={{
            color: "#3F2D17",
            textShadow: "0 1px 0 rgba(255,255,255,0.65)",
          }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* الجسم المقسوم: سكة معلومات يمين + سطح بطولي يسار */}
      <div className="relative z-10 grid grid-cols-[1fr_1.05fr] gap-0 px-6 mt-4" dir="rtl">
        {/* يمين: كتل المعلومات */}
        <div
          data-testid="service-card-a-info"
          className="flex flex-col gap-3 pr-1"
        >
          {/* كتلة 1 */}
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.85)",
              boxShadow:
                "0 8px 20px rgba(120,53,15,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.45)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>فئات متعددة:</div>
            <div className="text-[12px]" style={{ color: "#6B4E2E" }}>مالية، العاب، تسوق</div>
          </div>
          {/* كتلة 2 */}
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.85)",
              boxShadow:
                "0 8px 20px rgba(120,53,15,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.45)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>توافق عالمي:</div>
            <div className="text-[12px]" style={{ color: "#6B4E2E" }}>منصات، تطبيقات، مواقع</div>
          </div>
          {/* كتلة 3 */}
          <div
            className="rounded-xl p-3 text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(214,167,86,0.18), rgba(245,158,11,0.12))",
              border: "1px dashed rgba(214,167,86,0.55)",
              boxShadow: "0 10px 24px rgba(180,83,9,0.18)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>باقات متنوعة</div>
          </div>
        </div>

        {/* يسار: سطح بطولي مع أقواس ناعمة (ألوان برونزية) */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 rounded-xl"
            style={{
              background:
                "radial-gradient(420px 220px at 0% 10%, rgba(214,167,86,0.18), transparent 60%), radial-gradient(420px 220px at 120% 90%, rgba(245,158,11,0.12), transparent 60%)",
              border: "1px solid rgba(214,167,86,0.30)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.65), 0 10px 28px rgba(124,45,18,0.18)",
            }}
          />

          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            {/* أقواس زخرفية + أيقونات موزعة دائريًا */}
            <div className="flex items-start justify-center pr-0 pt-2">
              <div className="relative w-28 h-28">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `scale(${1 + i * 0.18})`,
                      boxShadow:
                        "0 0 0 1px rgba(214,167,86,0.25), 0 0 40px rgba(180,83,9,0.10)",
                    }}
                  />
                ))}

                {/* أيقونات الهدايا/العروض/الخصومات موزعة على محيط الدوائر */}
                {[
                  { Icon: Gift, angle: 0, testid: 'service-card-a-arc-icon-gift' },
                  { Icon: Tags, angle: 120, testid: 'service-card-a-arc-icon-offers' },
                  { Icon: Percent, angle: 240, testid: 'service-card-a-arc-icon-discount' },
                ].map(({ Icon, angle, testid }, idx) => (
                  <span
                    key={idx}
                    data-testid={testid}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(66px) rotate(${-angle}deg)` }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full shadow"
                      style={{
                        color: "#3F2D17",
                        background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
                        border: "1px solid rgba(214,167,86,0.45)",
                        boxShadow: "0 6px 16px rgba(180,83,9,0.18), inset 0 1px 0 rgba(255,255,255,0.95)",
                      }}
                    >
                      <Icon size={12} />
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* زر المزيد */}
            <div className="flex items-center justify-center mt-auto mb-[6px]">
              <button
                type="button"
                data-testid="service-card-a-cta-button"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-extrabold"
                style={{
                  color: "#3F2D17",
                  background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
                  boxShadow:
                    "0 12px 28px rgba(180,83,9,0.22), inset 0 1px 0 rgba(255,255,255,0.95)",
                }}
              >
                المزيد
                <ChevronLeft size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* فاصل */}
      <div className="px-6 mt-3" aria-hidden>
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(214,167,86,0.55), rgba(245,158,11,0.45), rgba(214,167,86,0.55), transparent)",
          }}
        />
      </div>

      {/* أيقونات المزايا */}
      <div
        data-testid="service-card-a-features"
        className="grid grid-cols-4 gap-2 text-center px-6 pt-3" dir="rtl"
      >
        {/* Security */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              color: "#B5812E",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
              boxShadow:
                "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.65)",
            }}
            data-testid="service-card-a-feature-security"
          >
            <ShieldCheck size={18} />
          </span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>أمان</span>
        </div>
        {/* Speed */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              color: "#B45309",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
              boxShadow:
                "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.65)",
            }}
            data-testid="service-card-a-feature-speed"
          >
            <Zap size={18} />
          </span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>سرعة</span>
        </div>
        {/* Trust */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              color: "#CA8A04",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
              boxShadow:
                "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.65)",
            }}
            data-testid="service-card-a-feature-trust"
          >
            <BadgeCheck size={18} />
          </span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>ثقة</span>
        </div>
        {/* Quality */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              color: "#A16207",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
              boxShadow:
                "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
              border: "1px solid rgba(214,167,86,0.65)",
            }}
            data-testid="service-card-a-feature-quality"
          >
            <Gem size={18} />
          </span>
          <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>جودة</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardA;