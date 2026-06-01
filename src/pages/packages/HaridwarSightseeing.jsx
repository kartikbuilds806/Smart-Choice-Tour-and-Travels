import PackagePage from './PackagePage';
const HaridwarSightseeing = () => <PackagePage packageId="haridwar-sightseeing" relatedPackages={[
  { link: '/packages/rishikesh', label: 'Rishikesh Tour Package' },
  { link: '/packages/mussoorie', label: 'Mussoorie Tour Package' },
  { link: '/packages/char-dham-yatra', label: 'Char Dham Yatra Package' },
]} relatedGuide={{ link: '/guides/top-10-locations-haridwar', label: 'Top 10 Places in Haridwar' }} />;
export default HaridwarSightseeing;
