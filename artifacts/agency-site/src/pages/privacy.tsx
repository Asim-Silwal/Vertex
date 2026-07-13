import LegalPage from '@/components/sections/LegalPage';

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Vertex Digital collects, uses, and protects information submitted through the website and contact form."
      updatedAt="July 13, 2026"
      canonicalPath="/privacy"
      sections={[
        {
          title: 'Information We Collect',
          paragraphs: [
            'Vertex Digital collects information you submit directly through the contact form, including your name, email address, phone number, country code, and project details.',
            'We may also receive basic technical data such as browser type, device information, and page access logs from the hosting platform or browser, but we do not intentionally collect sensitive personal information through the website.',
          ],
        },
        {
          title: 'How We Use Information',
          paragraphs: [
            'We use the information you submit to respond to inquiries, prepare project estimates, and follow up about potential services. Contact form submissions are sent to our configured Google Apps Script endpoint and email inbox so we can respond quickly.',
            'We may also use information to improve the website experience, maintain records of active conversations, and prevent abuse or spam.',
          ],
        },
        {
          title: 'Cookies and Similar Technologies',
          paragraphs: [
            'The site uses a small cookie to remember sidebar preferences in shared UI components. That cookie is functional and does not track you across unrelated sites.',
            'If analytics are added in the future, this policy should be updated before deployment so visitors can review the data collection in plain language.',
          ],
        },
        {
          title: 'Data Sharing and Third Parties',
          paragraphs: [
            'We do not sell personal information. We only share contact form data with service providers required to operate the website, such as the email and spreadsheet tools used to process inquiries.',
            'If a project requires new third-party tools, we will document them and update this policy accordingly.',
          ],
        },
        {
          title: 'Your Choices',
          paragraphs: [
            'You can request that we update or delete information you previously submitted by emailing us directly. If you do not want to submit information through the website, you can contact us by phone or email instead.',
            'If you are located outside the United States, you may have additional rights under your local privacy laws. We will make reasonable efforts to respond to compliant requests.',
          ],
        },
      ]}
    />
  );
}