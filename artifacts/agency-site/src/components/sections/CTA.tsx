import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { FadeIn, Section } from '@/components/ui/section';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown, Mail, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DEFAULT_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxwjoWerSl-mdwLdcBThYfQ99pjzBQQjqOjI48a4chaxpbRFpgg_Ntm8olYe_E7ctYD/exec';
const APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL;

const COUNTRY_CODES = [
  { label: '🇦🇫 Afghanistan +93', value: '+93' },
  { label: '🇦🇱 Albania +355', value: '+355' },
  { label: '🇩🇿 Algeria +213', value: '+213' },
  { label: '🇦🇸 American Samoa +1', value: '+1' },
  { label: '🇦🇩 Andorra +376', value: '+376' },
  { label: '🇦🇴 Angola +244', value: '+244' },
  { label: '🇦🇮 Anguilla +1', value: '+1' },
  { label: '🇦🇶 Antarctica +672', value: '+672' },
  { label: '🇦🇬 Antigua & Barbuda +1', value: '+1' },
  { label: '🇦🇷 Argentina +54', value: '+54' },
  { label: '🇦🇲 Armenia +374', value: '+374' },
  { label: '🇦🇼 Aruba +297', value: '+297' },
  { label: '🇦🇺 Australia +61', value: '+61' },
  { label: '🇦🇹 Austria +43', value: '+43' },
  { label: '🇦🇿 Azerbaijan +994', value: '+994' },
  { label: '🇧🇸 Bahamas +1', value: '+1' },
  { label: '🇧🇭 Bahrain +973', value: '+973' },
  { label: '🇧🇩 Bangladesh +880', value: '+880' },
  { label: '🇧🇧 Barbados +1', value: '+1' },
  { label: '🇧🇾 Belarus +375', value: '+375' },
  { label: '🇧🇪 Belgium +32', value: '+32' },
  { label: '🇧🇿 Belize +501', value: '+501' },
  { label: '🇧🇯 Benin +229', value: '+229' },
  { label: '🇧🇲 Bermuda +1', value: '+1' },
  { label: '🇧🇹 Bhutan +975', value: '+975' },
  { label: '🇧🇴 Bolivia +591', value: '+591' },
  { label: '🇧🇦 Bosnia & Herzegovina +387', value: '+387' },
  { label: '🇧🇼 Botswana +267', value: '+267' },
  { label: '🇧🇷 Brazil +55', value: '+55' },
  { label: '🇧🇳 Brunei +673', value: '+673' },
  { label: '🇧🇬 Bulgaria +359', value: '+359' },
  { label: '🇧🇫 Burkina Faso +226', value: '+226' },
  { label: '🇧🇮 Burundi +257', value: '+257' },
  { label: '🇰🇭 Cambodia +855', value: '+855' },
  { label: '🇨🇲 Cameroon +237', value: '+237' },
  { label: '🇨🇦 Canada +1', value: '+1' },
  { label: '🇨🇻 Cape Verde +238', value: '+238' },
  { label: '🇰🇾 Cayman Islands +1', value: '+1' },
  { label: '🇨🇫 Central African Republic +236', value: '+236' },
  { label: '🇹🇩 Chad +235', value: '+235' },
  { label: '🇨🇱 Chile +56', value: '+56' },
  { label: '🇨🇳 China +86', value: '+86' },
  { label: '🇨🇴 Colombia +57', value: '+57' },
  { label: '🇰🇲 Comoros +269', value: '+269' },
  { label: '🇨🇬 Congo +242', value: '+242' },
  { label: '🇨🇩 Congo - Kinshasa +243', value: '+243' },
  { label: '🇨🇰 Cook Islands +682', value: '+682' },
  { label: '🇨🇷 Costa Rica +506', value: '+506' },
  { label: '🇭🇷 Croatia +385', value: '+385' },
  { label: '🇨🇺 Cuba +53', value: '+53' },
  { label: '🇨🇼 Curaçao +599', value: '+599' },
  { label: '🇨🇾 Cyprus +357', value: '+357' },
  { label: '🇨🇿 Czechia +420', value: '+420' },
  { label: '🇩🇰 Denmark +45', value: '+45' },
  { label: '🇩🇯 Djibouti +253', value: '+253' },
  { label: '🇩🇲 Dominica +1', value: '+1' },
  { label: '🇩🇴 Dominican Republic +1', value: '+1' },
  { label: '🇪🇨 Ecuador +593', value: '+593' },
  { label: '🇪🇬 Egypt +20', value: '+20' },
  { label: '🇸🇻 El Salvador +503', value: '+503' },
  { label: '🇬🇶 Equatorial Guinea +240', value: '+240' },
  { label: '🇪🇷 Eritrea +291', value: '+291' },
  { label: '🇪🇪 Estonia +372', value: '+372' },
  { label: '🇸🇿 Eswatini +268', value: '+268' },
  { label: '🇪🇹 Ethiopia +251', value: '+251' },
  { label: '🇫🇯 Fiji +679', value: '+679' },
  { label: '🇫🇮 Finland +358', value: '+358' },
  { label: '🇫🇷 France +33', value: '+33' },
  { label: '🇬🇫 French Guiana +594', value: '+594' },
  { label: '🇵🇫 French Polynesia +689', value: '+689' },
  { label: '🇬🇦 Gabon +241', value: '+241' },
  { label: '🇬🇲 Gambia +220', value: '+220' },
  { label: '🇬🇪 Georgia +995', value: '+995' },
  { label: '🇩🇪 Germany +49', value: '+49' },
  { label: '🇬🇭 Ghana +233', value: '+233' },
  { label: '🇬🇮 Gibraltar +350', value: '+350' },
  { label: '🇬🇷 Greece +30', value: '+30' },
  { label: '🇬🇱 Greenland +299', value: '+299' },
  { label: '🇬🇩 Grenada +1', value: '+1' },
  { label: '🇬🇵 Guadeloupe +590', value: '+590' },
  { label: '🇬🇺 Guam +1', value: '+1' },
  { label: '🇬🇹 Guatemala +502', value: '+502' },
  { label: '🇬🇳 Guinea +224', value: '+224' },
  { label: '🇬🇼 Guinea-Bissau +245', value: '+245' },
  { label: '🇬🇾 Guyana +592', value: '+592' },
  { label: '🇭🇹 Haiti +509', value: '+509' },
  { label: '🇭🇳 Honduras +504', value: '+504' },
  { label: '🇭🇰 Hong Kong +852', value: '+852' },
  { label: '🇭🇺 Hungary +36', value: '+36' },
  { label: '🇮🇸 Iceland +354', value: '+354' },
  { label: '🇮🇳 India +91', value: '+91' },
  { label: '🇮🇩 Indonesia +62', value: '+62' },
  { label: '🇮🇷 Iran +98', value: '+98' },
  { label: '🇮🇶 Iraq +964', value: '+964' },
  { label: '🇮🇪 Ireland +353', value: '+353' },
  { label: '🇮🇱 Israel +972', value: '+972' },
  { label: '🇮🇹 Italy +39', value: '+39' },
  { label: '🇯🇲 Jamaica +1', value: '+1' },
  { label: '🇯🇵 Japan +81', value: '+81' },
  { label: '🇯🇴 Jordan +962', value: '+962' },
  { label: '🇰🇿 Kazakhstan +7', value: '+7' },
  { label: '🇰🇪 Kenya +254', value: '+254' },
  { label: '🇰🇮 Kiribati +686', value: '+686' },
  { label: '🇽🇰 Kosovo +383', value: '+383' },
  { label: '🇰🇼 Kuwait +965', value: '+965' },
  { label: '🇰🇬 Kyrgyzstan +996', value: '+996' },
  { label: '🇱🇦 Laos +856', value: '+856' },
  { label: '🇱🇻 Latvia +371', value: '+371' },
  { label: '🇱🇧 Lebanon +961', value: '+961' },
  { label: '🇱🇸 Lesotho +266', value: '+266' },
  { label: '🇱🇷 Liberia +231', value: '+231' },
  { label: '🇱🇾 Libya +218', value: '+218' },
  { label: '🇱🇮 Liechtenstein +423', value: '+423' },
  { label: '🇱🇹 Lithuania +370', value: '+370' },
  { label: '🇱🇺 Luxembourg +352', value: '+352' },
  { label: '🇲🇴 Macau +853', value: '+853' },
  { label: '🇲🇰 North Macedonia +389', value: '+389' },
  { label: '🇲🇬 Madagascar +261', value: '+261' },
  { label: '🇲🇼 Malawi +265', value: '+265' },
  { label: '🇲🇾 Malaysia +60', value: '+60' },
  { label: '🇲🇻 Maldives +960', value: '+960' },
  { label: '🇲🇱 Mali +223', value: '+223' },
  { label: '🇲🇹 Malta +356', value: '+356' },
  { label: '🇲🇭 Marshall Islands +692', value: '+692' },
  { label: '🇲🇶 Martinique +596', value: '+596' },
  { label: '🇲🇷 Mauritania +222', value: '+222' },
  { label: '🇲🇺 Mauritius +230', value: '+230' },
  { label: '🇾🇹 Mayotte +262', value: '+262' },
  { label: '🇲🇽 Mexico +52', value: '+52' },
  { label: '🇫🇲 Micronesia +691', value: '+691' },
  { label: '🇲🇩 Moldova +373', value: '+373' },
  { label: '🇲🇨 Monaco +377', value: '+377' },
  { label: '🇲🇳 Mongolia +976', value: '+976' },
  { label: '🇲🇪 Montenegro +382', value: '+382' },
  { label: '🇲🇸 Montserrat +1', value: '+1' },
  { label: '🇲🇦 Morocco +212', value: '+212' },
  { label: '🇲🇿 Mozambique +258', value: '+258' },
  { label: '🇲🇲 Myanmar +95', value: '+95' },
  { label: '🇳🇦 Namibia +264', value: '+264' },
  { label: '🇳🇷 Nauru +674', value: '+674' },
  { label: '🇳🇵 Nepal +977', value: '+977' },
  { label: '🇳🇱 Netherlands +31', value: '+31' },
  { label: '🇳🇨 New Caledonia +687', value: '+687' },
  { label: '🇳🇿 New Zealand +64', value: '+64' },
  { label: '🇳🇮 Nicaragua +505', value: '+505' },
  { label: '🇳🇪 Niger +227', value: '+227' },
  { label: '🇳🇬 Nigeria +234', value: '+234' },
  { label: '🇳🇺 Niue +683', value: '+683' },
  { label: '🇰🇵 North Korea +850', value: '+850' },
  { label: '🇲🇵 Northern Mariana Islands +1', value: '+1' },
  { label: '🇳🇴 Norway +47', value: '+47' },
  { label: '🇴🇲 Oman +968', value: '+968' },
  { label: '🇵🇰 Pakistan +92', value: '+92' },
  { label: '🇵🇼 Palau +680', value: '+680' },
  { label: '🇵🇸 Palestine +970', value: '+970' },
  { label: '🇵🇦 Panama +507', value: '+507' },
  { label: '🇵🇬 Papua New Guinea +675', value: '+675' },
  { label: '🇵🇾 Paraguay +595', value: '+595' },
  { label: '🇵🇪 Peru +51', value: '+51' },
  { label: '🇵🇭 Philippines +63', value: '+63' },
  { label: '🇵🇱 Poland +48', value: '+48' },
  { label: '🇵🇹 Portugal +351', value: '+351' },
  { label: '🇵🇷 Puerto Rico +1', value: '+1' },
  { label: '🇶🇦 Qatar +974', value: '+974' },
  { label: '🇷🇴 Romania +40', value: '+40' },
  { label: '🇷🇺 Russia +7', value: '+7' },
  { label: '🇷🇼 Rwanda +250', value: '+250' },
  { label: '🇼🇸 Samoa +685', value: '+685' },
  { label: '🇸🇲 San Marino +378', value: '+378' },
  { label: '🇸🇹 São Tomé & Príncipe +239', value: '+239' },
  { label: '🇸🇦 Saudi Arabia +966', value: '+966' },
  { label: '🇸🇳 Senegal +221', value: '+221' },
  { label: '🇷🇸 Serbia +381', value: '+381' },
  { label: '🇸🇨 Seychelles +248', value: '+248' },
  { label: '🇸🇱 Sierra Leone +232', value: '+232' },
  { label: '🇸🇬 Singapore +65', value: '+65' },
  { label: '🇸🇰 Slovakia +421', value: '+421' },
  { label: '🇸🇮 Slovenia +386', value: '+386' },
  { label: '🇸🇧 Solomon Islands +677', value: '+677' },
  { label: '🇸🇴 Somalia +252', value: '+252' },
  { label: '🇿🇦 South Africa +27', value: '+27' },
  { label: '🇰🇷 South Korea +82', value: '+82' },
  { label: '🇸🇸 South Sudan +211', value: '+211' },
  { label: '🇪🇸 Spain +34', value: '+34' },
  { label: '🇱🇰 Sri Lanka +94', value: '+94' },
  { label: '🇸🇩 Sudan +249', value: '+249' },
  { label: '🇸🇷 Suriname +597', value: '+597' },
  { label: '🇸🇯 Svalbard & Jan Mayen +47', value: '+47' },
  { label: '🇸🇪 Sweden +46', value: '+46' },
  { label: '🇨🇭 Switzerland +41', value: '+41' },
  { label: '🇸🇾 Syria +963', value: '+963' },
  { label: '🇹🇼 Taiwan +886', value: '+886' },
  { label: '🇹🇯 Tajikistan +992', value: '+992' },
  { label: '🇹🇿 Tanzania +255', value: '+255' },
  { label: '🇹🇭 Thailand +66', value: '+66' },
  { label: '🇹🇱 Timor-Leste +670', value: '+670' },
  { label: '🇹🇬 Togo +228', value: '+228' },
  { label: '🇹🇰 Tokelau +690', value: '+690' },
  { label: '🇹🇴 Tonga +676', value: '+676' },
  { label: '🇹🇹 Trinidad & Tobago +1', value: '+1' },
  { label: '🇹🇳 Tunisia +216', value: '+216' },
  { label: '🇹🇷 Turkey +90', value: '+90' },
  { label: '🇹🇲 Turkmenistan +993', value: '+993' },
  { label: '🇹🇨 Turks & Caicos Islands +1', value: '+1' },
  { label: '🇹🇻 Tuvalu +688', value: '+688' },
  { label: '🇺🇬 Uganda +256', value: '+256' },
  { label: '🇺🇦 Ukraine +380', value: '+380' },
  { label: '🇦🇪 United Arab Emirates +971', value: '+971' },
  { label: '🇬🇧 United Kingdom +44', value: '+44' },
  { label: '🇺🇸 United States +1', value: '+1' },
  { label: '🇺🇾 Uruguay +598', value: '+598' },
  { label: '🇺🇿 Uzbekistan +998', value: '+998' },
  { label: '🇻🇺 Vanuatu +678', value: '+678' },
  { label: '🇻🇦 Vatican City +379', value: '+379' },
  { label: '🇻🇪 Venezuela +58', value: '+58' },
  { label: '🇻🇳 Vietnam +84', value: '+84' },
  { label: '🇼🇫 Wallis & Futuna +681', value: '+681' },
  { label: '🇾🇪 Yemen +967', value: '+967' },
  { label: '🇿🇲 Zambia +260', value: '+260' },
  { label: '🇿🇼 Zimbabwe +263', value: '+263' },
];

