import PackagePage from './PackagePage';
const Rishikesh = () => <PackagePage packageId="rishikesh" relatedPackages={[
  { link: '/packages/haridwar-sightseeing', label: 'Haridwar Local Sightseeing' },
  { link: '/packages/mussoorie', label: 'Mussoorie Tour Package' },
  { link: '/packages/char-dham-yatra', label: 'Char Dham Yatra Package' },
]} relatedGuide={{ link: '/guides/rishikesh-adventure-spiritual-guide', label: 'Rishikesh Travel Guide 2026' }} />;
export default Rishikesh;
