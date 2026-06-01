import PackagePage from './PackagePage';
const Nainital = () => <PackagePage packageId="nainital" relatedPackages={[
  { link: '/packages/mussoorie', label: 'Mussoorie Tour Package' },
  { link: '/packages/rishikesh', label: 'Rishikesh Tour Package' },
  { link: '/packages/char-dham-yatra', label: 'Char Dham Yatra Package' },
]} />;
export default Nainital;
