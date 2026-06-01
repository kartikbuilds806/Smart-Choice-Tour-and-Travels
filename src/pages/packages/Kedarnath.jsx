import PackagePage from './PackagePage';
const Kedarnath = () => <PackagePage packageId="kedarnath" relatedPackages={[
  { link: '/packages/char-dham-yatra', label: 'Char Dham Yatra Package' },
  { link: '/packages/badrinath', label: 'Badrinath Tour Package' },
  { link: '/packages/haridwar-sightseeing', label: 'Haridwar Local Sightseeing' },
]} relatedGuide={{ link: '/guides/kedarnath-travel-guide-2026', label: 'Kedarnath Travel Guide 2026' }} />;
export default Kedarnath;
