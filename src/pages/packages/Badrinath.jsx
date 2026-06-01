import PackagePage from './PackagePage';
const Badrinath = () => <PackagePage packageId="badrinath" relatedPackages={[
  { link: '/packages/char-dham-yatra', label: 'Full Char Dham Yatra Package' },
  { link: '/packages/kedarnath', label: 'Kedarnath Tour Package' },
  { link: '/packages/haridwar-sightseeing', label: 'Haridwar Sightseeing' },
]} />;
export default Badrinath;
