import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the WhatsApp assistant operated by Furkan Güven handles personal data: what is processed, why, by whom, how long, and how to have it deleted.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "17 October 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl tracking-[-0.01em] text-bone md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="px-6 pb-24 pt-28 md:px-10 md:pt-36">
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Last updated {UPDATED}</p>
        <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
          Privacy Policy
        </h1>
        <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
          This policy covers the WhatsApp assistant (&ldquo;CRM Automation Assistant&rdquo;) that Furkan Güven builds and
          operates for real-estate agencies, including its test deployment. It explains what personal data the assistant
          handles when you message an agency&apos;s WhatsApp number, why, who else processes it, how long it is kept and
          how to have it deleted.
        </p>

        <Section title="What we process">
          <p>
            Your WhatsApp phone number and profile name; the messages you send (text, voice notes &mdash; which are
            converted to text &mdash; and the captions of images or documents); details you choose to share, such as your
            name, e-mail address, budget and property preferences; and the appointments you book, change or cancel.
          </p>
        </Section>

        <Section title="Why">
          <p>
            To answer your enquiries, suggest suitable listings, book and manage property viewings or office meetings,
            send one reminder before an appointment, record your request in the agency&apos;s CRM so its staff can follow
            up, and keep the service reliable and protected against spam and abuse.
          </p>
        </Section>

        <Section title="Who processes it">
          <p>
            Meta Platforms (WhatsApp Business Platform, message delivery); OpenAI (generating replies and transcribing
            voice notes); Airtable (the agency&apos;s CRM records); Cal.com (appointment scheduling and invitations);
            Hetzner Online (server and database hosting in Nuremberg, Germany); Cloudflare (network delivery); and
            Telegram (short operational alerts to the operator, with a conversation reference, the last digits of a phone
            number and a brief description of the issue). Some of these providers process data outside Türkiye and
            the European Union.
          </p>
          <p>Your data is not sold and is not used for advertising.</p>
        </Section>

        <Section title="How long">
          <p>
            Conversation and appointment records are kept for as long as the agency works with you, and are deleted on
            request. Database backups are kept for 14 days. Technical logs are kept only as long as needed to operate and
            troubleshoot the service.
          </p>
        </Section>

        <Section title="Stopping messages">
          <p>
            Reply <span className="font-mono text-bone">STOP</span> at any time and the assistant will not message you
            again; reply <span className="font-mono text-bone">START</span> to resume.
          </p>
        </Section>

        <Section title="Your rights and data deletion">
          <p>
            You can ask for a copy of your data, its correction or its deletion. E-mail{" "}
            <a className="text-brass underline-offset-4 hover:underline" href="mailto:info@furkanguven.tech">
              info@furkanguven.tech
            </a>{" "}
            from any address, including the WhatsApp number you used; we answer within 30 days and confirm once the data
            has been deleted.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Furkan Güven &middot;{" "}
            <a className="text-brass underline-offset-4 hover:underline" href="mailto:info@furkanguven.tech">
              info@furkanguven.tech
            </a>
          </p>
        </Section>

        <hr className="mt-16 border-line" />

        <section lang="tr" className="mt-16">
          <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">Gizlilik Politikası (Türkçe)</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Bu politika, Furkan Güven&apos;in emlak ofisleri için kurduğu ve işlettiği WhatsApp asistanını (&ldquo;CRM
              Automation Assistant&rdquo;) ve test kurulumunu kapsar.
            </p>
            <p>
              <span className="text-bone">İşlenen veriler:</span> WhatsApp numaranız ve profil adınız; gönderdiğiniz
              mesajlar (metin, yazıya çevrilen sesli mesajlar, görsel ve belge açıklamaları); paylaşmayı seçtiğiniz ad,
              e-posta, bütçe ve konut tercihleri; aldığınız, değiştirdiğiniz ya da iptal ettiğiniz randevular.
            </p>
            <p>
              <span className="text-bone">Amaç:</span> sorularınızı yanıtlamak, uygun ilanları önermek, gösterim ve ofis
              randevularını oluşturup yönetmek, randevudan önce bir hatırlatma göndermek, talebinizi ofisin CRM&apos;ine
              kaydetmek ve hizmeti güvenilir tutup spam ve kötüye kullanıma karşı korumak.
            </p>
            <p>
              <span className="text-bone">Verileri işleyenler:</span> Meta Platforms (WhatsApp), OpenAI (yanıt üretimi ve
              ses tanıma), Airtable (ofisin CRM kayıtları), Cal.com (randevu), Hetzner Online (Nürnberg, Almanya&apos;da
              sunucu ve veritabanı), Cloudflare (ağ) ve Telegram (işletmeciye giden kısa teknik uyarılar: konuşma
              numarası, telefonun son haneleri ve sorunun kısa açıklaması). Bu hizmetlerin bir kısmı verileri Türkiye ve Avrupa Birliği dışında işler. Verileriniz satılmaz
              ve reklam için kullanılmaz.
            </p>
            <p>
              <span className="text-bone">Saklama:</span> konuşma ve randevu kayıtları ofisle ilişkiniz sürdükçe tutulur
              ve talebiniz üzerine silinir; veritabanı yedekleri 14 gün saklanır.
            </p>
            <p>
              <span className="text-bone">Mesajları durdurma:</span> istediğiniz an <span className="font-mono text-bone">DUR</span>{" "}
              ya da <span className="font-mono text-bone">STOP</span> yazın; yeniden başlatmak için{" "}
              <span className="font-mono text-bone">BAŞLA</span> yazın.
            </p>
            <p>
              <span className="text-bone">Haklarınız ve silme:</span> verilerinizin bir kopyasını, düzeltilmesini ya da
              silinmesini{" "}
              <a className="text-brass underline-offset-4 hover:underline" href="mailto:info@furkanguven.tech">
                info@furkanguven.tech
              </a>{" "}
              adresinden isteyebilirsiniz; 30 gün içinde yanıtlanır ve silme tamamlandığında bildirilir.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