export default function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [countrySearch, setCountrySearch] = useState('');
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [needs, setNeeds] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const countryPickerRef = useRef<HTMLDivElement | null>(null);

  const filteredCountries = useMemo(
    () =>
      COUNTRY_CODES.filter((country) =>
        country.label.toLowerCase().includes(countrySearch.toLowerCase()),
      ),
    [countrySearch],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryPickerRef.current &&
        !countryPickerRef.current.contains(event.target as Node)
      ) {
        setCountryMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedNeeds = needs.trim();

    if (!APPS_SCRIPT_URL) {
      const message = 'Contact form is not configured yet. Add the Google Apps Script URL.';
      setError(message);
      toast({
        title: 'Configuration missing',
        description: message,
      });
      return;
    }

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedNeeds) {
      const message = 'Please complete all fields before submitting.';
      setError(message);
      toast({
        title: 'Missing details',
        description: message,
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      const message = 'Enter a valid email address.';
      setError(message);
      toast({
        title: 'Invalid email',
        description: message,
      });
      return;
    }

    setSubmitting(true);
    setError(null);

    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      countryCode: selectedCountry.value,
      phone: trimmedPhone,
      needs: trimmedNeeds,
    };

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string } = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText) as { success?: boolean; message?: string };
        } catch {
          data = {};
        }
      }

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Failed to send inquiry.");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setNeeds("");
      setCountrySearch("");
      setCountryMenuOpen(false);

      toast({
        title: "Message sent",
        description: "Your inquiry was delivered successfully.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send inquiry.";
      setError(message);
      toast({
        title: "Send failed",
        description: message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section id="contact" className="py-32 relative overflow-hidden bg-[#0A0A0A]" data-testid="section-cta">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <FadeIn className="space-y-6">
            <div className="text-[#765EFF] text-sm font-medium uppercase tracking-[0.35em]">Ready to grow?</div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-4 tracking-tight">
              Dominate Your Local Market.
            </h2>
            <p className="text-[#999] text-lg leading-relaxed max-w-2xl">
              Stop losing premium jobs to competitors with better marketing. Let's build a digital presence that reflects the true quality of your work.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                form="contact-form"
                className="inline-flex items-center justify-center rounded-full bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]"
              >
                Submit Inquiry
              </button>
              <button
                type="button"
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30 hover:text-white"
              >
                See Our Work
              </button>
            </div>
            <p className="text-sm text-[#6B7280]">Currently accepting 2 new projects for next month.</p>
          </FadeIn>

          <FadeIn>
            <form id="contact-form" onSubmit={handleSubmit} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#765EFF]/20 to-transparent" />
              <div className="space-y-6">
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      key="cta-success"
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 16, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="rounded-[1.75rem] border border-emerald-500/20 bg-emerald-500/5 p-4 shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300 shadow-[0_0_0_8px_rgba(16,185,129,0.05)]">
                          <Check className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Inquiry sent successfully.
                          </p>
                          <p className="text-sm text-slate-400">
                            We have delivered your request to the team and will reply soon.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#B0B7C3]">Full Name</label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-[#B0B7C3]">
                    <span className="mb-2 block">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                    />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-[0.45fr_0.55fr]">
                    <div className="relative" ref={countryPickerRef}>
                      <label className="block text-sm font-medium text-[#B0B7C3]">
                        <span className="mb-2 block">Country code</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setCountryMenuOpen((open) => !open)}
                        className="flex h-14 w-full items-center justify-between rounded-2xl border border-white/10 bg-[#070707] px-4 text-left text-white transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      >
                        <span className="truncate text-sm">{selectedCountry.label}</span>
                        <ChevronDown className="h-4 w-4 text-white/70" />
                      </button>
                      {countryMenuOpen && (
                        <div className="absolute inset-x-0 top-full z-50 mt-2 max-h-[28rem] overflow-hidden rounded-3xl border border-white/10 bg-[#020202] shadow-2xl">
                          <div className="border-b border-white/10 p-3">
                            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0D0D0D] px-3 py-2">
                              <Search className="h-4 w-4 text-white/60" />
                              <input
                                value={countrySearch}
                                onChange={(event) => setCountrySearch(event.target.value)}
                                autoFocus
                                placeholder="Search country"
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                              />
                            </div>
                          </div>
                          <div className="max-h-72 overflow-y-auto">
                            {filteredCountries.length ? (
                              filteredCountries.map((country) => (
                                <button
                                  key={country.label}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setCountrySearch('');
                                    setCountryMenuOpen(false);
                                  }}
                                  className="flex w-full items-center justify-between gap-3 rounded-none border-b border-white/10 px-4 py-3 text-left text-sm text-white transition hover:bg-white/5"
                                >
                                  <span className="truncate">{country.label}</span>
                                  <span className="text-slate-400">{country.value}</span>
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-4 text-sm text-slate-500">
                                No matching country found.
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <label className="block text-sm font-medium text-[#B0B7C3]">
                      <span className="mb-2 block">Phone</span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="123 456 7890"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#B0B7C3]">Tell us about your needs</label>
                  <textarea
                    value={needs}
                    onChange={(event) => setNeeds(event.target.value)}
                    placeholder="What are you looking to build or improve?"
                    rows={5}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#765EFF] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#8F7CFF] focus:outline-none focus:ring-2 focus:ring-[#765EFF]/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className={submitting ? 'opacity-40' : ''}>Send Request</span>
                  {submitting && (
                    <motion.span
                      className="absolute inset-y-0 left-0 flex w-full items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Mail className="h-5 w-5 animate-pulse text-white" />
                    </motion.span>
                  )}
                </button>
                {error ? (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {error}
                  </div>
                ) : null}
              </div>
            </form>
          </FadeIn>
        </div>

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-radial from-[#765EFF]/10 via-[#4B6EFF]/8 to-transparent blur-[100px] -z-10 pointer-events-none"
        />
      </div>
    </Section>
  );
}
