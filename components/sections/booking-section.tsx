import { getLocale, getTranslations } from "next-intl/server";
import { getServicePackages } from "@/lib/data";
import { Button } from "@/components/ui/button";

export async function BookingSection() {
  const t = await getTranslations("booking");
  const locale = (await getLocale()) as "vi" | "en";
  const servicePackages = getServicePackages(locale);

  return (
    <section className="section-padding">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-copy">{t("copy")}</p>
        </div>

        <form className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label={t("fullName")} name="fullName" placeholder={t("placeholder.name")} />
            <Field label={t("phone")} name="phone" placeholder={t("placeholder.phone")} />
            <Field label={t("email")} name="email" type="email" placeholder={t("placeholder.email")} />
            <Field label={t("date")} name="date" type="date" />
            <Field label={t("time")} name="time" type="time" />
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">{t("service")}</label>
              <select
                name="service"
                className="h-12 w-full rounded-2xl border border-primary/10 bg-background px-4 text-sm text-primary outline-none ring-0"
              >
                {servicePackages.map((item, index) => (
                  <option key={item.key} value={item.key}>
                    {`${t("packageLabel")} ${index + 1} - ${item.duration} - ${item.price}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <label className="text-sm font-medium text-primary">{t("notes")}</label>
            <textarea
              name="notes"
              rows={5}
              placeholder={t("placeholder.notes")}
              className="w-full rounded-[1.5rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none"
            />
          </div>
          <div className="mt-6">
            <Button type="submit" className="w-full md:w-auto">
              {t("submit")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text"
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-primary/10 bg-background px-4 text-sm text-primary outline-none"
      />
    </div>
  );
}
