import PackagePage from './PackagePage';
const Mussoorie = () => <PackagePage packageId="mussoorie" relatedPackages={[
  { link: '/packages/nainital', label: 'Nainital Tour Package' },
  { link: '/packages/rishikesh', label: 'Rishikesh Tour Package' },
  { link: '/packages/char-dham-yatra', label: 'Char Dham Yatra Package' },
]} relatedGuide={{ link: '/guides/mussoorie-travel-guide-2026', label: 'Mussoorie Travel Guide 2026' }} />;
export default Mussoorie;
