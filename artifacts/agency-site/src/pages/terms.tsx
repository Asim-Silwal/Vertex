import LegalPage from '@/components/sections/LegalPage';

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The general terms that apply when using the Vertex Digital website or contacting us about a project."
      updatedAt="July 13, 2026"
      canonicalPath="/terms"
      sections={[
        {
          title: 'Use of This Website',
          paragraphs: [
            'This website is provided for informational and marketing purposes. You agree to use it only for lawful purposes and in a way that does not disrupt service for others.',
            'You may not attempt to access restricted systems, bypass security controls, or use the site in a way that could damage its availability or integrity.',
          ],
        },
        {
          title: 'Quotes and Project Discussions',
          paragraphs: [
            'Any pricing, timelines, or project estimates discussed through the site are informational until confirmed in a separate written agreement.',
            'Scope changes, additional revisions, or third-party service costs may affect project pricing and delivery timelines.',
          ],
        },
        {
          title: 'Intellectual Property',
          paragraphs: [
            'The site design, copy, branding, and other original materials are owned by Vertex Digital or used with permission. You may not reproduce them without authorization.',
            'Client work created under a separate agreement is governed by the terms of that agreement.',
          ],
        },
        {
          title: 'No Warranties',
          paragraphs: [
            'We work carefully to keep the site accurate and available, but it is provided on an "as is" basis without warranties of any kind.',
            'We do not guarantee specific business results from visiting the site or from any conversation started through the contact form.',
          ],
        },
        {
          title: 'Limitation of Liability',
          paragraphs: [
            'To the maximum extent allowed by law, Vertex Digital is not liable for indirect, incidental, or consequential damages resulting from the use of this website.',
            'If a formal service agreement exists, that agreement controls the operational and legal obligations for the project.',
          ],
        },
      ]}
    />
  );
}