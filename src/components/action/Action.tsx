import Disclosure from "./Disclosure";
import Actionbanner from "./Actionbanner";
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

const Action = () => {
  const { lang } = useLanguage();
  const t = translations[lang]?.action;

  if (!t || !t.items) return null;

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* 1. Banner (Language handled inside Actionbanner component) */}
      <Actionbanner />

      {/* 2. Main Content Area */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col gap-4">
          {t.items.map((item: any, index: number) => (
            <Disclosure key={index} title={item.title}>
              {item.content.map((paragraph: string, pIndex: number) => (
                <p key={pIndex} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Action;